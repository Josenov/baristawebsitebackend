import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import User from '../models/user.model.js';
import Jwt from 'jsonwebtoken'
import { verify } from '../helpers/google-verify.js';
import { upload } from '../middlewares/uploadImgMulter.js';


const controller = {
    signUp: async (req, res, next) => {

        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex');
            req.body.password = bcrypt.hashSync(req.body.password, 10)

            const user = await User.create({
                ...req.body,
                image : req.file ? req.file.filename : null
            })
            

            return res.status(201).json({
                success: true,
                message: 'Usuario creado correctamente!'
            })

        } catch (error) {
            console.log(error)
            /* return res.status(500).json({
                success: false,
                message: 'Error al registrar usuario!'
            }) */
        }

    },

    signIn: async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                { email: req.user.email },
                { online: true },
                { new: true }
            )

            const token = Jwt.sign(
                {
                    id: user._id,
                    name: user.name,
                    image: user.image,
                    email: user.email
                },

                process.env.SECRET,
                { expiresIn: '10h' }
            )

            user.password = null

            return res.status(200).json({
                success: true,
                message: 'Usuario logueado correctamente!',
                response: {
                    token,
                    user
                }
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'error al iniciar sesion!'
            })
        }
    },

    signOut: async (req, res, next) => {
        try {

            const user = await User.findOneAndUpdate(
                { email: req.user.email },
                { online: false },
                { new: true }
            )

            return res.status(200).json({
                success: true,
                message: "Usuario deslogueado correctamente!"
            })


        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'error al desloguear usuario!'
            })
        }
    },

    token: async (req, res, next) => {
        const { user } = req
        try {
            return res.status(200).json({
                user: {
                    name: user.name,
                    email: user.email,
                    image: user.image
                }
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'error al guardar informacion de usuario!'
            })
        }
    },

    googleSignIn: async (req, res, next) => {


        const { token_id } = req.body;

        try {
            const { name, email, image } = await verify(token_id)

            let user = await User.findOne({ email })

            if (!user) {
                const data = {
                    name,
                    email,
                    image,
                    password: bcrypt.hashSync(process.env.DEFAULT_PASSWORD, 10),
                    google: true,
                    role: 'user'
                }

                user = await User.create(data)

            }

            user.online = true;

            await user.save();

            const token = Jwt.sign(
                {
                    id: user._id,
                    email: user.email,
                    name: user.name,
                    image: user.image
                },
                process.env.SECRET,
                { expiresIn: '10h' }
            )

            res.status(200).json({
                success: true,
                message: "User logged with Google!",
                response: {
                    token,
                    user: {
                        name: user.name,
                        email: user.email,
                        image: user.image
                    }
                }
            })

        } catch (error) {
            /* res.status(500).json({
                success:false,
                message:"Google Sign In Failed"
            }) */

            console.log(error)

        }






    }


}

export default controller;
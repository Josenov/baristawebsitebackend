import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import User from '../models/user.model.js';
import Jwt from 'jsonwebtoken'

const controller = {
    signUp : async (req, res, next) => {

        try {
            req.body.verified_code = crypto.randomBytes(10).toString('hex');
            req.body.password = bcrypt.hashSync(req.body.password, 10)

            const user = await User.create(req.body)

            return res.status(201).json({
                success: true,
                message:'Usuario creado correctamente!'
            })

        } catch (error) {
            return res.status(500).json({
                success: false,
                message:'Error al registrar usuario!'
            })
        }

    },

    signIn : async (req, res, next) => {
        try {
            let user = await User.findOneAndUpdate(
                {email:req.user.email},
                {online:true},
                {new:true}
            )

            const token = Jwt.sign(
                {
                    id: user._id,
                    name:user.name,
                    image:user.image,
                    email:user.email
                },

                process.env.SECRET,
                {expiresIn:'10h'}
            )

            user.password = null

            return res.status(200).json({
                success: true,
                message:'Usuario logueado correctamente!',
                response:{
                    token,
                    user
                }
            })
            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message:'error al iniciar sesion!'
            })
        }
    }
}

export default controller;
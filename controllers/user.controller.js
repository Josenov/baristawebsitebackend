import User from '../models/user.model.js'

const controller = {
    getUsers:(req, res)=>{
        res.json({
            users:[
                {
                    user: 'User A',
                    password:"Password123"},

                {   
                    user: 'User B',
                    password:"Password123"
                }
            ]
        })
    },

    createUser: async (req, res)=>{
        try {
            const newUser = User.create(req.body);

            return res.status(201).json({
                success:true,
                message:'Usuario creado correctamente!'
        })

        
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:'Error al crear usuario!'
            })
        }

    },

    deleteUser:()=>{

    }
}

export default controller;
import User from "../../models/user.model.js"

export const accountExistsSignIn = async (req, res, next) =>{

    const user = await User.findOne({email:req.body.email})

    if(user){

        req.user={
            id:user._id,
            image: user.image,
            email:user.email,
            password:user.password,
            online: user.online,
            verified:user.verified

        }

        return next();
        

    }

    return res.status(400).json({
        success:false,
        message:'Usuario no registrado, crea una cuenta o inicia sesion con Google'
    })

}
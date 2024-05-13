import bcrypt from 'bcryptjs'

export const passwordIsOk = (req, res, next) => {
    
    const password_db = req.user.password;
    const password_form = req.body.password;

    if(bcrypt.compareSync(password_form, password_db)){

        return next()
    }

    return res.status(400).json({
        success:false,
        message:"Contraseña Incorrecta"
    })
}
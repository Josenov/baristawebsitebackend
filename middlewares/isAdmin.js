import User from "../models/user.model";

export const isAdmin = async (req, res, next)=>{
    try {
        const user = await User.findById(req.query.userId)

        if(user.role === 'admin')  {
            return next()
        }
        return res.status(401).json({
            success:false,
            message:"Usuario no autorizado para realizar esta accion"
        })
    } catch (error) {

        return res.status(500).json({
            success:false,
            message:"Error Middleware isAdmin"
        })
        
    }
}
import User from "../models/user.model.js";

export const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.query.userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado",
            });
        }

        if (user.role === "admin") {
            return next();
        }

        return res.status(401).json({
            success: false,
            message: "El usuario no tiene permisos de administrador para realizar esta acción",
        });
    } catch (error) {
        console.error("Error en el middleware isAdmin:", error);
        return res.status(500).json({
            success: false,
            message: "Error interno del servidor",
        });
    }
};
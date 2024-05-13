export const validator = (schema) => [
    (req, res, next) =>{
        const validation = schema.validate(req.body, {abortEarly:false});

        if(validation.error){
            return res.status(400).json({
                success:false,
                messsage: validation.error.details.map(error => error.messsage)
            })
        }

        return next();
    }
]
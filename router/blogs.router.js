import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        user:'Nombre Usuario',
        comments:'Dejo una descripcion de mi experiencia en este lugar'
    })
})

export default router;
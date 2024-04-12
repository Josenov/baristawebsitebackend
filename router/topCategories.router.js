import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        title:'Nombre Categoria',
        descripcion:'Esto es una descripcion de la categoria seleccionada'
    })
})

export default router;
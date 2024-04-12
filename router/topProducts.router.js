import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        title:'Nombre Producto Top',
        descripcion:'Esto es una descripcion del producto top seleccionado'
    })
})

export default router;
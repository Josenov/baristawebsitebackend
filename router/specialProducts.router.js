import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        title:'Nombre Producto',
        description:'Esto es una descripcion del producto',
        price:'99.99'
    })
})

export default router;
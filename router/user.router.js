import express from 'express'

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        user:'Nombre Usuario',
        password:'UserPassword'
    })
})

export default router;
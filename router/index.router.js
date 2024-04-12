import express from 'express'
import userRouter from './user.router.js'
import topCategoriesRouter from './topCategories.router.js'
import topProductsRouter from './topProducts.router.js'
import specialProductsRouter from './specialProducts.router.js'
import blogsRouter from './blogs.router.js'

const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Mensaje de Prueba")
})

router.use('/users', userRouter)
router.use('/topCategories', topCategoriesRouter)
router.use('/topProducts', topProductsRouter)
router.use('/specialProducts', specialProductsRouter)
router.use('/blogs', blogsRouter)

export default router;
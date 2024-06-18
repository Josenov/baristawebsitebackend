import express from 'express'
import userRouter from './user.router.js'
import topCategoriesRouter from './topCategories.router.js'
import topProductsRouter from './topProducts.router.js'
import specialProductsRouter from './specialProducts.router.js'
import blogsRouter from './blogs.router.js'
import authRouter from './auth.router.js'
import cartRouter from './cart.router.js'

const router = express.Router();

router.get('/', (req, res)=>{
    res.send("Mensaje de Prueba")
})

router.use('/users', userRouter)
router.use('/topCategories', topCategoriesRouter)
router.use('/topProducts', topProductsRouter)
router.use('/specialProducts', specialProductsRouter)
router.use('/blogs', blogsRouter)
router.use('/auth', authRouter)
router.use('/cartProducts', cartRouter)


export default router;
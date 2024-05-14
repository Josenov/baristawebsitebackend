import express from 'express'
import topProducts from "../controllers/topProducts.controller.js"
import passportMiddleware from '../middlewares/passport.js';


const router = express.Router();

const passport = passportMiddleware.authenticate('jwt', {session:false})

router.get('/',topProducts.getTopProducts)

router.get('/:id', topProducts.getTopProductById )

router.post('/', passport , topProducts.createTopProduct)

router.put('/:id', passport , topProducts.updateTopProduct)

router.delete('/:id', passport ,topProducts.deleteTopProduct )


export default router;
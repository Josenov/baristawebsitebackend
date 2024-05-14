import express from 'express'
import specialProductsController from '../controllers/specialProducts.controller.js'
import passportMiddleware from '../middlewares/passport.js';


const router = express.Router();

const passport = passportMiddleware.authenticate('jwt', {session:false})

router.get('/', specialProductsController.getSpecialProducts)

router.get('/:id', specialProductsController.getSpecialProductById)

router.put('/:id',passport, specialProductsController.updateSpecialProduct)

router.post('/',passport, specialProductsController.createSpecialProduct)

router.delete('/:id',passport, specialProductsController.deleteSpecialProduct)

export default router;
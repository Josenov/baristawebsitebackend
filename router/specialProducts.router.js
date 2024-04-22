import express from 'express'
import specialProductsController from '../controllers/specialProducts.controller.js'

const router = express.Router();

router.get('/', specialProductsController.getSpecialProducts)

router.get('/:id', specialProductsController.getSpecialProductById)

router.put('/:id', specialProductsController.updateSpecialProduct)

router.post('/', specialProductsController.createSpecialProduct)

router.delete('/:id', specialProductsController.deleteSpecialProduct)

export default router;
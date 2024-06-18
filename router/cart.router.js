import express from 'express'
import cartController from '../controllers/cart.controller.js'
import specialProducts from '../controllers/specialProducts.controller.js'

const router = express.Router();

router.get('/', cartController.getCartProducts)



router.post('/', cartController.addCartProducts )

router.put('/:id', specialProducts.updateSpecialProduct )

router.delete('/:id', specialProducts.deleteSpecialProduct )


export default router;

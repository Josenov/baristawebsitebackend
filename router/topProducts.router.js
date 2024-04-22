import express from 'express'
import topProducts from "../controllers/topProducts.controller.js"

const router = express.Router();

router.get('/',topProducts.getTopProducts)

router.get('/:id', topProducts.getTopProductById )

router.post('/', topProducts.createTopProduct)

router.put('/:id', topProducts.updateTopProduct)

router.delete('/:id',topProducts.deleteTopProduct )


export default router;
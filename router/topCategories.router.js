import express from 'express'
import topCategories from '../controllers/topCategories.controller.js'

const router = express.Router();

router.get('/', topCategories.getTopCategories)

router.get('/:id', topCategories.getTopCategoriesById)

router.post('/', topCategories.createTopCategory)

router.put('/', topCategories.updateTopCategory)

router.delete('/', topCategories.deleteTopCategory)

export default router;
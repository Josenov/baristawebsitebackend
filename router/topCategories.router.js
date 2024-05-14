import express from 'express'
import topCategories from '../controllers/topCategories.controller.js'
import passportMiddleware from '../middlewares/passport.js';

const passport = passportMiddleware.authenticate('jwt', {session:false})

const router = express.Router();

router.get('/', topCategories.getTopCategories)

router.get('/:id', topCategories.getTopCategoriesById)

router.post('/', passport, topCategories.createTopCategory)

router.put('/', passport, topCategories.updateTopCategory)

router.delete('/', passport, topCategories.deleteTopCategory)

export default router;
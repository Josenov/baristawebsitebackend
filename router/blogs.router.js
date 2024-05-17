import express from 'express'
import blogController from '../controllers/blog.controller.js'
import passportMiddleware from '../middlewares/passport.js';
import { isAdmin } from '../middlewares/isAdmin.js';

const router = express.Router();

const passport = passportMiddleware.authenticate('jwt', {session:false})

router.get('/', blogController.getBlogs)

router.get('/:id', blogController.getBlogById)

router.post('/', passport, isAdmin, blogController.createBlog)

router.put('/:id', passport, isAdmin, blogController.updateBlog)

router.delete('/:id', passport, isAdmin, blogController.deleteBlog)

export default router;
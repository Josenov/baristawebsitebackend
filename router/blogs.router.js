import express from 'express'
import blogController from '../controllers/blog.controller.js'
import passportMiddleware from '../middlewares/passport.js';

const router = express.Router();

const passport = passportMiddleware.authenticate('jwt', {session:false})

router.get('/', blogController.getBlogs)

router.get('/:id', blogController.getBlogById)

router.post('/', passport, blogController.createBlog)

router.put('/:id', passport, blogController.updateBlog)

router.delete('/:id', passport, blogController.deleteBlog)

export default router;
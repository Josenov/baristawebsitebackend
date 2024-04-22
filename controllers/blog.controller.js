import Blog from "../models/blogs.model.js";

const controller = {
    getBlogs: async (req, res) => {

        try {
            const blogs = await Blog.find()

            return res.status(200).json({
                success: true,
                blogs: blogs
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'error loading blogs!'
            })
        }

    },

    getBlogById: async (req, res) => {

        try {
            const oneBlog = await Blog.findById(req.params.id)

            if (oneBlog) {
                return res.status(200).json({
                    success: true,
                    oneBlog: oneBlog
                })
            }
            return res.status(404).json({
                success: false,
                message: 'error loading blog by ID!'
            })




        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'error loading blog!'
            })
        }

    },

    createBlog: async (req, res) => {

        try {
            const newBlog = Blog.create(req.body)

            return res.status(201).json({
                success: true,
                message: 'Blog creado correctamente!'
            })


        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'error creando blog!'
            })
        }


    },

    updateBlog: async(req, res) => {
        try {
            await Blog.updateOne({_id:req.params.id},req.body)

            return res.status(201).json({
                success:true,
                message:'Blog editado correctamente!'
            })

        } catch (error) {
            return res.status(500).json({
                success:false,
                message:'Error al editar Blog!'
        })
            
        }

    },

    deleteBlog:async(req, res) => {
        try {
            await Blog.deleteOne({_id:req.params.id})
            return res.status(201).json({
                success:true,
                message:'Blog eliminado correctamente!'
            })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:'Error al eliminar blog!'
        })
            
        }

    }
}

export default controller;
import topCategory from '../models/topCategories.model.js'


const controller = {

    getTopCategories: async (req, res)=>{
        try {

            const topCategories = await topCategory.find();

            return res.status(200).json({
                success:true,
                topCategories:topCategories

            })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: "Error al traer Categorias Top"

            })
        }

    },

    getTopCategoriesById: async (req, res)=>{
        try {
            const oneTopCategory = await topCategory.findById(re.params.id)

            if(oneTopCategory){
                return res.status(200)({
                    success:true,
                    oneTopCategory: oneTopCategory
                })
            }

            return res.status(404).json({
                success:false,
                message:"No se encontro Categoria Top buscado por ID"
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: "Error al traer Categorias Top"

            })
        }

    },

    createTopCategory: async (req, res)=>{
        try {

            const newTopCategory = topCategory.create(req.body) 

            return res.status(200).json({
                success:true,
                message:"Caegoria Top creada con exito!"
            })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: "Error al crear Categorias Top"

            })
        }

    },

    updateTopCategory: async (req, res)=>{
        try {
            await topCategory.updateOne({_id:req.params.id}, req.body)
            return res.status(200).json({
                success:true,
                message:"Categoria Top actualizada"
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error al actualizar Categoria Top"
            })
            
        }

    },

    deleteTopCategory: async (req, res)=>{
        try {
            await topCategory.deleteOne(req.params.id)
            return res.status(200).json({
                success:true,
                message:"Categoria Top eliminada"
            })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error al eliminar Categoria Top"
            })
        }

    }
}

export default controller;
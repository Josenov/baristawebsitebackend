import topProduct from "../models/topProducts.model.js"

const controller = {
    getTopProducts:async (req, res) =>{
        try {
            const topProductList = await topProduct.find();

            return res.status(200).json({
                success:true,
                topProductList: topProductList
            })
        } catch (error) {
            
        }

    },

    getTopProductById:async (req, res) =>{

        try {
            const oneTopProduct = await topProduct.findById(req.params.id)

            if(oneTopProduct){
                return res.status(200)({
                    success:true,
                    oneTopProduct: oneTopProduct
                })
            }

            return res.status(404).json({
                success:false,
                message:"No se encontro Producto Top buscado por ID"
            })
            
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error al buscar Producto Top"
            })
        }

    },

    createTopProduct:async (req, res) =>{

        try {
            const newTopProduct = topProduct.create(req.body)

            return res.status(200).json({
                success:true,
                message:"Producto Top creado con exito!"
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error al crear Producto Top"
            })
        }

    },

    updateTopProduct:async (req, res) =>{
        try {

            await topProduct.updateOne({_id:req.params.id}, req.body)

        return res.status(200).json({
            success:true,
            message:"Producto Top actualizado"
        })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error al actualizar Producto Top"
            })
        }

        
    },

    deleteTopProduct:async (req, res) =>{

        try {
            await topProduct.deleteOne(req.params.id)

            return res.status(200).json({
                success:true,
                message:"Producto Top eliminado correctamente!"
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error al eliminar Producto Top!"
            })
        }
        

    }
}

export default controller;
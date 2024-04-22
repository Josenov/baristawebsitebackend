import specialProducts from '../models/specialProducts.model.js'

const controller = {
    getSpecialProducts: async (req, res) => {
        try {

        const specialProductsList = await specialProducts.find()

        return res.status(200).json({
            success: true,
            specialProductsList: specialProductsList
        })
            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message:"Error cargando Productos Especiales"
            })
        }
        

    },

    getSpecialProductById: async (req, res) => {
        try {
            const oneSpecialProduct = await specialProducts.findById(req.params.id)

            if(oneSpecialProduct){
                return res.status(200).json({
                    success:true,
                    oneSpecialProduct:oneSpecialProduct
                })

                
            }

            return res.status(404).json({
                success:false,
                message:"Error al buscar Producto Especial por ID"
            })
        } catch (error) {

            return res.status(500).json({
                success:false,
                message:"Error al buscar producto especial"
            })
            
        }

    },

    createSpecialProduct: (req, res) => {
        try {
            const newSpecialProduct = specialProducts.create(req.body)

            return res.status(201).json({
                success: true,
                message: "Producto especial creado correctamente!"
            })


        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Error creando Producto Especial"
            })
        }

    },

    updateSpecialProduct: async (req, res) => {

        try {

            await specialProducts.updateOne({_id:req.params.id}, req.body)

            return res.status(200).json({
                success:true,
                message:"Producto Especial actualizado"
            })
            
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error al actualizar Producto Especial"
            })
        }

    },

    deleteSpecialProduct: async (req, res) => {

        try {
            await specialProducts.deleteOne({_id:req.params.id})

            return res.status(200).json({
                success:true,
                message:"Prodcuto Especial Eliminado!"
            })
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error al Eliminar Producto Especial"
            })
        }

    }
}

export default controller;
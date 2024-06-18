import specialProducts from '../models/specialProducts.model.js'
import Cart from '../models/cart.model.js'
import specialProduct from '../models/specialProducts.model.js';

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

        const {specialProductId} = req.params;
        const {query} = req.query;
        const {body} = req.body

        const specialProductSearched = await Cart.findById(specialProductId)

        if(!query){
            res.status(404).json({
                message:"debes enviar una query"
            })
        } else if (specialProductSearched && query === "add") {
            body.amount = body.amount + 1;

            await Cart.findByIdAndUpdate(specialProductId, body, {new:true
            }) .then ((specialProduct)=>{
                res.json({
                    message: `El producto: ${specialProduct.title} fue actualizado`,
                    specialProduct
                })
            })

        } else if (specialProductSearched && query === 'del'){
            body.amount = body.amount - 1;

            await Cart.findByIdAndUpdate(specialProductId, body, {new:true
            }) .then ((specialProduct)=>{
                res.json({
                    message: `El producto: ${specialProduct.title} fue actualizado`,
                    specialProduct
                })
            })
        } else {
            res.status(400).json({
                message: 'Ocurrio un error en UpdateSpecialProduct'
            })
        }




        /* try {

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
        } */

    },

    deleteSpecialProduct: async (req, res) => {

        const {specialProductId} = req.params;

        const specialProductInCart = await Cart.findById(specialProductId)

        const {title, image, price, description, _id} = await specialProduct.findOne({
            title: specialProductInCart.title
        })

        await Cart.findByIdAndDelete(specialProductId)

        await specialProduct.findByIdAndUpdate(
            _id,
            {inCart:false, title, image, price, description},
            {new:true}

        )

        .then((specialProduct)=>{
            res.json({
                message:`El producto ${specialProduct.title} fue eliminado del carrito`
            })
        })

        .catch((error) => res.json({
            message:'Hubo un error en DeleteSpecialProduct'
        }))

        /* try {
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

    } */
    }
}

export default controller;
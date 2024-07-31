import Cart from '../models/cart.model.js'
import SpecialProducts from '../models/specialProducts.model.js'

const controller = {

    getCartProducts : async (req, res)=>{

        const cartProducts = await Cart.find();

        if(cartProducts){
            res.json({cartProducts});
        }else{
            res.json({message: "El carrito se encuentra vacío"})
        }

    },

    /* addCartProducts : async (req, res)=>{

        const {title, image , price, description} = req.body;

        const isInProducts = await SpecialProducts.findOne({title});

        const notBlank = title !== "" && image !== "" && price !== "" && description !== "";

        const isInCart = await Cart.findOne({title})

        if(!isInProducts){
            res.status(400).json({
                message:"Este producto no esta en nuestra base de datos"
            })
        } else if (notBlank && !isInCart){
            const newProductInCart = new Cart ({title, image, price, description, amount:1})

            await SpecialProducts.findByIdAndUpdate(
                isInCart?._id,
                {inCart:true, title, image, price, description},
                {new:true}
            )

                    .then((specialProd) => {
                        newProductInCart.save();
                        res.json({
                            message:'El producto fue agregado al carrito',
                            specialProd
                        });
                    })
                    .catch((error)=>console.log(error))

            
        } else if (isInCart){
            res.status(400).json({
                success:false,
                message: 'El producto ya esta en el carrito'
            })
        }


        
    }, */

    addCartProducts : async (req, res) => {
        const {title, image, price, description} = req.body;
    
        const isInProducts = await SpecialProducts.findOne({title});
        const notBlank = title !== "" && image !== "" && price !== "" && description !== "";
        const isInCart = await Cart.findOne({title});
    
        if(!isInProducts){
            return res.status(400).json({
                message: "Este producto no está en nuestra base de datos"
            });
        }
    
        if(notBlank && !isInCart){
            const newProductInCart = new Cart({title, image, price, description, amount: 1});
    
            try {
                const specialProd = await SpecialProducts.findByIdAndUpdate(
                    isInProducts._id,
                    {inCart: true, title, image, price, description},
                    {new: true}
                );
    
                if (specialProd) {
                    await newProductInCart.save();
                    return res.json(specialProd)
                } else {
                    return res.status(400).json({
                        message: 'No se pudo actualizar el producto en la base de datos'
                    });
                }
            } catch (error) {
                console.log(error);
                return res.status(500).json({
                    message: 'Ocurrió un error al agregar el producto al carrito'
                });
            }
        }
    
        if(isInCart){
            return res.status(400).json({
                success: false,
                message: 'El producto ya está en el carrito'
            });
        }
    },

    deleteCartProducts : async (req, res)=>{
        
    },

}

export default controller;
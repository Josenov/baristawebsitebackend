import {Schema, model, Types} from 'mongoose'

let collection = 'topProducts'

let schema = new Schema({
    title: {type:String, required:true},
    image: {type:String, required:true},
    price: {type:Number, required:true},
    ingredients: {type:String, required:true}
}, {
    timestamps:true
})

const topProduct = model(collection, schema)

export default topProduct;
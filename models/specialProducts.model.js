import {Schema, model, Types} from 'mongoose'

let collection = 'specialProducts'

let schema = new Schema({
    title: {type:String, required:true},
    image: {type:String, required:true},
    price: {type:Number, required:true},
    description: {type:String, required:true},
    inCart: {type:Boolean, default:false},
    amount : {type: Number, default:0}
}, {
    timestamps:true
})

const specialProduct = model(collection, schema)

export default specialProduct;
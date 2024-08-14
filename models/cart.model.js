import {Schema, model, Types} from 'mongoose'

let collection = "cart"

let schema = new Schema({
    title: {type:String, required:true, unique: true},
    image: {type:String, required:true},
    price: {type:Number, required:true},
    amount: {type:Number, required:true},
    
    
})

const cartSchema = model(collection, schema)

export default cartSchema;
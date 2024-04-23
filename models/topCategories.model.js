import {Schema, model, Types} from 'mongoose'

let collection = 'topCategories'

let schema = new Schema({
    category: {type:String, required:true},
    varieties:[{
    title: {type:String, required:true},
    image: {type:String, required:true},
    price: {type:Number, required:true},
    ingredients: [{type:String, required:true}],
    description: {type:String, required:true},
    }]
}, {
    timestamps:true
})

const topCategory = model(collection, schema)

export default topCategory;
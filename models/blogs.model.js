import {Schema, model, Types} from 'mongoose'

let collection = 'blogs'

let schema = new Schema({
    user: {type:String, required:true},
    image: {type:String, required:true},
    title: {type:String, required:true},
    description: {type:String, required:true}
}, {
    timestamps:true
})

const Blog = model(collection, schema)

export default Blog;
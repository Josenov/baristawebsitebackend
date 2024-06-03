import {Schema, model, Types} from 'mongoose'

let collection = 'users'

let schema = new Schema({
    name: {type:String, required:true},
    lastName: {type:String, required:false},
    image: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    google: {type:Boolean, default:false},
    role: {type:String, default:'user'},
    online:{type:Boolean, default:false},
    verified:{type:Boolean, default:true},
    verified_code:{type:String}

}, {
    timestamps:true
})

const User = model(collection, schema)

export default User;
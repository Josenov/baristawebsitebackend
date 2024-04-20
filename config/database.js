
import mongoose from 'mongoose'


mongoose.connect(process.env.MONGO)
        .then(()=>console.log("MongoDB Connected"))
        .catch(err=>console.log(err))
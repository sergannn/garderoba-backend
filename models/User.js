import mongoose from 'mongoose'
import Cloth from './Cloth.js'

const { Schema, model } = mongoose
const required = true
const unique = true
const trim = true

const userSchema = new mongoose.Schema({

    username:     { type: String,  trim, unique },
    email:        { type: String,  trim, unique },
    password:     { type: String, required },
    clothes:      { type: [String]  },
})

const User = model("user", userSchema)
export default User


// clothes:      { type: [Schema.Types.ObjectId], ref: "cloth" },
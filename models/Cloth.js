import mongoose from 'mongoose'
import User from './User.js'

const { Schema, model } = mongoose
const timestamps = true
const required = true
const unique = true
const trim = true

const clothSchema = new mongoose.Schema({

    user: { type: Schema.Types.ObjectId, ref: "user" },
    image: { type: String },
    favorite: { type: Boolean, default: false, required },
    type: { type: String, enum: ["top", "bottom", "full"], required },
    color: { type: String, required },
    category: { type: String, enum: ["summer", "winter", "fall", "rainy", "spring" ],required },
    style: {type: String, enum: ["casual", "formal", "work", "holiday" ], required }
}, {timestamps})

const Cloth = model("cloth", clothSchema)
export default Cloth
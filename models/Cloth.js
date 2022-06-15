import mongoose from 'mongoose'
import User from './User.js'

const { Schema, model } = mongoose
const required = true
const unique = true
const trim = true

const clothSchema = new mongoose.Schema({

    user:       { type: Schema.Types.ObjectId, ref: "user" },
    image:      { type: String },
    favorite:   { type: Boolean, default: false },
    type:       { type: String },
    // type:       { required, type: String, enum: ["top", "bottom", "full"] },
    color:      { type: String },
    category:   { type: String, enum: ["summer", "winter", "fall", "rainy", "spring" ] },
    style:      { type: String, enum: ["casual", "formal", "work", "holiday" ],  }
})

const Cloth = model("cloth", clothSchema)
export default Cloth
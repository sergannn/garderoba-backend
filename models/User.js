import mongoose from 'mongoose'

const { Schema, model } = mongoose
const timestamps = true
const required = true
const unique = true
const trim = true

const userSchema = new mongoose.Schema({

    username:     { type: String,  trim, unique },
    email:        { type: String,  trim, unique },
    password:     { type: String, required },
    clothes:      { type: [Schema.Types.ObjectId], ref: 'cloth'  },
    
}, {timestamps})

// Example of controlling how a MongoDB BSON Document gets converted to JSON
userSchema.options.toJSON = {
    transform: function(document, documentAsJSON, options) {
        delete documentAsJSON.__v
        delete documentAsJSON.password
        return documentAsJSON
    }
}

const User = model("user", userSchema)
export default User


// clothes:      { type: [Schema.Types.ObjectId], ref: "cloth" },
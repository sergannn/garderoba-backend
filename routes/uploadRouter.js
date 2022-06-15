import express from 'express'
import multer from 'multer'
import Cloth from "../models/Cloth.js"
import path from "path"


const uploadRouter = express.Router()
const uploadAPic = multer({ dest: "uploads/", limits: { fileSize: 1024 *1024 }  });

const handleUpload = uploadAPic.fields([{ name: "selectedImage", maxCount: 1 }]);

uploadRouter.post("/", async(req,res,next)=>{
    console.log(req.files);
    console.log(req.body);

    try {
        await Cloth.create({
            type: req.body.type,
            
            
        })
        res.send({})
    } catch (error) {
        next({
            status: 400, 
            message: error.message,
            originalError: error
        })
    }
})

// uploadRouter.get("/", async(req,res,next)=>{
//     try {
       

//         res.send([])

//     } catch (error) {
//         next({
//             status: 401, 
//             message: error.message,
//             originalError: error
//         })
//     }
// })

export default uploadRouter
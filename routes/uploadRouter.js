import express from 'express'
import multer from 'multer'
import Cloth from "../models/Cloth.js"
import path from "path"


const uploadRouter = express.Router()
// const uploadAPic = multer({ dest: "uploads/", limits: { fileSize: 1024 *1024 }  });

// const handleUpload = uploadAPic.fields([{ name: "selectedImage", maxCount: 1 }]);

uploadRouter.post("/", async(req,res,next)=>{
    // console.log(req.files);
    console.log(req.body);

    try {
        const cloth = await Cloth.create(req.body)
        console.log(cloth);
        res.send(cloth)
    } catch (error) {
        next({
            status: 400, 
            message: error.message,
            originalError: error
        })
    }
})

uploadRouter.get("/", async(req,res,next)=>{
    
    try {
       
        const cloth = await Cloth.findById("62ac68d5f321765b93ec8c02")
        

        res.send(cloth)

    } catch (error) {
        next({
            status: 401, 
            message: error.message,
            originalError: error
        })
    }
})

export default uploadRouter
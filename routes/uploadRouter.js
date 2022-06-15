import express from 'express'
import multer from 'multer'
import Cloth from "../models/Cloth.js"
import path from "path"


// url: 

const uploadRouter = express.Router()
// const uploadAPic = multer({ dest: "uploads/", limits: { fileSize: 1024 *1024 }  });

// const handleUpload = uploadAPic.fields([{ name: "image", maxCount: 1 }]);

uploadRouter.post("/", 
      // check if user has a token first -- middleware
    async(req,res,next)=>{
    console.log("workworkwowkrwowkreresdfdsgf");
    // console.log(req.files);
    console.log("req.body is... ", req.body);
    let cloth; 
    try {
        cloth = await Cloth.create(req.body)
        // cloth = await Cloth.create({
        //     filename: req.files.image.filename,
        //     path: req.files.image.path,
        // });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
        return;
    }

    res.send(cloth);
})

// 

uploadRouter.get("/uploadImage/:imageId", async(req,res)=>{
    const image = await Cloth.findById(req.params.imageId);
    const absolutePath = path.resolve(image.path);
    res.sendFile(absolutePath)
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
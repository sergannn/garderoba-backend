import express from 'express'

const galleryRouter = express.Router()


galleryRouter.get("/", async(req,res,next)=>{
    try {
       

        res.send([])

    } catch (error) {
        next({
            status: 401, 
            message: error.message,
            originalError: error
        })
    }
})

galleryRouter.get("/?favorite=true", async(req,res,next)=>{
    try {
       

        res.send([])

    } catch (error) {
        next({
            status: 401, 
            message: error.message,
            originalError: error
        })
    }
})

export default galleryRouter
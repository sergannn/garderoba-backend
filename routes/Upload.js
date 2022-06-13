import express from 'express'

const userRouter = express.Router()


uploadRouter.post("/", async(req,res,next)=>{
    try {
       
        
        res.send({})
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
       

        res.send([])

    } catch (error) {
        next({
            status: 401, 
            message: error.message,
            originalError: error
        })
    }
})

export default uploadRouter
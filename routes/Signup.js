import express from 'express'

const signupRouter = express.Router()


signupRouter.post("/", async(req,res,next)=>{
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

// signupRouter.get("/", async(req,res,next)=>{
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

export default signupRouter
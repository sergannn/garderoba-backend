import express from 'express'

const loginRouter = express.Router()


loginRouter.post("/", async(req,res,next)=>{
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

// loginRouter.get("/", async(req,res,next)=>{
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

export default loginRouter
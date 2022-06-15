import express from 'express'

const clothesRouter = express.Router()

// search endpoint
clothesRouter.get("/", async(req,res,next)=>{
    
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

// clothRouter.patch("/:id", =>{

//  remove add favorite, edit the season. for all kinds of update



//  })

// galleryRouter.get("/?favorite=true", async(req,res,next)=>{
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

// 


export default clothesRouter
import express from 'express'
import Cloth from '../models/Cloth.js'
import weatherApiRouter from './weatherApiRouter.js'

const clothesRouter = express.Router()

function clothProcessor(presentWeather){

    // check temperature, rain, humidity and snowing parameters of weather api response
    // 



}



// search endpoint
clothesRouter.get("/", async(req,res,next)=>{
    // this is supposed to find all the clothes of a user. 
    try {
        const clothes = await Cloth.find()  //we are sending all clothes from this
        res.send(clothes)     
        
        // request.body.params = latitute & longitude key values.
        // const presentWeather = WeatherAPI.call(latitude, longitude)
        // Object {
        //       "main": Object {
        //         "feels_like": 19.26,
        //         "humidity": 54,
        //         "pressure": 1017,
        //         "temp": 19.81,
        //         "temp_max": 22.88,
        //         "temp_min": 15.32,
        //     },         
        //         "weather": Array [
        //          Object {
        //             "description": "clear sky",
        //             "icon": "01d",
        //             "id": 800,
        //             "main": "Clear",
        //       },
        //     ],
        //     "wind": Object {
        //       "deg": 0,
        //       "speed": 2.06,
        //     },
        //   }

        // const findClothAsPerTheWeather = clothProcessor(presentWeather)
        // res.send(findClothAsPerTheWeather)

        


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
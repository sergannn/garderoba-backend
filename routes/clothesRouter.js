import express from "express";
import Cloth from "../models/Cloth.js";
import weatherApiRouter from "./weatherApiRouter.js";

const clothesRouter = express.Router();

// function clothProcessor(presentWeather) {
//   // check temperature, rain, humidity and snowing parameters of weather api response
//   //
// }

// search endpoint
clothesRouter.get("/closet", async (req, res, next) => {
  // this is supposed to find all the clothes of a user.
  try {
    if (Object.keys(req.query).length === 0) {
      const clothes = await Cloth.find(); //we are sending all clothes from this
      console.log("the clothes to be send in closet-----", clothes);
      res.send(clothes.reverse());
    } else {
      const clothes = await Cloth.find(req.query);
      res.send(clothes.reverse());
    }
  } catch (error) {
    next({
      status: 401,
      message: error.message,
      originalError: error,
    });
  }
});

clothesRouter.get("/favorite", async (req, res, next) => {
  // this is supposed to find all the favorite clothes of a user.
  try {
    const clothes = await Cloth.find(); //we are sending all clothes from this
    res.send(clothes.reverse());
  } catch (error) {
    next({
      status: 401,
      message: error.message,
      originalError: error,
    });
  }
});
clothesRouter.get("/home", async (req, res, next) => {
  // this is supposed to find all the clothes of a user.
  console.log("season is------",req.body.season);
  console.log("temperature from FE-----", req.query.temperature);
 
  const temperature = parseInt(req.query.temperature); //parsefloat later
  let season = {};
  console.log(typeof temperature);

  
  if(temperature >= 24){
    season = {
      category: "summer"
    }
  }else if(temperature <= 23 && temperature >= 12 ){
    season = {
      category: "fall"
    }
  }else{
    season = {
      category: "winter"
    }
  }

  try {
    
    const clothesTopBox = await Cloth.find({ ...season,type: "top" }); //we are sending all clothes from this
    const clothesBottomBox = await Cloth.find({ ...season, type: "bottom" }); //we are sending all clothes from this
    const favorites = await Cloth.find({favorite:true})
    
    console.log(clothesTopBox.reverse());
    console.log(clothesBottomBox.reverse());
    res.send({ clothesTopBox, clothesBottomBox, favorites });
  } catch (error) {
    next({
      status: 401,
      message: error.message,
      originalError: error,
    });
  }
});

clothesRouter.put("/:id", async (req, res, next) => {
  console.log("req here:", req.body);
  try {
    const id = req.params.id;
    console.log("id", id);
    const cloth = await Cloth.findById(id);
    cloth.favorite = req.body.favorite;
    cloth.save();

    res.send(cloth);
    if (!cloth) {
      return next({ status: 404, message: "not found" });
    }
  } catch (error) {
    next({ status: 400, message: error.message });
  }

  //  remove add favorite, edit the season. for all kinds of update
});

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

export default clothesRouter;

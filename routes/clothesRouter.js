import express from "express";
import Cloth from "../models/Cloth.js";
import weatherApiRouter from "./weatherApiRouter.js";

const clothesRouter = express.Router();

function clothProcessor(presentWeather) {
  // check temperature, rain, humidity and snowing parameters of weather api response
  //
}

// search endpoint
clothesRouter.get("/closet", async (req, res, next) => {
  // this is supposed to find all the clothes of a user.
  try {
    const clothes = await Cloth.find(); //we are sending all clothes from this
    res.send(clothes);
  } catch (error) {
    next({
      status: 401,
      message: error.message,
      originalError: error,
    });
  }
});

clothesRouter.get("/favorite", async (req, res, next) => {
  // this is supposed to find all the clothes of a user.
  try {
    const clothes = await Cloth.find(); //we are sending all clothes from this
    res.send(clothes);
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
  try {
    const clothesTopBox = await Cloth.find({ type: "top" }); //we are sending all clothes from this
    const clothesBottomBox = await Cloth.find({ type: "bottom" }); //we are sending all clothes from this

    res.send({ clothesTopBox, clothesBottomBox });
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
    const cloth = await Cloth.findByIdAndUpdate(id, req.body);
    if (!cloth) {
      return next(createError(404, "not found"));
    }
    res.send(cloth);
  } catch (error) {
    next(createError(400, error.message));
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

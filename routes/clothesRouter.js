import express from "express";
import Cloth from "../models/Cloth.js";
import weatherApiRouter from "./weatherApiRouter.js";

const clothesRouter = express.Router();

function clothProcessor(presentWeather) {
  // check temperature, rain, humidity and snowing parameters of weather api response
  //
}

// search endpoint
clothesRouter.get("/", async (req, res, next) => {
  // this is supposed to find all the clothes of a user.
  try {
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

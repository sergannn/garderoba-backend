import express from "express";
import colorConverter from "../middlewares/colorConverter.js";
import Cloth from "../models/Cloth.js";

const clothesRouter = express.Router();

// Search Endpoints

// GET: All Clothes
clothesRouter.get("/closet",async (req, res, next) => {
  // this is supposed to find all the clothes of a user.
  try {
    if (Object.keys(req.query).length === 0) {
        const clothes = await Cloth.find(); //we are sending all clothes from this
        res.send(clothes.reverse());
    } 
      //     
      //  multiple query handling 
    else {
        if(req.query.color){
          const colorName = colorConverter(req.query.color)
          console.log("colorName", colorName);

          const cloth = await Cloth.find({...req.query, color: Object.values(colorName)})
          console.log(cloth);
          res.send(cloth)
        }

        else{
        const clothes = await Cloth.find(req.query); 
        res.send(clothes.reverse())
      }
    }
  } catch (error) {
      next({
        status: 401,
        message: error.message,
        originalError: error,
      });
  }
});




// GET: All Favorites
clothesRouter.get("/favorite", async (req, res, next) => {
  // this is supposed to find all the favorite clothes of a user.
  try {
    const clothes = await Cloth.find({ favorite: true }); 
    res.send(clothes.reverse());
  } catch (error) {
    next({
      status: 401,
      message: error.message,
      originalError: error,
    });
  }
});

// GET: All Clothes from Current Weather 
clothesRouter.get("/home", async (req, res, next) => {


  const temperature = parseInt(req.query.temperature); //parsefloat later
  let season = "winter";
  console.log(typeof temperature);

  if (temperature >= 24) {
    season = "summer";
  }
  if (temperature <= 23 && temperature >= 12) {
    season = "fall";
  }

  try {
    const clothesAsPerWeather = await Cloth.find({ season }); 
    res.send({ clothesAsPerWeather });
  } catch (error) {
    next({
      status: 401,
      message: error.message,
      originalError: error,
    });
  }
});

// PUT: Mark Your Cloth as Favorite Request
clothesRouter.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const cloth = await Cloth.findById(id);
    cloth.favorite = req.body.favorite;
    cloth.save();

    res.send(cloth);
    if (!cloth) {
      return next({ status: 404, message: "not found" });
    }
  } catch (error) {
    next({ 
      status: 400, 
      message: error.message 
    });
  }
});

// DELETE: Remove Cloth
clothesRouter.delete("/closet/:id", async (req, res, next) => {
  try {
    const item = await Cloth.findById(req.params.id);
    if (!item) {
      return next(createError(404, "cloth not found"));
    }
    item.remove();
    const clothes = await Cloth.find();
    res.send(clothes.reverse());
  } catch (error) {
    next({ status: 400, message: error.message });
  }
});








export default clothesRouter;

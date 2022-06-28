import Cloth from "../models/Cloth.js";

// POST: Add an Item/Cloth from FE
uploadRouter.post("/", async (req, res, next) => {

  try {
    const cloth = await Cloth.create({...req.body, category: req.body.season, type: req.body.type});
    res.send(cloth);
  } catch (error) {
    next({
      status: 400,
      message: error.message,
      originalError: error,
    });
  }
});

// GET: Fetch each cloth object with Image Id as a filter
uploadRouter.get("/", async (req, res, next) => {
  try {
    const cloth = await Cloth.findById("62ac68d5f321765b93ec8c02");
    res.send(cloth);
  } catch (error) {
    next({
      status: 401,
      message: error.message,
      originalError: error,
    });
  }
});

export default uploadRouter;

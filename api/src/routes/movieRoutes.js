const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const movieRouter = Router();

movieRouter.get("/", controllers.getMovies);
movieRouter.post("/", middlewares.validation, controllers.createMovie);

module.exports = movieRouter;
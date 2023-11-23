const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const movieRouter = Router();

movieRouter.get("/", controllers.getMovies);
movieRouter.post("/", middlewares.validation, controllers.createMovie);
movieRouter.get("/:id", controllers.getMovie);
movieRouter.delete("/:id", controllers.deleteMovie);

module.exports = movieRouter;
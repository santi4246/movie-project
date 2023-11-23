const { Router } = require("express");

const router = Router();

router.use("/movies", require("./movieRoutes"));

module.exports = router;
const { response } = require("../utils");
const { Movie, Producer, Genre, Picture, Actor } = require("../db");

module.exports = async (req, res) => {
    const movies = await Movie.findAll({include: [Producer, Genre, Picture, Actor] });
    response(res, 200, movies);
}
const { response } = require("../utils");
const { Movie, Producer, Genre, Picture, Actor } = require("../db");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id, {include: [Producer, Genre, Picture, Actor] });
    if (!movie) {
        throw new ClientError(404, `The movie was not found on the database`);
    }
    response(res, 200, movie);
}
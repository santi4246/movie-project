const { response } = require("../utils");
const { Movie, Producer, Genre, Picture, Actor } = require("../db");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id, {include: [Actor]});
    if (!movie) {
        throw new ClientError(404, `The movie was not found on the database`);
    }
    const producers = await Producer.findAll({ where: {id: movie.producerId} });
    producers.map(async (element) => {
        await Producer.destroy({ where: {id: element.id} });
    });
    const genres = await Genre.findAll({ where: {id: movie.genreId} });
    genres.map(async (element) => {
        await Genre.destroy({ where: {id: element.id} });
    });
    const pictures = await Picture.findAll({ where: {id: movie.pictureId} });
    pictures.map(async (element) => {
        await Picture.destroy({ where: {id: element.id} });
    });
    movie.dataValues.actors.map(async (element) => {
        await Actor.destroy({ where: { id: element.ActorMovies.ActorId } });
    });
    const logDeleted = await Movie.destroy({ where: { id: movie.id } });
    response(res, 200, { message: `deleted row(s): ${logDeleted}` });
}
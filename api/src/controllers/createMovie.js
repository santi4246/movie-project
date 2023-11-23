const { response } = require("../utils");
const { Movie, Producer, Genre, Picture, Actor } = require("../db");
const { v4 } = require("uuid");

module.exports = async (req, res) => {
    const newMovie = await Movie.create({
        id: v4(),
        name: req.body.name,
        duration: req.body.duration,
        rating: req.body.rating,
        budgetUSD: req.body.budgetUSD,
        producer: {
            name: req.body.producer.name,
            fundationDate: req.body.producer.fundationDate
        },
        genre: {
            name: req.body.genre.name
        },
        picture: {
            path: req.body.picture.path,
            weight: req.body.picture.weight,
            wide: req.body.picture.wide,
            high: req.body.picture.high
        },
        actors: req.body.actors
    }, {
        include: [Producer, Genre, Picture, Actor]
    });    
    response(res, 201, newMovie);
}
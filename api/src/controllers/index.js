const { catched } = require("../utils");

module.exports = {
    getMovies: catched(require("./getMovies")),
    createMovie: catched(require("./createMovie")),
    getMovie: catched(require("./getMovie")),
    deleteMovie: catched(require("./deleteMovie"))
}
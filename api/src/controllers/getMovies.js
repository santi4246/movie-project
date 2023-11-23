const { response } = require("../utils")

module.exports = async (req, res) => {
    const movies = ["La pistola desnuda 2 1/2", "Garfield"]
    response(res, 200, movies);
}
const dotenv = require("dotenv");
dotenv.config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_URL } = process.env;

const sequelize = new Sequelize(DB_URL, {
    logging: false,
    native: false
});

const basename = path.basename(__filename);
const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
.filter((file) => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
.forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
});

modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Movie, Producer, Actor, Genre, Picture } = sequelize.models;

Producer.hasMany(Movie);
Movie.belongsTo(Producer);
Movie.belongsToMany(Actor, { through: "ActorMovies", foreignKey: "MovieId", timestamps: false });
Actor.belongsToMany(Movie, { through: "ActorMovies", foreignKey: "ActorId", timestamps: false });
Genre.hasMany(Movie);
Movie.belongsTo(Genre);
Picture.hasOne(Movie);
Movie.belongsTo(Picture);

module.exports = {
    ...sequelize.models,
    connection: sequelize
}
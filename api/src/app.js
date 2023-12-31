const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const pkg = require("../package.json");
const routes = require("./routes");

const server = express();
server.set("pkg", pkg);
server.name = "API";

server.use(cors());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.get("/", (req, res, next) => {
    return res.status(200).json({
        author: server.get("pkg").author,
        description: server.get("pkg").description,
        version: server.get("pkg").version
    });
});
server.use("/api", routes);

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.log(err);
    res.status(status).send(message);
})

module.exports = server;
const dotenv = require("dotenv");
dotenv.config();
const server = require("./src/app");
const { connection } = require("./src/db");
const { PORT } = process.env;

connection.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Server is listening on port: ${PORT}`);
    });
});
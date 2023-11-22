const dotenv = require("dotenv");
dotenv.config();
const server = require("./src/app");
const { PORT } = process.env;

server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
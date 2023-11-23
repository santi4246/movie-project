const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const { name } = req.body;
    if (name) {
        next();
    }
    else {
        throw new ClientError(401, `Property name is missing`);
    }
}
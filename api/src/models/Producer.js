const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("producer", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fundationDate: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
    }, { timestamps: false });
}
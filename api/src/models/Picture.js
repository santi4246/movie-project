const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("picture", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        path: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wide: {
            type: DataTypes.STRING,
            allowNull: false
        },
        high: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false });
}
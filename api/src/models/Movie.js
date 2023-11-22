const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("movie", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false            
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        budgetUSD: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, { timestamps: false });
}
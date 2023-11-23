const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("actor", {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        }
    }, { timestamps: false });
}
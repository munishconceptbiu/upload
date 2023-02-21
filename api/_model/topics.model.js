const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: true },
        client_id: { type: DataTypes.STRING, allowNull: true },
        createdAt:{ type: DataTypes.DATE, allowNull: true },
        updatedAt: { type: DataTypes.DATE, allowNull: true }
    };

    const options = {};

    return sequelize.define('topics', attributes, options);
}
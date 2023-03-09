const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        bid:{ type: DataTypes.INTEGER, allowNull: false },
        article_id:{ type: DataTypes.INTEGER, allowNull: false },
        rule_id: { type: DataTypes.INTEGER, allowNull: false },
        createdAt: { type: DataTypes.DATE, allowNull: true },
        updatedAt: { type: DataTypes.DATE, allowNull: true }
    };

    const options = {
    };

    return sequelize.define('q_article_qualify', attributes, options);
}
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id:{ type: DataTypes.INTEGER, allowNull: false,primaryKey: true},
        bid:{ type: DataTypes.INTEGER, allowNull: false },
        article_id:{ type: DataTypes.INTEGER, allowNull: false } ,    
        rule_id:{ type: DataTypes.INTEGER, allowNull: false }     
    };

    const options = {
    };

    return sequelize.define('q_article_qualifies', attributes, options);
}
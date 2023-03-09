const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        rule:{ type: DataTypes.STRING, allowNull: false }        
    };

    const options = {
    };

    return sequelize.define('m_qualify_rules', attributes, options);
}
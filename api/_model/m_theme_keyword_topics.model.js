const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        topic:{ type: DataTypes.STRING, allowNull: false },
        keyword_id: { type: DataTypes.INTEGER, allowNull: false },
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_on: { type: DataTypes.DATE, allowNull: true},        
        created_on: { type: DataTypes.DATE, allowNull: true},
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},        
    };

    const options = {
    };

    return sequelize.define('m_theme_keyword_topics', attributes, options);
}
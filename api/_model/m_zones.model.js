const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        zone:{ type: DataTypes.STRING, allowNull: false },
        biu_id: { type: DataTypes.INTEGER, allowNull: false },
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_on: { type: DataTypes.DATE, allowNull: true},        
        created_on: { type: DataTypes.DATE, allowNull: true},
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},        
    };

    const options = {
    };

    return sequelize.define('m_suppliments', attributes, options);
}
const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        edition_name: { type: DataTypes.STRING, allowNull: true },
        biu_id: { type: DataTypes.INTEGER, allowNull: true },
        abbreviation: { type: DataTypes.STRING, allowNull: true },
        zone_id: { type: DataTypes.INTEGER, allowNull: true },
        priority: { type: DataTypes.INTEGER, allowNull: true },
        created_on: { type: DataTypes.DATE, allowNull: true },
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_on: { type: DataTypes.DATE, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        createdAt: { type: DataTypes.DATE, allowNull: true },
        updatedAt: { type: DataTypes.DATE, allowNull: true },
    };

    const options = {
    };

    return sequelize.define('m_editions', attributes, options);
}
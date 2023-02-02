const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {        
        spokesperson_name:{ type: DataTypes.STRING, allowNull: false },
        designation:{ type: DataTypes.STRING, allowNull: false },
        member_for_platform:{ type: DataTypes.STRING, allowNull: false },
        company_id: { type: DataTypes.INTEGER, allowNull: false },
        company_name:{ type: DataTypes.STRING, allowNull: false },
        suggested_by:{ type: DataTypes.STRING, allowNull: false },
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_on: { type: DataTypes.DATE, allowNull: true},        
        created_on: { type: DataTypes.DATE, allowNull: true},
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},       
    };

    const options = {
    };

    return sequelize.define('m_spokespersons', attributes, options);
}
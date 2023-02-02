const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        spokesperson_name: { type: DataTypes.STRING, allowNull: true  },
        spokesperson_name_merge: { type: DataTypes.STRING, allowNull: true, unique: true  },
        description: { type: DataTypes.STRING, allowNull: true },
        is_active: { type: DataTypes.TINYINT, allowNull: true },
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true},
        updated_at: { type: DataTypes.DATE, allowNull: true},
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},
        upload_id: { type: DataTypes.INTEGER, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true},
        designation:{ type: DataTypes.STRING, allowNull: false },
        member_for_platform:{ type: DataTypes.STRING, allowNull: false },
        company_id: { type: DataTypes.INTEGER, allowNull: false },
        company_name:{ type: DataTypes.STRING, allowNull: false },
        suggested_by:{ type: DataTypes.STRING, allowNull: false },
        last_modified_on: { type: DataTypes.DATE, allowNull: true},        
        created_on: { type: DataTypes.DATE, allowNull: true},
    };

    const options = {
    };

    return sequelize.define('spokepeople', attributes, options);
}
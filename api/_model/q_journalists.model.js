const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        q_article_id: { type: DataTypes.INTEGER, allowNull: true  },
        journalists_id: { type: DataTypes.INTEGER, allowNull: true, unique: true  },
        journalists_type: { type: DataTypes.STRING, allowNull: true },
        journalists_name: { type: DataTypes.STRING, allowNull: true },
        journalists_det: { type: DataTypes.STRING, allowNull: true },        
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true},
        updated_at: { type: DataTypes.DATE, allowNull: true},
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},
        upload_id: { type: DataTypes.INTEGER, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true}
    };

    const options = {
    };

    return sequelize.define('q_journalists', attributes, options);
}
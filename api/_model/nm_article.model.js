const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        article_id: { type: DataTypes.BIGINT, allowNull: true },
        client_id: { type: DataTypes.INTEGER, allowNull: true },
        client_name: { type: DataTypes.STRING, allowNull: true },
        entity_name: { type: DataTypes.STRING, allowNull: true },
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true},
        deleted_at: { type: DataTypes.DATE, allowNull: true},
        updated_at: { type: DataTypes.DATE, allowNull: true},
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},
        upload_id: { type: DataTypes.INTEGER, allowNull: true },
    };

    const options = {};

    return sequelize.define('q_nm_articles', attributes, options);
}
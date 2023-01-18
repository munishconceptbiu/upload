const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: { type: DataTypes.STRING, allowNull: false },
        biu_id: { type: DataTypes.STRING, allowNull: false },
        journalist_name: { type: DataTypes.STRING, allowNull: true },
        publication_id: { type: DataTypes.DECIMAL, allowNull: true },
        journalist_email: { type: DataTypes.STRING, allowNull: true },
        journalist_contact: { type: DataTypes.STRING, allowNull: true },
        journalist_twitter: { type: DataTypes.STRING, allowNull: true },
        picture: { type: DataTypes.STRING, allowNull: true },
        media_type: { type: DataTypes.STRING, allowNull: true },
        created_on: { type: DataTypes.DATE, allowNull: false },
        created_by: { type: DataTypes.STRING, allowNull: true },
        last_modified_by: { type: DataTypes.STRING, allowNull: true },
        last_modified_on: { type: DataTypes.DATE, allowNull: true },
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},
    };

    const options = {};

    return sequelize.define('m_journalists', attributes, options);
}
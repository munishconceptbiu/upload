const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        article_id: { type: DataTypes.INTEGER, allowNull: false },
        client_id: { type: DataTypes.INTEGER, allowNull: false },
        publication_id: { type: DataTypes.STRING, allowNull: false },
        publication_type_id: { type: DataTypes.STRING, allowNull: false },
        language_id: { type: DataTypes.DECIMAL, allowNull: false },
        suppliment_id: { type: DataTypes.STRING, allowNull: false },
        source_id: { type: DataTypes.STRING, allowNull: false },
        cav_id: { type: DataTypes.STRING, allowNull: false },
        entity_id: { type: DataTypes.STRING, allowNull: false },
        zone_id: { type: DataTypes.STRING, allowNull: false },
        prominent_id: { type: DataTypes.STRING, allowNull: false },
        section_id: { type: DataTypes.STRING, allowNull: false },
        entity_name : { type: DataTypes.STRING, allowNull: false },
       
    };

    const options = {};

    return sequelize.define('online_data', attributes, options);
}
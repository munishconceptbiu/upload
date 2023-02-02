const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        publication:{ type: DataTypes.STRING, allowNull: false },
        biunew_publication_id: { type: DataTypes.INTEGER, allowNull: false },
        media_type_id: { type: DataTypes.INTEGER, allowNull: false },
        publication_type_id: { type: DataTypes.INTEGER, allowNull: false },
        language_id: { type: DataTypes.INTEGER, allowNull: false },
        website:{ type: DataTypes.STRING, allowNull: false },
        webname:{ type: DataTypes.STRING, allowNull: false },
        website_type_id:{ type: DataTypes.INTEGER, allowNull: false },
        biunew_publication_edition_id:{ type: DataTypes.INTEGER, allowNull: false },
        edition_id:{ type: DataTypes.INTEGER, allowNull: false },
        suppliment_id:{ type: DataTypes.INTEGER, allowNull: false },
        readership:{ type: DataTypes.INTEGER, allowNull: false },
        circlation:{ type: DataTypes.INTEGER, allowNull: false },
        pe_sample_media:{ type: DataTypes.INTEGER, allowNull: false },
        sample_media:{ type: DataTypes.INTEGER, allowNull: false },
        created_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_by: { type: DataTypes.INTEGER, allowNull: true },
        last_modified_on: { type: DataTypes.DATE, allowNull: true},        
        created_on: { type: DataTypes.DATE, allowNull: true},
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},        
    };

    const options = {
    };

    return sequelize.define('m_publications', attributes, options);
}
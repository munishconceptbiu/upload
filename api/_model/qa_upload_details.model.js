const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        username: { type: DataTypes.STRING, allowNull: true },
        email: { type: DataTypes.STRING, allowNull: true },
        client_id: { type: DataTypes.STRING, allowNull: true },
        user_id: { type: DataTypes.STRING, allowNull: true },
        client_name: { type: DataTypes.STRING, allowNull: true },
        ip_address: { type: DataTypes.STRING, allowNull: true },
        file: { type: DataTypes.STRING, allowNull: true },
        originalname: { type: DataTypes.STRING, allowNull: true },
        filename: { type: DataTypes.STRING, allowNull: true },
        month: { type: DataTypes.STRING, allowNull: true },
        year: { type: DataTypes.INTEGER, allowNull: true },
        start_date:{ type: DataTypes.DATE, allowNull: false},
        end_date: { type: DataTypes.DATE, allowNull: false},
        created_at: { type: DataTypes.DATE, allowNull: true},
        updated_at: { type: DataTypes.DATE, allowNull: true},
        createdAt: { type: DataTypes.DATE, allowNull: true},
        updatedAt: { type: DataTypes.DATE, allowNull: true},
        total_article:{ type: DataTypes.INTEGER, allowNull: true },
        nm_total_article:{ type: DataTypes.INTEGER, allowNull: true },
    };

    const options = {
    };

    return sequelize.define('qa_upload_detail', attributes, options);
}
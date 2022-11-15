const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        client_name: { type: DataTypes.STRING, allowNull: false },
        start_date: { type: DataTypes.STRING, allowNull: false },
        end_date: { type: DataTypes.STRING, allowNull: false },
        contact_person: { type: DataTypes.DECIMAL, allowNull: false },
        contact_email: { type: DataTypes.STRING, allowNull: false },
        client_logo: { type: DataTypes.STRING, allowNull: false },
        client_main_category: { type: DataTypes.STRING, allowNull: false },
        group_name: { type: DataTypes.STRING, allowNull: false },
        have_summary: { type: DataTypes.STRING, allowNull: false },
        is_active: { type: DataTypes.STRING, allowNull: false },
        allow_tag: { type: DataTypes.STRING, allowNull: false },
        created_on: { type: DataTypes.STRING, allowNull: false },
        created_by: { type: DataTypes.TEXT, allowNull: false },
        last_modified_on: { type: DataTypes.STRING, allowNull: false },
        last_modified_by: { type: DataTypes.STRING, allowNull: false },
        hide_product_logo: { type: DataTypes.STRING, allowNull: false },
        hide_client_logo: { type: DataTypes.STRING, allowNull: false },
        has_mail_content: { type: DataTypes.STRING, allowNull: false },
    };

    const options = {};

    return sequelize.define('clients', attributes, options);
}
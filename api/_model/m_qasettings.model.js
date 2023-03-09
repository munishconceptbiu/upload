const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        key_data:{ type: DataTypes.STRING, allowNull: false },
        values_data:{ type: DataTypes.STRING, allowNull: false },
        rel_data:{ type: DataTypes.STRING, allowNull: false }
    };

    const options = {
    };

    return sequelize.define('m_qasettings', attributes, options);
}
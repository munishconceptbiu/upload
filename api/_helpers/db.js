const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    // init models and add them to the exported db object
    db.User = require('../users/user.model')(sequelize);
    db.Artical = require('../artical/artical.model')(sequelize);
    db.QaData = require('../artical/qa_data.model')(sequelize);
    db.QaDataProduct = require('../artical/qa_data_product.model')(sequelize);
    db.QaClientProduct = require('../artical/qa_client_product.model')(sequelize);
    db.QaDataSpokesPerson = require('../artical/qa_data_spokesperson')(sequelize);
    db.QaSpokesPerson = require('../artical/qa_spokesperson.model')(sequelize);

    
    // sync all models with database
    await sequelize.sync();
}
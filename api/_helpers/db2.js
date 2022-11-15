const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db2 = {};

initialize();

async function initialize() {
    // create db2 if it doesn't already exist
    const { host, port, user, password, database } = config.database2;
    const connection = await mysql.createConnection({ host, port, user, password });
    // const connection = await mysql.createConnection({host: host, user: user, database: database});
    

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db2
    const sequelize = new Sequelize(database, user, password, { host : host, dialect: 'mysql' , pool: {
        max: 20,
        min: 0,
        acquire: 60000000,
        idle: 1000000000
      }});

    // // init models and add them to the exported db2 object
    db2.OnlineData = require('../_model/online.model')(sequelize);
    db2.PrintData = require('../_model/print.model')(sequelize);
  
    // sync all models with database
    await sequelize.sync();
    
}
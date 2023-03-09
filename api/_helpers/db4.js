const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db4 = {};

initialize();

async function initialize() {
    // create db2 if it doesn't already exist
    const { host, port, user, password, database } = config.livedatabase;
    const connection = await mysql.createConnection({ host, port, user, password });

    ///console.log(JSON.stringify(connection)); exist;

    // const connection = await mysql.createConnection({host: host, user: user, database: database});
    

    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db2
    const sequelize = new Sequelize(database, user, password, { logging: false, host : host, dialect: 'mysql' , pool: {
        max: 20,
        min: 0,
        acquire: 60000000,
        idle: 1000000000
      }});

    // // init models and add them to the exported db2 object
    //db4.Client = require('../_model/clients.model')(sequelize);
    db4.MPublications = require('../_model/m_publications.model')(sequelize); 

    db4.MSuppliments = require('../_model/m_suppliments.model')(sequelize);

    db4.MThemeKeywordTopics = require('../_model/m_theme_keyword_topics.model')(sequelize);

    db4.MThemeKeywords = require('../_model/m_theme_keywords.model')(sequelize);

    db4.MThemes = require('../_model/m_themes.model')(sequelize);

    db4.MSpokespersons = require('../_model/m_spokespersons.model')(sequelize);

    db4.QJournalists = require('../_model/q_journalists.model')(sequelize);


    db4.QaClientProduct = require('../_model/qa_client_product.model')(sequelize);


    db4.QaArticlesRow = require('../_model/qa_articles_row.model')(sequelize);

    db4.Zone = require('../_model/m_zones.model')(sequelize);

    db4.Edition = require('../_model/m_editions.model')(sequelize);

    db4.QaDataSpokesPerson = require('../_model/qa_data_spokesperson')(sequelize);

    db4.QaSpokesPerson = require('../_model/qa_spokesperson.model')(sequelize);

    db4.MQualifyRules = require('../_model/m_qualify_rules.model')(sequelize);

    db4.QArticleQualify = require('../_model/q_article_qualify.model')(sequelize);

    db4.MQasettings = require('../_model/m_qasettings.model')(sequelize);

    db4.MJournalists = require('../_model/m_journalists.model')(sequelize);

    db4.QaDataProduct = require('../_model/qa_data_product.model')(sequelize);

    db4.QArticleQualifies = require('../_model/q_article_qualifies.model')(sequelize);


    db4.sequelize = sequelize;    
    // sync all models with database  

    await sequelize.sync();
    
}
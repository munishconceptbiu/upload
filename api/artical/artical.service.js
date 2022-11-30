
const db = require('_helpers/db');
const db2 = require('_helpers/db2');
const db3 = require('_helpers/db3');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getAll,
    getById,
    create,
    delete: _delete,
    createQaData,
    createQaSpokesPerson,
    createQaDataSpokesPerson,
    createQaClientProduct,
    createQaDataProduct,
    addUploadDetails,
    getAllListUpload,
    getEdition,
    updateQaData,
    addQaData,
    getSetting,
    addSetting,
    getQualitativeCheck,
    getSettingAll,
    deleteSetting,
    updateSetting,
    addVerticalSetting,
    getVerticalSetting,
    getClientList,
    getSettingClientList,
    getUniqueSetting,
    deleteUpload,
    findQaSpokesPerson,
    findProductOne,
    getUniqueVerticalSetting,
    updateUploadCount
};



async function getAllListUpload(user_id, client_id) {
    const result = await db.QaUploadDetail.findAll({
        where: {
            [Op.or]: [
                { client_id: client_id },
                { user_id: user_id }
            ]
        }
    });
    return result;
}
async function getAll(client_id, article_id, entity_name, media_type) {


    // await db.query("SELECT * FROM print_data where article_id='221482940' AND entity_name='Ashok Leyland' AND client_id='8'", { type: QueryTypes.SELECT });
    let result;
    if (media_type === 'Print') {



        result = await db2.sequelize.query(
            `SELECT cav.id AS cav_id,cav.client_id,cav.article_id,cav.entity_id
    ,a.publication_id,a.edition_id,a.publication_type_id,a.language_id,a.suppliment_id,a.source_id
    ,e1.zone_id,cav.prominent_id,a.section_id
  FROM client_article_values cav 
    INNER JOIN entities e ON e.id=cav.entity_id
    INNER JOIN articles a ON a.id=cav.article_id
    LEFT JOIN editions e1 ON a.edition_id = e1.id
  WHERE cav.article_id=:article_id AND e.entity_name=:entity_name AND cav.client_id=:client_id`,
            {
                replacements: { client_id: client_id, article_id: article_id, entity_name: entity_name },
                type: QueryTypes.SELECT
            }
        );
        // result = await db2.PrintData.findAll({
        //     where: { [Op.or]: [{ client_id: client_id, article_id: article_id, entity_name: entity_name }, {  article_id: article_id, entity_name: entity_name }] }, attributes: [
        //         'id', 'publication_id', 'publication_type_id', 'language_id', 'suppliment_id', 'source_id', 'cav_id', 'entity_id', 'zone_id', 'prominent_id', 'section_id' // We had to list all attributes...
        //     ]
        // });
    }
    if (media_type === 'Online') {
        result = await db2.sequelize.query(
            `SELECT cav.id AS cav_id,cav.client_id,cav.article_id,cav.entity_id
            ,a.publication_id,a.publication_type_id,a.language_id,a.source_id
            ,cav.prominent_id
          FROM online_client_article_values cav 
            INNER JOIN entities e ON e.id=cav.entity_id
            INNER JOIN online_articles a ON a.id=cav.article_id
          WHERE cav.article_id=:article_id AND e.entity_name=:entity_name AND cav.client_id=:client_id`,
            {
                replacements: { client_id: client_id, article_id: article_id, entity_name: entity_name },
                type: QueryTypes.SELECT
            }
        );
        // result = await db2.OnlineData.findAll({
        //     where: {
        //         [Op.or]: [{ client_id: client_id, article_id: article_id, entity_name: entity_name }, {  article_id: article_id, entity_name: entity_name }] }, attributes: [
        //             'id', 'publication_id', 'publication_type_id', 'language_id', 'suppliment_id', 'source_id', 'cav_id', 'entity_id', 'zone_id', 'prominent_id', 'section_id' // We had to list all attributes...
        //     ]
        // });
    }
    return result;

}

async function getById(id) {
    return await getArtical(id);
}

async function create(params) {

    await db.Artical.create(params);
}


async function _delete(id) {
    const artical = await getArtical(id);
    await artical.destroy();
}

// helper functions



async function getArtical(id) {
    const artical = await db.Artical.findByPk(id);
    if (!artical) throw 'Artical not found';
    return artical;
}

async function getEdition(name) {
    const edition = await db.Edition.findOne({ where: { edition_name: name }, attributes: [`id`, `edition_name`] });;
    return edition;
}
async function addQaData(params) {
    return await db.QaData.create(params);
}

async function createQaData(params) {
    console.log('add did', params.article_id)

    //check article id and cav id if there cavid
    if (params?.cav_id) {
        const { count, rows } = await db.QaData.findAndCountAll({ where: { article_id: params.article_id, cav_id: params?.cav_id } })
        if (count === 0) {
            return addQaData(params);
        }
        if (count === 1) {
            return updateQaData(params, rows[0])
        }
    } else {
        if (params?.media_type === 'Print') {
            const { count, rows } = await db.QaData.findAndCountAll({ where: { article_id: params.article_id, edition_id: params?.edition_id } })
            if (count === 0) {
                return addQaData(params);
            }
            if (count === 1) {
                return updateQaData(params, rows[0])
            }
        }
        else {
            return addQaData(params);
        }
    }

}

async function updateQaData(params, article) {
    await db.QaData.update(params, { where: { id: article.id } });
    return await db.QaData.findOne({ where: { id: article.id } });
}

async function findProductOne(project) {
    return await db.QaClientProduct.findOne({ where: { product_name_merge: project.product_name_merge } });
}
async function findQaSpokesPerson(project) {
    return await db.QaSpokesPerson.findOne({ where: { spokesperson_name_merge: project.spokesperson_name_merge } });
}

async function createQaSpokesPerson(dataArray) {

    // sequelize.sync().then(async () => {

    await db.QaSpokesPerson.bulkCreate(dataArray,
        {
            ignoreDuplicates: true,
        }).then(res => {
            return res;
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });

    // }).catch((error) => {
    //     console.error('Unable to create table : ', error);
    // });

    // const project = await db.QaSpokesPerson.findOne({ where: { spokesperson_name_merge: params.spokesperson_name_merge }});
    // if(project === null){
    //     // console.log('project', project)
    //     // console.log('params.sp', params.spokesperson_name)
    //     return await db.QaSpokesPerson.create(params);
    // }
    // else{
    //     // console.log('params.upadate', params.spokesperson_name)
    //     await db.QaSpokesPerson.update(params, { where: { id: project.id } });
    //     return db.QaSpokesPerson.findOne({ where: { id: project.id } });
    // }
    // return await db.QaSpokesPerson.findOrCreate({ where: { spokesperson_name_merge: params.spokesperson_name_merge }, defaults: params });
}

async function createQaDataSpokesPerson(params) {

    //     const { count, rows } = await db.QaDataSpokesPerson.findAndCountAll({ where:{ spokesperson_id: params.spokesperson_id, q_article_id : params.q_article_id }});
    //     if(count === 0){
    //         return await db.QaDataSpokesPerson.create(params);
    //     }
    //    else{
    //         await db.QaDataSpokesPerson.update(params, { where: { id: rows[0].id } });
    //         return db.QaDataSpokesPerson.findOne({ where: { id: rows[0].id } });
    //     }

    return await db.QaDataSpokesPerson.findOrCreate({ where: { spokesperson_id: params.spokesperson_id, q_article_id: params.q_article_id }, defaults: params });
}

async function createQaClientProduct(dataArray) {
    await db.QaClientProduct.bulkCreate(dataArray,
        {
            ignoreDuplicates: true,
        }).then(res => {
            return res;
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });
    // const { count, rows } = await db.QaClientProduct.findAndCountAll({ where:{ product_name: params.product_name }});
    // if(count === 0){
    //     return await db.QaClientProduct.create(params);
    // }
    // else{
    //     await db.QaClientProduct.update(params, { where: { id: rows[0].id } });
    //     return db.QaClientProduct.findOne({ where: { id: rows[0].id } });
    // }

    // return await db.QaClientProduct.findOrCreate({ where: { product_name: params.product_name }, defaults: params });
}

async function createQaDataProduct(params) {
    // const { count, rows } = await db.QaDataProduct.findAndCountAll({ where:{ product_id: params.product_id, q_article_id : params.q_article_id }});
    // if(count === 0){
    //     return await db.QaDataProduct.create(params);
    // }
    // else{
    //     await db.QaDataProduct.update(params, { where: { id: rows[0].id } });
    //     return db.QaDataProduct.findOne({ where: { id: rows[0].id } });
    // }
    await db.QaDataProduct.findOrCreate({ where: { product_id: params.product_id, q_article_id: params.q_article_id }, defaults: params });
}

async function addUploadDetails(params) {
    const upload = await db.QaUploadDetail.create(params);
    return upload;
}



async function addSetting(params) {
    const [row, created] = await db.QaSetting.findOrCreate({ where: { client_id: params.client_id, graph_type: params.graph_type }, defaults: params });
    if (created === false) {
        await db.QaSetting.update(params, { where: { id: row.id } });
    }
    return created;
}

async function addVerticalSetting(params) {
    const [row, created] = await db.QaVerticalSetting.findOrCreate({ where: { client_id: params.client_id }, defaults: params });
    if (created === true) {
        await db.QaVerticalSetting.update(params, { where: { id: row.id } });
    }
    return created;
}

async function getVerticalSetting(client_id) {
    const result = await db.QaVerticalSetting.findOne({
        where: { client_id: client_id },
        attributes: ["id",
            "verticals", "isVertical", "isIndex", "isReach", 'isOnline', 'isPrint', 'isPrintOnline']
    });
    return result;
}
async function getSetting(client_id) {
    const result = await db.QaSetting.findAll({
        where: { client_id: client_id },
        attributes: ["id",
            "client_id",
            "graph_type",
            "entity_level",
            "publication_level",
            "journalist_level",
            "city_level",
            "keyword_level",
            "spokesperson_level",
            "profiling_level",
            "visibility_level", "topic_level", "client_name", "graph_id", "order_id"],
        order: ['order_id']
    });
    return result;
}
async function getQualitativeCheck(client_id) {
    const artical = await db.QaData.findAll({
        where: { client_id: client_id }, limit: 1
    });
    return artical.length === 0 ? 0 : 1;
}

async function getSettingAll(client_id) {

    const result = await db.QaSetting.findAll({
        attributes: ["id",
            "client_id",
            "graph_type",
            "entity_level",
            "publication_level",
            "journalist_level",
            "city_level",
            "keyword_level",
            "spokesperson_level",
            "profiling_level",
            "visibility_level", "topic_level", "client_name", "graph_id", "order_id"]
    });
    return result;
}

async function updateSetting(id, data) {
    await db.QaSetting.update(data, { where: { id: id } });
}
async function deleteSetting(id) {
    await db.QaSetting.destroy({ where: { id: id } });
}
async function getClientList(name) {
    const result = await db3.Client.findAll({
        where: {
            client_name: {
                [Op.like]: `${name}%`
            }
        },
        attributes: ["id",
            "client_name",
        ]
    });
    return result;
}

async function getSettingClientList(name) {
    const result = await db.QaSetting.findAll({
        where: {
            client_name: {
                [Op.like]: `${name}%`
            }
        },
        attributes: ["id", "client_id",
            "client_name",
        ],
        group: "client_id",
    });
    return result;
}
async function getUniqueSetting(client_id) {
    // const result = await db.QaSetting.findAll({
    //     include: {
    //       model: db.QaVerticalSetting,
    //       as: 'settings',
    //       where: { client_id: client_id },
    //       }
    //     });

    const result = await db.QaSetting.findAll({
        where: {
            [Op.or]: [
                { client_id: client_id },
                { user_id: client_id }
            ]
        },
        attributes: ["id",
            "client_id",
            "graph_type",
            "entity_level",
            "publication_level",
            "journalist_level",
            "city_level",
            "keyword_level",
            "spokesperson_level",
            "profiling_level",
            "visibility_level", "topic_level", "client_name", "graph_id", "order_id"],
        group: "client_id",
    });
    return result;
}
async function getUniqueVerticalSetting(client_id) {
    const result = await db.QaVerticalSetting.findOne({
        where: {
            [Op.or]: [
                { client_id: client_id },
                { user_id: client_id }
            ]
        },
        attributes: ["id",
            "verticals", "isVertical", "isIndex", "isReach", 'isOnline', 'isPrint', 'isPrintOnline']
    });
    return result;
}

async function deleteUpload(id) {
    console.log('delete did', id)
    await db.QaUploadDetail.destroy({ where: { id: id } });
    await db.QaData.destroy({ where: { upload_id: id } });
    await db.QaClientProduct.destroy({ where: { upload_id: id } });
    await db.QaDataProduct.destroy({ where: { upload_id: id } });
    await db.QaSpokesPerson.destroy({ where: { upload_id: id } });
    await db.QaDataSpokesPerson.destroy({ where: { upload_id: id } });
}

async function updateUploadCount(id, count) {
    return await db.QaUploadDetail.update({ total_article: count }, { where: { id: id } });
}
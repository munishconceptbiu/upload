const db = require('_helpers/db');
const db2 = require('_helpers/db2');
const db3 = require('_helpers/db3');
const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func, exist } = require('joi');

//const moment = require('moment');

module.exports = {    
    getpublicationsAll,
    getUniquePublications,
    addPublication,
    getsupplimentsAll,
    getUniquesuppliments,
    addsuppliments,
    getspokespersonsAll,
    getUniquespokespersons,
    addspokespersons,
    getthemeAll,
    getkeywordAll,
    gettopicAll,
    getclientthemeAll,
    getthemekeywordAll,
    getkeywordtopicAll,
    getsingleclientthemeAll,
    getsinglethemekeywordAll,
    getsinglekeywordtopicAll,
    addkeywords,
    addtheme,
    addtopic,
    getclienttktAll,
    getclienttktsingle,
    addthemekeywordtopic,
    addthemenew,
    addthemeData,
    updatethemeData,
    createMTheme,
    createMKeywords,
    createMTopics,
    getarticlesrowAll,
    getUniquearticlesrow,
    getarticlesrowAllcustom,
    createQaData,
    addQaDataRow,
    updateQaDataRow,
    createJournalist,
    findProductOne,
    findQaSpokesPerson,
    createQaSpokesPerson,
    createQaDataSpokesPerson,
    createQaClientProduct,
    createQaDataProduct,
    updatearticleStatus,
    getarticlesrowAllcustomcron,
    getQualifyRulesAll,
    findArticleQaSpokesPerson,
    findArticleProducts,
    findArticlejurnalist,
    findqasettings,
    addqualifyerrorentry,
    getProductAll,
    getUniqueProduct,
    addProduct,
    getarticlesheadlinerowAll,
    findjurnalist,
    getQCarticlesrowAll,
    getarticlesqcrulesdata,
    getQCarticlesrowAllCNT,
    getarticlesrowAllrelated,
    deletepubsingle,
    deletesuplisingle,
    deleteprodsingle,
    deletespoksingle,
    deletethemesingle,
    deletethemekeywordsingle,
    deletekeywordtopicsingle
};

//publication Functions 
async function getpublicationsAll() { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MPublications.findAll({
        attributes: ["id",
            "publication",
            "biunew_publication_id",
            "media_type_id",
            "publication_type_id",
            "language_id",
            "website",
            "webname",
            "website_type_id",
            "biunew_publication_edition_id",    
            "edition_id",
            "suppliment_id",
            "readership",
            "circlation",
            "pe_sample_media", 
            "sample_media"],
        group: "publication",
    },
    );
    return result;
}


async function getUniquePublications(id) {
    
    const result = await db4.MPublications.findAll({
        where: {
            id: id
        },
        attributes: ["id",
                     "publication",
                     "biunew_publication_id",
                     "media_type_id",
                     "publication_type_id",
                     "language_id",
                     "website",
                     "webname",
                     "website_type_id",
                     "biunew_publication_edition_id",    
                     "edition_id",
                     "suppliment_id",
                     "readership",
                     "circlation",
                     "pe_sample_media", 
                     "sample_media"],
        group: "publication",
    });
    return result;

}

async function addPublication(params,action,id=0) {
    //console.log("params : ",params); //exist;

    if(action == 'update'){
        const [row, created] = await db4.MPublications.findOrCreate({ where: { id: id}, defaults: params });
        if (created === false) {
            await db4.MPublications.update(params, { where: { id: row.id } });
        }
        return created;
    } else {
        const [row1, created1] = await db4.MPublications.findOrCreate({ where: { publication: params.publication}, defaults: params });
        if (created1 === false) {
            await db4.MPublications.update(params, { where: { id: row1.id } });
        }
        return created1;
    }  
    
}


//suppliments Functions 
async function getsupplimentsAll() { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MSuppliments.findAll({
        attributes: ["id",
            "biu_id",
            "suppliment_name",
            "created_on",
            "created_by"],
        group: "suppliment_name",
    },
    );
    return result;
}


async function getUniquesuppliments(id) {
    
    const result = await db4.MSuppliments.findAll({
        where: {
            id: id
        },
        attributes: ["id",
            "biu_id",
            "suppliment_name",
            "created_on",
            "created_by"],
        group: "suppliment_name",
    });
    return result;

}

async function addsuppliments(params,action,id=0) {
    

    // console.log('params : '+ params);
    // console.log('action : '+ action);
    // console.log('id : '+ id);

    if(action == 'update'){ 
        const [row, created] = await db4.MSuppliments.findOrCreate({ where: { id: id}, defaults: params });

        if (created === false) {
            await db4.MSuppliments.update(params, { where: { id: row.id } });
        }

        return created;
    } else {
        const [row, created] = await db4.MSuppliments.findOrCreate({ where: { suppliment_name: params.suppliment_name}, defaults: params });

        if (created === false) {
            await db4.MSuppliments.update(params, { where: { id: row.id } });
        }

        return created;
    }
    
}


//spokespersons Functions 
async function getspokespersonsAll() { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MSpokespersons.findAll({
        attributes: ["id",
        "spokesperson_name",
        "designation",
        "member_for_platform",
        "company_id",
        "company_name",
        "suggested_by",                        
        "created_on",
        "created_by"],
        group: "spokesperson_name",
    },
    );
    return result;
}


async function getUniquespokespersons(id) {
    
    const result = await db4.MSpokespersons.findAll({
        where: {
            id: id
        },
        attributes: ["id",
        "spokesperson_name",
        "designation",
        "member_for_platform",
        "company_id",
        "company_name",
        "suggested_by",                        
        "created_on",
        "created_by"],
        group: "spokesperson_name",
    });
    return result;

}

async function addspokespersons(params,action,id=0) {
    
    // console.log('params : '+ params);
    // console.log('action : '+ action);
    // console.log('id : '+ id);

    if(action == 'update'){
        const [row, created] = await db4.MSpokespersons.findOrCreate({ where: { id: id}, defaults: params });

        if (created === false) {
            await db4.MSpokespersons.update(params, { where: { id: row.id } });
        }

        return created;
    } else {
        const [row, created] = await db4.MSpokespersons.findOrCreate({ where: { spokesperson_name: params.spokesperson_name}, defaults: params });

        if (created === false) {
            await db4.MSpokespersons.update(params, { where: { id: row.id } });
        }

        return created;
    }
}


//Theme kwyword and topic Functions 
async function getthemeAll() { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemes.findAll({
        attributes: ["id",
                    "theme_name",
                    "client_id",                 
                    "created_on",
                    "created_by"],
        group: "theme_name",
    },
    );
    return result;
}


async function getkeywordAll() { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemeKeywords.findAll({
        attributes: ["id",
        "theme_id",
        "keyword",              
        "created_on",
        "created_by"],
        group: "keyword",
    },
    );
    return result;
}

async function gettopicAll() { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemeKeywordTopics.findAll({
        attributes: ["id",
                    "topic",
                    "keyword_id",                  
                    "created_on",
                    "created_by"],
        group: "topic",
    },
    );
    return result;
}

async function getclientthemeAll(client_id) { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemes.findAll({
        where: {
            client_id: client_id
        },
        attributes: ["id",
                    "theme_name",
                    "client_id",                 
                    "created_on",
                    "created_by"],
        group: "theme_name",
    },
    );
    return result;
}

async function getthemekeywordAll(theme_id) { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemeKeywords.findAll({
        where: {
            theme_id: theme_id
        },
        attributes: ["id",
        "theme_id",
        "keyword",              
        "created_on",
        "created_by"],
        group: "keyword",
    },
    );
    return result;
}

async function getkeywordtopicAll(keyword_id) { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemeKeywordTopics.findAll({
        where: {
            keyword_id: keyword_id
        },
        attributes: ["id",
                    "topic",
                    "keyword_id",                  
                    "created_on",
                    "created_by"],
        group: "topic",
    },
    );
    return result;
}

async function getsingleclientthemeAll(id) { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemes.findAll({
        where: {
            id: id
        },
        attributes: ["id",
                    "theme_name",
                    "client_id",                 
                    "created_on",
                    "created_by"],
        group: "theme_name",
    },
    );
    return result;
}

async function getsinglethemekeywordAll(id) { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemeKeywords.findAll({
        where: {
            id: id
        },
        attributes: ["id",
        "theme_id",
        "keyword",              
        "created_on",
        "created_by"],
        group: "keyword",
    },
    );
    return result;
}

async function getsinglekeywordtopicAll(id) { 
    
    //console.log(JSON.stringify(db4)); exist;

    const result = await db4.MThemeKeywordTopics.findAll({
        where: {
            id: id
        },
        attributes: ["id",
                    "topic",
                    "keyword_id",                  
                    "created_on",
                    "created_by"],
        group: "topic",
    },
    );
    return result;
}


async function addkeywords(params,action,id=0) {
    
    
    if(action == 'update'){
        const [row, created] = await db4.MThemeKeywords.findOrCreate({ where: { id: id}, defaults: params });

        if (created === false) {
            await db4.MThemeKeywords.update(params, { where: { id: row.id } });
        }

        return created;
    } else {
        const [row, created] = await db4.MThemeKeywords.findOrCreate({ where: { theme_id: params.theme_id,keyword: params.keyword}, defaults: params });

        if (created === false) {
            await db4.MThemeKeywords.update(params, { where: { id: row.id } });
        }

        return created;
    }
}

async function addtheme(params,action,id=0) {
    
    if(action == 'update'){
        const [row, created] = await db4.MThemes.findOrCreate({ where: { id: id }, defaults: params });

        if (created === false) {
            await db4.MThemes.update(params, { where: { id: row.id } });
        }

        return created;
    } else {
        const [row, created] = await db4.MThemes.findOrCreate({ where: { client_id: params.client_id,theme_name: params.theme_name}, defaults: params });

        if (created === false) {
            await db4.MThemes.update(params, { where: { id: row.id } });
        }

        return created;
    }
}

async function addtopic(params,action,id=0) {
    
    if(action == 'update'){
        const [row, created] = await db4.MThemeKeywordTopics.findOrCreate({ where: { id: id}, defaults: params });

        if (created === false) {
            await db4.MThemeKeywordTopics.update(params, { where: { id: row.id } });
        }

        return created;
    } else {
        const [row, created] = await db4.MThemeKeywordTopics.findOrCreate({ where: { keyword_id: params.keyword_id,topic: params.topic}, defaults: params });

        if (created === false) {
            await db4.MThemeKeywordTopics.update(params, { where: { id: row.id } });
        }

        return created;
    } 
}

async function getclienttktAll(client_id) { 
    

    var themearrids = '';
    var keywordarrids = '';
    var topicarrids = '';
    var resultdata = [['theme', ''], ['keyword', ''], ['topic', '']];
    // Theme 
    resulttheme = await db4.sequelize.query('SELECT * FROM `m_themes` where client_id = '+client_id,{
        type: QueryTypes.SELECT
      });


      Object.keys(resulttheme).forEach(key => {
        //console.log(key, resulttheme[key].id);
        if(themearrids != ''){
            themearrids = themearrids+","+'"'+resulttheme[key].id+'"';
        } else {
            themearrids = '"'+resulttheme[key].id+'"';
        }
      });

      
    // keyword    
    if(themearrids != ''){

        
        resultkeyword = await db4.sequelize.query('SELECT * FROM `m_theme_keywords` where theme_id IN ('+themearrids+')',{
            type: QueryTypes.SELECT
        });

        Object.keys(resultkeyword).forEach(key => {
            //console.log(key, resulttheme[key].id);
            if(keywordarrids != ''){
                keywordarrids = keywordarrids+","+'"'+resultkeyword[key].id+'"';
            } else {
                keywordarrids = '"'+resultkeyword[key].id+'"';
            }
        });  

        
    } 
    

    if(themearrids != '' && keywordarrids != ''){

        // keyword  
        resulttopic = await db4.sequelize.query('SELECT * FROM `m_theme_keyword_topics` where keyword_id IN ('+keywordarrids+')',{
            type: QueryTypes.SELECT
          });
    
          //console.log(resulttopic);       
    
          resultdata = [['theme', resulttheme], ['keyword', resultkeyword], ['topic', resulttopic]];      

    } 

    //console.log(resultdata);

    //console.log(JSON.stringify(resultdata)); exist;
    
    return resultdata;
}

async function getclienttktsingle(id) { 
    
    var themearrids = '';
    var keywordarrids = '';
    var topicarrids = '';

    var resultdata = [['theme', ''], ['keyword', ''], ['topic', '']];
    // Theme 
    resulttheme = await db4.sequelize.query('SELECT * FROM `m_themes` where id = '+id,{
        type: QueryTypes.SELECT
      });

      Object.keys(resulttheme).forEach(key => {

        console.log(key, resulttheme[key].id);

        if(themearrids != ''){
            themearrids = themearrids+","+'"'+resulttheme[key].id+'"';
        } else {
            themearrids = '"'+resulttheme[key].id+'"';
        }
      });

      
    // keyword    
    if(themearrids != ''){

        
        resultkeyword = await db4.sequelize.query('SELECT * FROM `m_theme_keywords` where theme_id IN ('+themearrids+')',{
            type: QueryTypes.SELECT
        });

        Object.keys(resultkeyword).forEach(key => {
            //console.log(key, resulttheme[key].id);
            if(keywordarrids != ''){
                keywordarrids = keywordarrids+","+'"'+resultkeyword[key].id+'"';
            } else {
                keywordarrids = '"'+resultkeyword[key].id+'"';
            }
        });  

        
    } 
    

    if(themearrids != '' && keywordarrids != ''){

        // keyword  
        resulttopic = await db4.sequelize.query('SELECT * FROM `m_theme_keyword_topics` where keyword_id IN ('+keywordarrids+')',{
            type: QueryTypes.SELECT
          });
    
          //console.log(resulttopic);       
    
          resultdata = [['theme', resulttheme], ['keyword', resultkeyword], ['topic', resulttopic]];      

    } 

    //console.log(resultdata);

    //console.log(JSON.stringify(resultdata)); exist;
    
    return resultdata;
}

async function addthemekeywordtopic(params) {

    //console.log('params :', params.theme.theme_name); return 0;

    console.log(params.keyword);

    Object.keys(params.keyword).forEach(key => {

        console.log(key, params[key]);

        // if(themearrids != ''){
        //     themearrids = themearrids+","+'"'+resulttheme[key].id+'"';
        // } else {
        //     themearrids = '"'+resulttheme[key].id+'"';
        // }

      });

    /*
    const [row, created] = await db4.MThemes.findOrCreate({ where: { client_id: params.client_id,theme_name: params.theme_name}, defaults: params });

    if (created === false) {
        await db4.MThemes.update(params, { where: { id: row.id } });
    }
    */
    return created;
}

async function addthemenew(params,keywordDet,topicdet) {
    
    console.log(keywordDet); 

    console.log(topicdet); 

    const { count, rows } = await db4.MThemes.findAndCountAll({ where: { client_id: params.client_id,theme_name: params.theme_name}})
    if (count === 0) {
        console.log('addthemeData :', addthemeData); 
        //return addthemeData(params);
        const lookup = await db4.MThemes.create(params);
        console.log('111111111111 : lookup :', lookup.id);         
        //return await db4.MThemes.create(params);

        // for (var key1 in keywordDet) {  
        //     console.log("1111 keywordDet : "+keywordDet[key1].keyword); 
        // }

        // for (var key2 in topicdet) {  
        //     console.log("11 topicdet : "+topicdet[key1].keyword); 
        // }
        //return lookup;
    }
    if (count === 1) {

        console.log('updatethemeData :', updatethemeData); 

        console.log('id :', rows[0].id); 
        //return updatethemeData(params, rows[0])

        await db4.MThemes.update(params, { where: { id : rows[0].id } });

        const lookup = await db4.MThemes.findOne({ where: { id : rows[0].id } });     
        
        console.log('22222222222 : lookup :', lookup.id);      

        // for (var key1 in keywordDet) {  
        //     console.log("2222 keywordDet : "+keywordDet[key1].keyword); 
        // }

        // for (var key2 in topicdet) {  
        //     console.log("222 topicdet : "+topicdet[key1].keyword); 
        // }

        //return lookup;
    }
   
    

}

async function createMTheme(params) {       
        const { count, rows } = await db4.MThemes.findAndCountAll({ where: { client_id: params.client_id,theme_name: params.theme_name} })
        
        console.log('count', count)

        if (count === 0) {
            return addthemeData(params);
        }
        if (count === 1) {
            return updatethemeData(params, rows[0])
        }
}

async function addthemeData(params) {
    //console.log('addthemeData :', params); 
    //const lookup = await db4.MThemes.create(params);
    //console.log('lookup :', lookup.id);     
    //return await db4.MThemes.create(params);
    return await db4.MThemes.create(params);
}

async function updatethemeData(params,row) {    
    await db4.MThemes.update(params, { where: { id: row.id } });
    //const lookup = await db4.MThemes.findOne({ where: { id: row.id } });        
    return await db4.MThemes.findOne({ where: { id: row.id } });    
}

async function createMKeywords(dataArray) {    

    await db4.MThemeKeywords.bulkCreate(dataArray,
        {
            ignoreDuplicates: false,
        }).then(res => {
            return res;
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });    
}

async function createMTopics(dataArray) {    

    console.log('createMTopics ', createMTopics);

    await db4.MThemeKeywordTopics.bulkCreate(dataArray,
        {
            ignoreDuplicates: false,
        }).then(res => {
            return res;
        }).catch((error) => {
            console.error('Failed to retrieve data : ', error);
        });    
}


//Articlees Functions 
async function getarticlesrowAll(client_id,media_type,startdate,enddate,page,params) {  

    console.log("client_id : "+client_id);
    console.log("media_type : "+media_type);
    console.log("fromDate : "+startdate);
    console.log("toDate : "+enddate);

    const result = await db4.QaArticlesRow.findAll({
        where: {
            client_id: client_id,
            media_type_id: media_type,
            "publish_date": {
                [Op.and]: {
                  [Op.gte]: startdate,
                  [Op.lte]: enddate
                }
              },
              quality_check: '0',  
        },
        attributes: ["id",
        "cav_id",
        "category_id",       
        "category",
        "client_id",    
        "article_id",    
        "entity_id",    
        "entity_name",
        "press_release_id",
        "press_release",
        "tonality",
        "headline_mention",
        "prominent_id",    
        "prominent",
        "word_count",    
        "website_url",
        "publish_date",   
        "publication_id",   
        "publication",
        "edition_id",    
        "edition",
        "suppliment_id",    
        "suppliment",
        "language_id",    
        "language",
        "publication_type_id",    
        "publication_type",
        "headline",
        "journalist_id",    
        "journalist",
        "agency_id",    
        "agency",
        "author_id", 
        "mav",
        "ccm",
        "page_no",
        "merge_unmerge_key",
        "media_type_id",   
        "article_created_on",  
        "created_on",  
        "created_by",
        "last_modified_by",
        "last_modified_on",    
        "column_name", 
        "bureau", 
        "state_id", 
        "state",
        "is_unique_story", 
        "journalist_type",
        "article_location",
        "article_summary",
        "article_type",
        "hit_miss",
        "push_pull",
        "positive_ccms", 
        "neutral_ccms", 
        "negative_ccms", 
        "total_ccms", 
        "photo_presence", 
        "photo_type",
        "photo_keyword",
        "photo_tonality",
        "headline_presence", 
        "headline_visibility",
        "headline_keyword",
        "headline_tonality",
        "frontpage",
        "key_messages_presence",
        "key_messages",
        "photo_weightage", 
        "headline_weightage", 
        "shared_ex_weightage", 
        "co_score", 
        "visibility_score",         
        "reach",
        "index",
        "wordcount_weightage",   
        "monthly_visitor",   
        "daily_visitor",   
        "priority",
        "priority_weightage", 
        "vertical",
        "electrical_vehicle",
        "author_name",
        "topic_id",  
        "topic", 
        "zone_id",  
        "zone", 
        "keyword_id", 
        "keyword", 
        "keyword_category", 
        "keyword_category1", 
        "keyword_category2", 
        "theme_id", 
        "theme"]
        
    },
    );

    //,       logging: console.log
    return result;
}

//Articlees Functions 
async function getarticlesrowAllcustom(client_id,startdate,enddate,page,params) {    
 

    var condition = '';
    
    if(params.media_type != '' && typeof params.media_type != 'undefined'){
        condition = condition + " AND media_type_id = "+ params.media_type;
    }     

    if(params.zone != '' && typeof params.zone != 'undefined'){
        condition = condition + " AND zone_id = "+ params.zone;
    }  

    if(params.edition != '' && typeof params.edition != 'undefined'){
        condition = condition + " AND edition_id = "+ params.edition;
    }  

    if(params.publication != '' && typeof params.publication != 'undefined'){
        condition = condition + " AND publication_id = "+ params.publication;
    }  

    if(params.tonality != '' && typeof params.tonality != 'undefined'){
        condition = condition + " AND tonality = "+ params.tonality;
    }   
    
    if(params.entities != '' && typeof params.entities != 'undefined'){

        var entityscond = '';
        var entitys = params.entities;

        let length = entitys.length;

        if(length > 1){
            entityscond = entitys.join(",");
        } else {
            entityscond = entitys;
        }

        condition = condition + " AND entity_id IN ("+ entityscond+")";
    } 

    result = await db4.sequelize.query(
        "SELECT * FROM qa_articles_rows WHERE (client_id >= '"+client_id+"' AND publish_date >= '"+startdate+"' AND publish_date <= '"+enddate+"') AND quality_check = '0' "+condition,
        {            
            type: QueryTypes.SELECT,
            logging: console.log
        }
    );    
    return result;
}

//Articlees Functions 
async function getarticlesrowAlltril(page,req) {     

    console.log("req body : "+req.body);

    var atributeval = ["id",
    "cav_id",
    "category_id",       
    "category",
    "client_id",    
    "article_id",    
    "entity_id",    
    "entity_name",
    "press_release_id",
    "press_release",
    "tonality",
    "headline_mention",
    "prominent_id",    
    "prominent",
    "word_count",    
    "website_url",
    "publish_date",   
    "publication_id",   
    "publication",
    "edition_id",    
    "edition",
    "suppliment_id",    
    "suppliment",
    "language_id",    
    "language",
    "publication_type_id",    
    "publication_type",
    "headline",
    "journalist_id",    
    "journalist",
    "agency_id",    
    "agency",
    "author_id", 
    "mav",
    "ccm",
    "page_no",
    "merge_unmerge_key",
    "media_type_id",   
    "article_created_on",  
    "created_on",  
    "created_by",
    "last_modified_by",
    "last_modified_on",    
    "column_name", 
    "bureau", 
    "state_id", 
    "state",
    "is_unique_story", 
    "journalist_type",
    "article_location",
    "article_summary",
    "article_type",
    "hit_miss",
    "push_pull",
    "positive_ccms", 
    "neutral_ccms", 
    "negative_ccms", 
    "total_ccms", 
    "photo_presence", 
    "photo_type",
    "photo_keyword",
    "photo_tonality",
    "headline_presence", 
    "headline_visibility",
    "headline_keyword",
    "headline_tonality",
    "frontpage",
    "key_messages_presence",
    "key_messages",
    "photo_weightage", 
    "headline_weightage", 
    "shared_ex_weightage", 
    "co_score", 
    "visibility_score",         
    "reach",
    "index",
    "wordcount_weightage",   
    "monthly_visitor",   
    "daily_visitor",   
    "priority",
    "priority_weightage", 
    "vertical",
    "electrical_vehicle",
    "author_name",
    "topic_id",  
    "topic", 
    "zone_id",  
    "zone", 
    "keyword_id", 
    "keyword", 
    "keyword_category", 
    "keyword_category1", 
    "keyword_category2", 
    "theme_id", 
    "theme"];

    let where = {
        client_id: req.body.client_id,
        publish_date: {
            [Op.and]: {
              [Op.gte]: req.body.fromDate,
              [Op.lte]: req.body.toDate
            }
          },
          quality_check: '0',  
    };


    console.log("ABC : "+JSON.stringify(where)); 

    if(req.body.media_type != ''){
        // qa_keydata = {               
        //     "media_type_id" : req.body.media_type  
        // };    
        // condition.push(qa_keydata);

        where.media_type_id = req.body.media_type ;
    }

    if(req.body.zone != ''){
        // qa_keydata = {               
        //     "zone_id" : req.body.zone  
        // };    
        // condition.push(qa_keydata);
        where.zone_id = req.body.zone  ;
    }

    if(req.body.edition != ''){
        // qa_keydata = {               
        //     "edition_id" : req.body.edition  
        // };    
        // condition.push(qa_keydata);

        where.edition_id = req.body.edition  ;
    }

    if(req.body.publication != ''){
        // qa_keydata = {               
        //     "publication_id" : req.body.publication
        // };    
        // condition.push(qa_keydata);

        where.publication_id = req.body.publication;
    }

    if(req.body.tonality != ''){
        // qa_keydata = {               
        //     "tonality" : req.body.tonality
        // };    
        // condition.push(qa_keydata);

        where.tonality = req.body.tonality;
    }          

    //console.log("In where : "+where);  

    console.log(JSON.stringify(where)); exist;

    const result = await db4.QaArticlesRow.findAll({
        where: where,
        attributes: atributeval
        ,       logging: console.log
    },
    );
    return result;
}

async function getUniquearticlesrow(id) {
    
    const result = await db4.QaArticlesRow.findAll({
        where: {
            id: id
        },
        attributes: ["id",
        "cav_id",
        "category_id",       
        "category",
        "client_id",    
        "article_id",    
        "entity_id",    
        "entity_name",
        "press_release_id",
        "press_release",
        "tonality",
        "headline_mention",
        "prominent_id",    
        "prominent",
        "word_count",    
        "website_url",
        "publish_date",   
        "publication_id",   
        "publication",
        "edition_id",    
        "edition",
        "suppliment_id",    
        "suppliment",
        "language_id",    
        "language",
        "publication_type_id",    
        "publication_type",
        "headline",
        "journalist_id",    
        "journalist",
        "agency_id",    
        "agency",
        "author_id", 
        "mav",
        "ccm",
        "page_no",
        "merge_unmerge_key",
        "media_type_id",   
        "article_created_on",  
        "created_on",  
        "created_by",
        "last_modified_by",
        "last_modified_on",    
        "column_name", 
        "bureau", 
        "state_id", 
        "state",
        "is_unique_story", 
        "journalist_type",
        "article_location",
        "article_summary",
        "article_type",
        "hit_miss",
        "push_pull",
        "positive_ccms", 
        "neutral_ccms", 
        "negative_ccms", 
        "total_ccms", 
        "photo_presence", 
        "photo_type",
        "photo_keyword",
        "photo_tonality",
        "headline_presence", 
        "headline_visibility",
        "headline_keyword",
        "headline_tonality",
        "frontpage",
        "key_messages_presence",
        "key_messages",
        "photo_weightage", 
        "headline_weightage", 
        "shared_ex_weightage", 
        "co_score", 
        "visibility_score",         
        "reach",
        "index",
        "wordcount_weightage",   
        "monthly_visitor",   
        "daily_visitor",   
        "priority",
        "priority_weightage", 
        "vertical",
        "electrical_vehicle",
        "author_name",
        "topic_id",  
        "topic", 
        "zone_id",  
        "zone", 
        "keyword_id", 
        "keyword", 
        "keyword_category", 
        "keyword_category1", 
        "keyword_category2", 
        "theme_id", 
        "theme"]
        
    },
    );

    //,       logging: console.log
    return result; 
    
}

async function createQaData(params) {

    //check article id and cav id if there cavid
    const { count, rows } = await db4.QaArticlesRow.findAndCountAll({ where: { id: params.id } })
    if (count === 0) {
        return addQaDataRow(params);
    }
    if (count === 1) {
        return updateQaDataRow(params, rows[0])
    }

}

async function addQaDataRow(params) {
    return await db4.QaArticlesRow.create(params);
}

async function updateQaDataRow(params, article) {
    await db4.QaArticlesRow.update(params, { where: { id: article.id } });
    return await db4.QaArticlesRow.findOne({ where: { id: article.id } });
}

async function createJournalist(params) {   

    // await db4.QJournalists.bulkCreate(params,
    //     {
    //         ignoreDuplicates: true,
    //     }).then(res => {
    //         return res;
    //     }).catch((error) => {
    //         console.error('Failed to retrieve data : ', error);
    //     });    

    await db4.QJournalists.findOrCreate({ where: { q_article_id: params.q_article_id, journalists_type: params.journalists_type,journalists_name: params.journalists_name }, defaults: params });
}

async function findProductOne(project) {
    return await db4.QaClientProduct.findOne({ where: { product_name_merge: project.product_name_merge } });
}
async function findQaSpokesPerson(project) {
    return await db4.QaSpokesPerson.findOne({ where: { spokesperson_name_merge: project.spokesperson_name_merge } });
}

async function createQaSpokesPerson(params) {

    // sequelize.sync().then(async () => {
    // await db4.QaSpokesPerson.bulkCreate(dataArray,
    //     {
    //         ignoreDuplicates: true,
    //     }).then(res => {
    //         return res;
    //     }).catch((error) => {
    //         console.error('Failed to retrieve data : ', error);
    //     });   

    console.log("spokesperson_name_merge  : "+params.spokesperson_name_merge);

    const [row, created] = db4.QaSpokesPerson.findOrCreate({ where: {spokesperson_name_merge: params.spokesperson_name_merge}, defaults: params });
    // if (created === false) {
    //     //await db4.QaSpokesPerson.update(params, { where: { id: row.id } });
    // }
        
    return created;
}

async function createQaDataSpokesPerson(params) {    

    return await db4.QaDataSpokesPerson.findOrCreate({ where: { spokesperson_id: params.spokesperson_id, q_article_id: params.q_article_id }, defaults: params });
}

async function createQaClientProduct(params) {
    // await db4.QaClientProduct.bulkCreate(dataArray,
    //     {
    //         ignoreDuplicates: true,
    //     }).then(res => {
    //         return res;
    //     }).catch((error) => {
    //         console.error('Failed to retrieve data : ', error);
    //     });    

    await db4.QaClientProduct.findOrCreate({ where: {company_id: params.company_id,product_name_merge: params.product_name_merge}, defaults: params });    
}

async function createQaDataProduct(params) {    
    await db4.QaDataProduct.findOrCreate({ where: { product_id: params.product_id, q_article_id: params.q_article_id }, defaults: params });
}

async function updatearticleStatus(params,id) {
    await db4.QaArticlesRow.update(params, { where: { id: id } });
    return true;
}

async function getarticlesrowAllcustomcron() {    
 
    var condition = '';
    
    /*if(params.client_id != '' && typeof params.client_id != 'undefined'){
        condition = condition + " AND client_id = "+ params.client_id;
    }  

    if(params.client_id != '' && typeof params.client_id != 'undefined'){
        condition = condition + " AND client_id = "+ params.client_id;
    } 

    if(params.client_id != '' && typeof params.client_id != 'undefined'){
        condition = condition + " AND client_id = "+ params.client_id;
    }  
    
    if(params.media_type != '' && typeof params.media_type != 'undefined'){
        condition = condition + " AND media_type_id = "+ params.media_type;
    }  

    if(params.media_type != '' && typeof params.media_type != 'undefined'){
        condition = condition + " AND media_type_id = "+ params.media_type;
    }  

    if(params.media_type != '' && typeof params.media_type != 'undefined'){
        condition = condition + " AND media_type_id = "+ params.media_type;
    }     

    if(params.zone != '' && typeof params.zone != 'undefined'){
        condition = condition + " AND zone_id = "+ params.zone;
    }  

    if(params.edition != '' && typeof params.edition != 'undefined'){
        condition = condition + " AND edition_id = "+ params.edition;
    }  

    if(params.publication != '' && typeof params.publication != 'undefined'){
        condition = condition + " AND publication_id = "+ params.publication;
    }  

    if(params.tonality != '' && typeof params.tonality != 'undefined'){
        condition = condition + " AND tonality = "+ params.tonality;
    }   
    
    if(params.entities != '' && typeof params.entities != 'undefined'){

        var entityscond = '';
        var entitys = params.entities;

        let length = entitys.length;

        if(length > 1){
            entityscond = entitys.join(",");
        } else {
            entityscond = entitys;
        }

        condition = condition + " AND entity_id IN ("+ entityscond+")";
    } */
//,logging: console.log

    result = await db4.sequelize.query(
        "SELECT * FROM qa_articles_rows where quality_check = '1' "+condition+"",
        {            
            type: QueryTypes.SELECT
        }
    );    
    return result;
}

async function getQualifyRulesAll() { 
    //,    logging: console.log

    const result = await db4.MQualifyRules.findAll({
            attributes: ["id",
                "rule"],
            order: ['id']
        },
    );
    return result;
}


async function findArticleQaSpokesPerson(articleId) {

    //return await db4.QaSpokesPerson.findAll({ where: { spokesperson_name_merge: data.articleId } });

    result = await db4.sequelize.query(
        "SELECT q_spokepeople.q_article_id,q_spokepeople.spokesperson_profiling,q_spokepeople.spokesperson_visibility,q_spokepeople.spokesperson_Comments,spokepeople.spokesperson_name,spokepeople.description,spokepeople.company_id FROM q_spokepeople INNER JOIN spokepeople ON q_spokepeople.spokesperson_id = spokepeople.id and q_article_id = "+articleId,
        {            
            type: QueryTypes.SELECT
        }
    );    
    return result;
}

async function findArticleProducts(articleId) {

    //return await db4.QaSpokesPerson.findAll({ where: { spokesperson_name_merge: data.articleId } });

    result = await db4.sequelize.query(
        "SELECT q_products.q_article_id,products.product_name,products.description,products.company_id,products.product_category FROM q_products INNER JOIN products ON q_products.product_id = products.id and q_article_id = "+articleId,
        {            
            type: QueryTypes.SELECT
        }
    );    
    return result;
}

async function findArticlejurnalist(articleId) {

    return await db4.QJournalists.findAll({ where: { q_article_id: articleId } });
}

async function findqasettings(keydatastr) {
    //,       logging: console.log
    return await db4.MQasettings.findAll({ where: { key_data: keydatastr } });
}


async function addqualifyerrorentry(params) {
    
    //,logging: console.log
    const [row, created] = await db4.QArticleQualify.findOrCreate({ where: { bid: params.bid,article_id: params.article_id,rule_id: params.rule_id}, defaults: params });

    if (created === false) {
        await db4.QArticleQualify.update(params, { where: { id: row.id } });
    }

    return created;
}

//suppliments Functions 
async function getProductAll() {    

    const result = await db4.QaClientProduct.findAll({
        attributes: ["id",
        "product_name",
        "product_name_merge",
        "description",
        "company_id",
        "product_category",
            "createdAt",
            "created_by"],
        group: "product_name_merge",
    },
    );
    return result;
}

async function getUniqueProduct(id) {
    
    const result = await db4.QaClientProduct.findAll({
        where: {
            id: id
        },
        attributes: ["id",
            "product_name",
            "product_name_merge",
            "description",
            "company_id",
            "product_category",
            "createdAt",
            "created_by"],
        group: "product_name_merge",
    });
    return result;

}

async function addProduct(params,action,id=0) {   

    if(action == 'update'){
        const [row, created] = await db4.QaClientProduct.findOrCreate({ where: { id: id}, defaults: params });

        //console.log('created : ', created)

        if (created === false) {      

            await db4.QaClientProduct.update(params, { where: { id: row.id } });
        }

        return created;
    } else {
        const [row, created] = await db4.QaClientProduct.findOrCreate({ where: { product_name_merge: params.product_name_merge}, defaults: params });

        //console.log('created : ', created)

        if (created === false) {      

            await db4.QaClientProduct.update(params, { where: { id: row.id } });
        }

        return created;
    }

    
}

//Articlees Functions 
async function getarticlesheadlinerowAll(headline, entity_id,publication,startdate,enddate) {  

    // console.log("headline : "+headline);
    // console.log("entity_id : "+entity_id);
    // console.log("publication : "+publication);
    // console.log("startdate : "+startdate);
    // console.log("enddate : "+enddate);

    const result = await db4.QaArticlesRow.findAll({
        where: {
            headline: headline,
            entity_id: entity_id,
            publication: publication,
            "publish_date": {
                [Op.and]: {
                  [Op.gte]: startdate,
                  [Op.lte]: enddate
                }
              }
        },
        attributes: ["id",
        "cav_id",
        "category_id",       
        "category",
        "client_id",    
        "article_id",    
        "entity_id",    
        "entity_name",
        "press_release_id",
        "press_release",
        "tonality",
        "headline_mention",
        "prominent_id",    
        "prominent",
        "word_count",    
        "website_url",
        "publish_date",   
        "publication_id",   
        "publication",
        "edition_id",    
        "edition",
        "suppliment_id",    
        "suppliment",
        "language_id",    
        "language",
        "publication_type_id",    
        "publication_type",
        "headline",
        "journalist_id",    
        "journalist",
        "agency_id",    
        "agency",
        "author_id", 
        "mav",
        "ccm",
        "page_no",
        "merge_unmerge_key",
        "media_type_id",   
        "article_created_on",  
        "created_on",  
        "created_by",
        "last_modified_by",
        "last_modified_on",    
        "column_name", 
        "bureau", 
        "state_id", 
        "state",
        "is_unique_story", 
        "journalist_type",
        "article_location",
        "article_summary",
        "article_type",
        "hit_miss",
        "push_pull",
        "positive_ccms", 
        "neutral_ccms", 
        "negative_ccms", 
        "total_ccms", 
        "photo_presence", 
        "photo_type",
        "photo_keyword",
        "photo_tonality",
        "headline_presence", 
        "headline_visibility",
        "headline_keyword",
        "headline_tonality",
        "frontpage",
        "key_messages_presence",
        "key_messages",
        "photo_weightage", 
        "headline_weightage", 
        "shared_ex_weightage", 
        "co_score", 
        "visibility_score",         
        "reach",
        "index",
        "wordcount_weightage",   
        "monthly_visitor",   
        "daily_visitor",   
        "priority",
        "priority_weightage", 
        "vertical",
        "electrical_vehicle",
        "author_name",
        "topic_id",  
        "topic", 
        "zone_id",  
        "zone", 
        "keyword_id", 
        "keyword", 
        "keyword_category", 
        "keyword_category1", 
        "keyword_category2", 
        "theme_id", 
        "theme"]
        
    },
    );

    //,       logging: console.log

    return result;
}

async function findjurnalist() {

    const result = await db4.MJournalists.findAll({
            attributes: ["id",
            "journalist_name",
            "publication_id",
            "journalist_email",
            "journalist_contact",
            "journalist_twitter",
            "createdAt",
            "created_by"]
            });
    return result;
}


//Articlees Functions 
async function getQCarticlesrowAll(client_id,startdate,enddate,page,params) {    
     
    result = await db4.sequelize.query(
        "SELECT * FROM qa_articles_rows WHERE quality_check = '2' ",
        {            
            type: QueryTypes.SELECT
        }
    );    

    //,    logging: console.log
    return result;
}

async function getarticlesqcrulesdata(articleId) {

    return await db4.QArticleQualifies.findAll({ where: { bid: articleId } });
}

//Articlees Functions 
async function getQCarticlesrowAllCNT(flag) {    
     
    result = await db4.sequelize.query(
        "SELECT count(*) as flagcount FROM qa_articles_rows WHERE quality_check = '"+flag+"' ",
        {            
            type: QueryTypes.SELECT
        }
    );    

    //, logging: console.log
    return result;
}

//Articlees Functions 
async function getarticlesrowAllrelated(client_id,fromDate,toDate,headline,publication,media_type,zone,edition,entities) {    
 
    var condition = '';
    
    if(client_id != '' && typeof client_id != 'undefined'){
        condition = condition + " AND client_id = "+ client_id;
    }  

    if(media_type != '' && typeof media_type != 'undefined'){
        condition = condition + " AND media_type_id = "+ media_type;
    }     

    if(zone != '' && typeof zone != 'undefined'){
        condition = condition + " AND zone_id = "+ zone;
    }  

    if(edition != '' && typeof edition != 'undefined'){
        condition = condition + " AND edition_id = "+ edition;
    }  

    if(headline != '' && typeof headline != 'undefined'){
        condition = condition + " AND headline LIKE '%"+ headline +"%'";
    }   

    if(publication != '' && typeof publication != 'undefined'){
        condition = condition + " AND publication_id = "+ publication;
    } 

    if(fromDate != '' && fromDate != 'Invalid date' && toDate != '' && toDate != 'Invalid date'){
          
        if(fromDate == 'Invalid date' && toDate == 'Invalid date'){
            //console.log('In If');
        } else {
            condition = condition + " AND publish_date >= '"+fromDate+"' and publish_date <= '"+toDate+"' ";
        }
        //condition = condition + " AND publish_date >= '"+fromDate+"' and publish_date <= '"+toDate+"' ";
    }      
    
    if(entities != '' && typeof entities != 'undefined'){

        var entityscond = '';
        var entitys = entities;

        let length = entitys.length;

        if(length > 1){
            entityscond = entitys.join(",");
        } else {
            entityscond = entitys;
        }

        condition = condition + " AND entity_id IN ("+ entityscond+")";
    } 

    console.log("SELECT * FROM qa_articles_rows WHERE headline != ''  "+condition);
    //AND quality_check = '0'

    console.log("SELECT * FROM qa_articles_rows WHERE headline != ''  "+condition);

    result = await db4.sequelize.query(
        "SELECT * FROM qa_articles_rows WHERE headline != ''  "+condition,
        {            
            type: QueryTypes.SELECT,
            logging: console.log
        }
    );    
    return result;
}

async function deletepubsingle(id) { 

    console.log(" deletepubsingle : "+id);

    result = await db4.sequelize.query(
        "DELETE FROM m_publications WHERE id = "+id,
        {                        
            logging: console.log
        }
    );   
    
    return result;
}


async function deletesuplisingle(id) { 

    console.log(" deletesuplisingle : "+id);

    result = await db4.sequelize.query(
        "DELETE FROM m_suppliments WHERE id = "+id,
        {                        
            logging: console.log
        }
    );   
    
    return result;
}

async function deleteprodsingle(id) { 

    console.log(" deleteprodsingle : "+id);

    result = await db4.sequelize.query(
        "DELETE FROM products WHERE id = "+id,
        {                        
            logging: console.log
        }
    );   
    
    return result;
}


async function deletespoksingle(id) { 

    console.log(" deletespoksingle : "+id);

    result = await db4.sequelize.query(
        "DELETE FROM m_spokespersons WHERE id = "+id,
        {                        
            logging: console.log
        }
    );   
    
    return result;
}

async function deletethemesingle(id) { 

    console.log(" deletethemesingle : "+id);

    result = await db4.sequelize.query(
        "DELETE FROM m_themes WHERE id = "+id,
        {                        
            logging: console.log
        }
    );   
    
    return result;
}

async function deletethemekeywordsingle(id) { 

    console.log(" deletethemekeywordsingle : "+id);

    result = await db4.sequelize.query(
        "DELETE FROM m_theme_keywords WHERE id = "+id,
        {                        
            logging: console.log
        }
    );   
    
    return result;
}

async function deletekeywordtopicsingle(id) { 

    console.log(" deletekeywordtopicsingle : "+id);

    result = await db4.sequelize.query(
        "DELETE FROM m_theme_keyword_topics WHERE id = "+id,
        {                        
            logging: console.log
        }
    );   
    
    return result;
}
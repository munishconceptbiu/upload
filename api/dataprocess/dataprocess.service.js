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
    addarticlesrow,
    getarticlesrowAllcustom
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

async function addPublication(params) {
    //console.log("params : ",params); //exist;

    const [row, created] = await db4.MPublications.findOrCreate({ where: { publication: params.publication}, defaults: params });
    if (created === false) {
        await db4.MPublications.update(params, { where: { id: row.id } });
    }
    return created;
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

async function addsuppliments(params) {
    
    const [row, created] = await db4.MSuppliments.findOrCreate({ where: { suppliment_name: params.suppliment_name}, defaults: params });

    if (created === false) {
        await db4.MSuppliments.update(params, { where: { id: row.id } });
    }

    return created;
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

async function addspokespersons(params) {
    
    const [row, created] = await db4.MSpokespersons.findOrCreate({ where: { spokesperson_name: params.spokesperson_name}, defaults: params });

    if (created === false) {
        await db4.MSpokespersons.update(params, { where: { id: row.id } });
    }

    return created;
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


async function addkeywords(params) {
    
    const [row, created] = await db4.MThemeKeywords.findOrCreate({ where: { theme_id: params.theme_id,keyword: params.keyword}, defaults: params });

    if (created === false) {
        await db4.MThemeKeywords.update(params, { where: { id: row.id } });
    }

    return created;
}

async function addtheme(params) {
    
    const [row, created] = await db4.MThemes.findOrCreate({ where: { client_id: params.client_id,theme_name: params.theme_name}, defaults: params });

    if (created === false) {
        await db4.MThemes.update(params, { where: { id: row.id } });
    }

    return created;
}

async function addtopic(params) {
    
    const [row, created] = await db4.MThemeKeywordTopics.findOrCreate({ where: { keyword_id: params.keyword_id,topic: params.topic}, defaults: params });

    if (created === false) {
        await db4.MThemeKeywordTopics.update(params, { where: { id: row.id } });
    }

    return created;
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
        ,       logging: console.log
    },
    );
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
        "SELECT * FROM qa_articles_rows WHERE (client_id = '"+client_id+"' AND publish_date >= '"+startdate+"' AND publish_date <= '"+enddate+"') AND quality_check = '0' "+condition,
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
        ,       logging: console.log
    },
    );
    return result; 
    
}

async function addarticlesrow(params) {
    
    const [row, created] = await db4.MSpokespersons.findOrCreate({ where: { spokesperson_name: params.spokesperson_name}, defaults: params });

    if (created === false) {
        await db4.MSpokespersons.update(params, { where: { id: row.id } });
    }

    return created;
}
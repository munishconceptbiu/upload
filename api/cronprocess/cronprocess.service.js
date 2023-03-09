const db = require('_helpers/db');
const db2 = require('_helpers/db2');
const db3 = require('_helpers/db3');
const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func, exist } = require('joi');

//const moment = require('moment');

module.exports = {    
    getarticlesrowAllcustom
};

async function getarticlesrowAllcustom(params,start,limit) {    
 
    var condition = '';
    
    if(params.client_id != '' && typeof params.client_id != 'undefined'){
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
    } 

    result = await db4.sequelize.query(
        "SELECT * FROM qa_articles_rows quality_check = '1' "+condition,
        {            
            type: QueryTypes.SELECT,
            logging: console.log
        }
    );    
    return result;
}
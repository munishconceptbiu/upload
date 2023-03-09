const express = require('express');
const cronprocessService = require('./cronprocess.service');
const moment = require('moment');
const multer = require('multer')
const storageCustom = require('./customStorageEngine')
var XLSX = require('xlsx');
const { exist } = require('joi');
const states = [
    { id: 0, city: "National", state: "National" },
    { id: 99, city: "Online Web", state: "Online Web" },
    { id: 28, city: "Ludhiana", state: "Punjab" },
    { id: 6, city: "Chandigarh", state: "Punjab" },
    { id: 10, city: "New Delhi", state: "New Delhi" },
    { id: 29, city: "Jaipur", state: "Rajasthan" },
    { id: 33, city: "Lucknow", state: "Uttar Pradesh" },
    { id: 5, city: "Patna", state: "Bihar" },
    { id: 4, city: "Guwahati", state: "Assam" },
    { id: 26, city: "Bhubaneswar", state: "Odisha" },
    { id: 7, city: "Raipur", state: "Chhattisgarh" },
    { id: 20, city: "Indore", state: "Madhya Pradesh" },
    { id: 12, city: "Ahmedabad", state: "Gujarat" },
    { id: 21, city: "Pune", state: "Maharashtra" },
    { id: 21, city: "Aurangabad", state: "Maharashtra" },
    { id: 2, city: "Vijayawada", state: "Andhra Pradesh" },
    { id: 17, city: "Bangalore", state: "Karnataka" },
    { id: 18, city: "Kochi", state: "Kerala" },
    { id: 20, city: "Bhopal", state: "Madhya Pradesh" },
    { id: 31, city: "Chennai", state: "Tamil Nadu" },
    { id: 36, city: "Hyderabad", state: "Telangana" },
    { id: 16, city: "Jamshedpur", state: "Jharkhand" },
    { id: 35, city: "Kolkata", state: "West Bengal" },
    { id: 21, city: "Mumbai", state: "Maharashtra" },
    { id: 16, city: "Ranchi", state: "Jharkhand" },
    { id: 12, city: "Vadodara", state: "Gujarat" },
    { id: 12, city: "Rajkot", state: "Gujarat" },
    { id: 17, city: "Mangalore", state: "Karnataka" },
    { id: 12, city: "Surat", state: "Gujarat" },
    { id: 21, city: "Nagpur", state: "Maharashtra" },
    { id: 100, city: "Goa", state: "Goa" },
    { id: 33, city: "Greater Noida", state: "Uttar Pradesh" },
    { id: 33, city: "Noida", state: "Uttar Pradesh" },
    { id: 43, city: "Dehradun", state: "Uttarakhand" }
]



exports.cronqualifyarticle = async function (req, res, next) {

    var msg = params = page = ''; 

    const getarticlesrowAll = new Promise((resolve, reject) => {     
        
        //cronprocessService.getarticlesrowAll(req.body.client_id,req.body.media_type,moment(new Date(req.body.fromDate)).format('YYYY-MM-DD'),moment(new Date(req.body.toDate)).format('YYYY-MM-DD'),page,req) 
        cronprocessService.getarticlesrowAllcustom(req.body,start,limit) 
        .then(data => { 
            //console.log(JSON.stringify(data)); exist;             
            let articlesrowlist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (articlesrow, index) => {

                    const pullData = {
                        "id" : articlesrow.id,
                        "cav_id" : articlesrow.cav_id,
                        "category_id" : articlesrow.category_id,       
                        "category" : articlesrow.category,
                        "client_id" : articlesrow.client_id,    
                        "article_id" : articlesrow.article_id,    
                        "entity_id" : articlesrow.entity_id,    
                        "entity_name" : articlesrow.entity_name,
                        "press_release_id" : articlesrow.press_release_id,
                        "press_release" : articlesrow.press_release,
                        "tonality" : articlesrow.tonality,
                        "headline_mention" : articlesrow.headline_mention,
                        "prominent_id" : articlesrow.prominent_id,    
                        "prominent" : articlesrow.prominent,
                        "word_count" : articlesrow.word_count,    
                        "website_url" : articlesrow.website_url,
                        "publish_date" : articlesrow.publish_date,   
                        "publication_id" : articlesrow.publication_id,   
                        "publication" : articlesrow.publication,
                        "edition_id" : articlesrow.edition_id,    
                        "edition" : articlesrow.edition,
                        "suppliment_id" : articlesrow.suppliment_id,    
                        "suppliment" : articlesrow.suppliment,
                        "language_id" : articlesrow.language_id,    
                        "language" : articlesrow.language,
                        "publication_type_id" : articlesrow.publication_type_id,    
                        "publication_type" : articlesrow.publication_type,
                        "headline" : articlesrow.headline,
                        "journalist_id" : articlesrow.journalist_id,    
                        "journalist" : articlesrow.journalist,
                        "agency_id" : articlesrow.agency_id,    
                        "agency" : articlesrow.agency,
                        "author_id" : articlesrow.author_id, 
                        "mav" : articlesrow.mav,
                        "ccm" : articlesrow.ccm,
                        "page_no" : articlesrow.page_no,
                        "merge_unmerge_key" : articlesrow.merge_unmerge_key,
                        "media_type_id" : articlesrow.media_type_id,   
                        "article_created_on" : articlesrow.article_created_on,  
                        "created_on" : articlesrow.created_on,  
                        "created_by" : articlesrow.created_by,
                        "last_modified_by" : articlesrow.last_modified_by,
                        "last_modified_on" : articlesrow.last_modified_on,    
                        "column_name" : articlesrow.column_name, 
                        "bureau" : articlesrow.bureau, 
                        "state_id" : articlesrow.state_id, 
                        "state" : articlesrow.state,
                        "is_unique_story" : articlesrow.is_unique_story, 
                        "journalist_type" : articlesrow.journalist_type,
                        "article_location" : articlesrow.article_location,
                        "article_summary" : articlesrow.article_summary,
                        "article_type" : articlesrow.article_type,
                        "hit_miss" : articlesrow.hit_miss,
                        "push_pull" : articlesrow.push_pull,
                        "positive_ccms" : articlesrow.positive_ccms, 
                        "neutral_ccms" : articlesrow.neutral_ccms, 
                        "negative_ccms" : articlesrow.negative_ccms, 
                        "total_ccms" : articlesrow.total_ccms, 
                        "photo_presence" : articlesrow.photo_presence, 
                        "photo_type" : articlesrow.photo_type,
                        "photo_keyword" : articlesrow.photo_keyword,
                        "photo_tonality" : articlesrow.photo_tonality,
                        "headline_presence" : articlesrow.headline_presence, 
                        "headline_visibility" : articlesrow.headline_visibility,
                        "headline_keyword" : articlesrow.headline_keyword,
                        "headline_tonality" : articlesrow.headline_tonality,
                        "frontpage" : articlesrow.frontpage,
                        "key_messages_presence" : articlesrow.key_messages_presence,
                        "key_messages" : articlesrow.key_messages,
                        "photo_weightage" : articlesrow.photo_weightage, 
                        "headline_weightage" : articlesrow.headline_weightage, 
                        "shared_ex_weightage" : articlesrow.shared_ex_weightage, 
                        "co_score" : articlesrow.co_score, 
                        "visibility_score" : articlesrow.visibility_score,         
                        "reach" : articlesrow.reach,
                        "index" : articlesrow.index,
                        "wordcount_weightage" : articlesrow.wordcount_weightage,   
                        "monthly_visitor" : articlesrow.monthly_visitor,   
                        "daily_visitor" : articlesrow.daily_visitor,   
                        "priority" : articlesrow.priority,
                        "priority_weightage" : articlesrow.priority_weightage, 
                        "vertical" : articlesrow.vertical,
                        "electrical_vehicle" : articlesrow.electrical_vehicle,
                        "author_name" : articlesrow.author_name,
                        "topic_id" : articlesrow.topic_id,  
                        "topic" : articlesrow.topic, 
                        "zone_id" : articlesrow.zone_id,  
                        "zone" : articlesrow.zone, 
                        "keyword_id" : articlesrow.keyword_id, 
                        "keyword" : articlesrow.keyword, 
                        "keyword_category" : articlesrow.keyword_category, 
                        "keyword_category1" : articlesrow.keyword_category1, 
                        "keyword_category2" : articlesrow.keyword_category2, 
                        "theme_id" : articlesrow.theme_id, 
                        "theme" : articlesrow.theme                     
                    }

                    articlesrowlist.push(pullData);
                    if(data.length === index + 1){
                        resolve(articlesrowlist)
                    }
                })   
                msg = 'sucessfully found articles row Data'; 
            } else {
                msg = 'Not found articles row Data'; 
                resolve(articlesrowlist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getarticlesrowAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, articlesrowlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}


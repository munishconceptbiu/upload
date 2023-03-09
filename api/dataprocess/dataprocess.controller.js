const express = require('express');
const dataprocessService = require('./dataprocess.service');
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

// publication functions 

exports.getpublicationsAll = async function (req, res, next) {

    //console.log(("@@@@@@@@@@@@@@@"); exist;
    var msg = ''; 
    const getpublicationsAll = new Promise((resolve, reject) => {
        dataprocessService.getpublicationsAll()
        .then(data => {

            //console.log((JSON.stringify(data)); exist;
            
            let publicationlist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (publictn, index) => {
                    const pullData = {
                        "id" : publictn.id, 
                        "publication" : publictn.publication,
                        "biunew_publication_id" : publictn.biunew_publication_id,
                        "media_type_id" : publictn.media_type_id,
                        "publication_type_id" : publictn.publication_type_id,
                        "language_id" : publictn.language_id,
                        "website" : publictn.website,
                        "webname" : publictn.webname,
                        "website_type_id" : publictn.website_type_id,
                        "biunew_publication_edition_id" : publictn.biunew_publication_edition_id,    
                        "edition_id" : publictn.edition_id,
                        "suppliment_id" : publictn.suppliment_id,
                        "readership" : publictn.readership,
                        "circlation" : publictn.circlation,
                        "pe_sample_media" : publictn.pe_sample_media, 
                        "sample_media" : publictn.sample_media
                    }
                    publicationlist.push(pullData);
                    if(data.length === index + 1){
                        resolve(publicationlist)
                    }
                })   
                msg = 'sucessfully found Publication Data'; 
            } else {
                msg = 'Not found Publication Data'; 
                resolve(publicationlist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getpublicationsAll]).then((values) => {
        //console.log((('values', values)
        res.json({ message: msg, publicationlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getUniquePublications = async function (req, res, next) {

    //console.log(((req.params.id); exist;       
    var msg = ''; 
    const getUniquePublications = new Promise((resolve, reject) => {
        dataprocessService.getUniquePublications(req.params.id)
        .then(data => {

           //console.log(("length : "+data.length); exist; 

            let publicationlist = []

            if(data.length > 0){
                data && data.length && data.forEach(async (publictn, index) => {
                    const pullData = {
                        "id" : publictn.id, 
                        "publication" : publictn.publication,
                        "biunew_publication_id" : publictn.biunew_publication_id,
                        "media_type_id" : publictn.media_type_id,
                        "publication_type_id" : publictn.publication_type_id,
                        "language_id" : publictn.language_id,
                        "website" : publictn.website,
                        "webname" : publictn.webname,
                        "website_type_id" : publictn.website_type_id,
                        "biunew_publication_edition_id" : publictn.biunew_publication_edition_id,    
                        "edition_id" : publictn.edition_id,
                        "suppliment_id" : publictn.suppliment_id,
                        "readership" : publictn.readership,
                        "circlation" : publictn.circlation,
                        "pe_sample_media" : publictn.pe_sample_media, 
                        "sample_media" : publictn.sample_media
                    }
                    publicationlist.push(pullData);
                    if(data.length === index + 1){
                        resolve(publicationlist)
                    }
                })    

                msg = 'sucessfully found Publication Data'; 

            } else {
                msg = 'Not found Publication Data'; 
              resolve(publicationlist)
            }    
            
        })
        .catch(next);
       
    });

    //console.log((JSON.stringify(getUniquePublications)); exist;

    Promise.all([getUniquePublications]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, publicationlist: values[0] });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.addPublication = async function (req, res, next) {
    
    //console.log((JSON.stringify(req.body)); 
    //console.log((req.body);exist;

    const addPublication = new Promise((resolve, reject) => {
        //req.body.addpublication1.map(async (e, index) => {          

        //console.log((('language_id : ', req.body.language_id)

        var biunew_publication_id = req.body.publication;
        if(biunew_publication_id == '' || typeof biunew_publication_id == 'undefined' ){ biunew_publication_id = "0"; }

        var language_id = req.body.language_id;
        if(language_id == '' || typeof language_id == 'undefined'){ language_id = ""; }

        var webname = req.body.webname;
        if(webname == '' || typeof webname == 'undefined'){ webname = ""; }

        var website = req.body.website;
        if(website == '' || typeof website == 'undefined'){ website = ""; }

        var website_type_id = req.body.website_type_id;
        if(website_type_id == '' || typeof website_type_id == 'undefined'){ website_type_id = ""; }

        var suppliment_id = req.body.suppliment_id;
        if(suppliment_id == '' || typeof suppliment_id == 'undefined'){ suppliment_id = ""; }

        var pe_sample_media = req.body.pe_sample_media;
        if(pe_sample_media == '' || typeof pe_sample_media == 'undefined'){ pe_sample_media = ""; }

        var sample_media = req.body.sample_media;
        if(sample_media == '' || typeof sample_media == 'undefined'){ sample_media = ""; }

        var biunew_publication_edition_id = req.body.biunew_publication_edition_id;
        if(biunew_publication_edition_id == '' || typeof biunew_publication_edition_id == 'undefined'){ biunew_publication_edition_id = "0"; }

            dataprocessService.addPublication({
                biunew_publication_id: biunew_publication_id,
                language_id: language_id,
                website: website,
                webname: webname,
                website_type_id: website_type_id,
                suppliment_id: suppliment_id,
                pe_sample_media: pe_sample_media,
                sample_media: sample_media,
                biunew_publication_edition_id: biunew_publication_edition_id,
                publication: req.body.publication,
                media_type_id: req.body.media_type,
                publication_type_id: req.body.publication_type_id,
                edition_id: req.body.edition_id,
                readership: req.body.readership,
                circlation: req.body.circlation,
                created_by: req.body.user_id                
            },req.body.action,req.body.id)
        //})
        resolve('sucessfully added Publications')
    });
    
    Promise.all([addPublication]).then((values) => {
        //console.log((('values 111', values)
        res.json({ message: 'Publications sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}



// suppliments functions 

exports.getsupplimentsAll = async function (req, res, next) {

    //console.log((("@@@@@@@@@@@@@@@"); exist;
    var msg = ''; 
    const getsupplimentsAll = new Promise((resolve, reject) => {
        dataprocessService.getsupplimentsAll()
        .then(data => {            
            
            let supplimentslist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (supliments, index) => {

                    const pullData = {
                        "id" : supliments.id, 
                        "biu_id" : supliments.biu_id, 
                        "suppliment_name" : supliments.suppliment_name,
                        "created_on" : supliments.created_on,
                        "created_by" : supliments.created_by
                    }

                    supplimentslist.push(pullData);
                    if(data.length === index + 1){
                        resolve(supplimentslist)
                    }
                })   
                msg = 'sucessfully found suppliments Data'; 
            } else {
                msg = 'Not found suppliments Data'; 
                resolve(supplimentslist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getsupplimentsAll]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, supplimentslist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getUniquesuppliments = async function (req, res, next) {

    //console.log(((req.params.id); exist;       
    var msg = ''; 
    const getUniquesuppliments = new Promise((resolve, reject) => {
        dataprocessService.getUniquesuppliments(req.params.id)
        .then(data => {

           //console.log((("length : "+data.length); exist; 

            let supplimentslist = []

            if(data.length > 0){
                data && data.length && data.forEach(async (supliments, index) => {
                    const pullData = {
                        "id" : supliments.id, 
                        "biu_id" : supliments.biu_id, 
                        "suppliment_name" : supliments.suppliment_name,
                        "created_on" : supliments.created_on,
                        "created_by" : supliments.created_by
                    }
                    supplimentslist.push(pullData);
                    if(data.length === index + 1){
                        resolve(supplimentslist)
                    }
                })    

                msg = 'sucessfully found suppliments Data'; 

            } else {
                msg = 'Not found suppliments Data'; 
              resolve(supplimentslist)
            }    
            
        })
        .catch(next);
       
    });

    //console.log(((JSON.stringify(getUniquesuppliments)); exist;

    Promise.all([getUniquesuppliments]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, supplimentslist: values[0] });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.addsuppliments = async function (req, res, next) {
    
    const addsuppliments = new Promise((resolve, reject) => {
        //req.body.addsuppliments1.map(async (e, index) => {             

        var biu_id = req.body.biu_id;
        if(biu_id == '' || typeof biu_id == 'undefined' ){ biu_id = "0"; }
        
            dataprocessService.addsuppliments({
                biu_id: biu_id,
                suppliment_name: req.body.suppliment_name,                
                created_by: req.body.user_id
            },req.body.action,req.body.id)
        //})
        resolve('sucessfully added suppliments')
    });
    
    Promise.all([addsuppliments]).then((values) => {
        //console.log((('values 111', values)
        res.json({ message: 'suppliments sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}



// spokespersons functions 

exports.getspokespersonsAll = async function (req, res, next) {

    //console.log((("@@@@@@@@@@@@@@@"); exist;
    var msg = ''; 
    const getspokespersonsAll = new Promise((resolve, reject) => {
        dataprocessService.getspokespersonsAll()
        .then(data => {

            //console.log((JSON.stringify(data)); exist;
            
            let spokespersonslist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (spokespersons, index) => {

                    const pullData = {
                        "id" : spokespersons.id, 
                        "spokesperson_name" : spokespersons.spokesperson_name,
                        "designation" : spokespersons.designation,
                        "member_for_platform" : spokespersons.member_for_platform,
                        "company_id" : spokespersons.company_id,
                        "company_name" : spokespersons.company_name,
                        "suggested_by" : spokespersons.suggested_by,                        
                        "created_on" : spokespersons.created_on,
                        "created_by" : spokespersons.created_by
                    }

                    spokespersonslist.push(pullData);
                    if(data.length === index + 1){
                        resolve(spokespersonslist)
                    }
                })   
                msg = 'sucessfully found spokespersons Data'; 
            } else {
                msg = 'Not found spokespersons Data'; 
                resolve(spokespersonslist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getspokespersonsAll]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, spokespersonslist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getUniquespokespersons = async function (req, res, next) {

    //console.log(((req.params.id); exist;       
    var msg = ''; 
    const getUniquespokespersons = new Promise((resolve, reject) => {
        dataprocessService.getUniquespokespersons(req.params.id)
        .then(data => {

           //console.log((("length : "+data.length); exist; 

            let spokespersonslist = []

            if(data.length > 0){
                data && data.length && data.forEach(async (spokespersons, index) => {
                    const pullData = {
                        "id" : spokespersons.id, 
                        "spokesperson_name" : spokespersons.spokesperson_name,
                        "designation" : spokespersons.designation,
                        "member_for_platform" : spokespersons.member_for_platform,
                        "company_id" : spokespersons.company_id,
                        "company_name" : spokespersons.company_name,
                        "suggested_by" : spokespersons.suggested_by,                        
                        "created_on" : spokespersons.created_on,
                        "created_by" : spokespersons.created_by
                    }
                    spokespersonslist.push(pullData);
                    if(data.length === index + 1){
                        resolve(spokespersonslist)
                    }
                })    

                msg = 'sucessfully found spokespersons Data'; 

            } else {
                msg = 'Not found spokespersons Data'; 
              resolve(spokespersonslist)
            }    
            
        })
        .catch(next);
       
    });

    //console.log(((JSON.stringify(getUniquespokespersons)); exist;

    Promise.all([getUniquespokespersons]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, spokespersonslist: values[0] });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.addspokespersons = async function (req, res, next) {
    
    const addspokespersons = new Promise((resolve, reject) => {
        //req.body.addspokespersons1.map(async (e, index) => {             

        var member_for_platform = req.body.member_for_platform;
        if(member_for_platform == '' || typeof member_for_platform == 'undefined' ){ member_for_platform = "0"; }

        var company_id = req.body.company_id;
        if(company_id == '' || typeof company_id == 'undefined' ){ company_id = "0"; }

        var company_name = req.body.company_name;
        if(company_name == '' || typeof company_name == 'undefined' ){ company_name = "0"; }

        var suggested_by = req.body.suggested_by;
        if(suggested_by == '' || typeof suggested_by == 'undefined' ){ suggested_by = "0"; }
        
            dataprocessService.addspokespersons({               
                spokesperson_name : req.body.spokesperson_name,          
                designation : req.body.designation,     
                member_for_platform : member_for_platform,
                company_id : company_id,
                company_name : company_name,
                suggested_by : suggested_by,         
            },req.body.action,req.body.id)
        //})
        
        resolve('sucessfully added spokespersons')
    });
    
    Promise.all([addspokespersons]).then((values) => {
        //console.log((('values 111', values)
        res.json({ message: 'spokespersons sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}


// theme keyword topic 


// Get all theme , keyword , topic 
exports.getthemeAll = async function (req, res, next) {
    
    var msg = ''; 
    const getthemeAll = new Promise((resolve, reject) => {
        dataprocessService.getthemeAll()
        .then(data => {            
            
            let themelist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (theme, index) => {

                    const pullData = {
                        "id" : theme.id, 
                        "client_id" : theme.client_id,
                        "theme_name" : theme.theme_name,                                  
                        "created_on" : theme.created_on,
                        "created_by" : theme.created_by
                    }

                    themelist.push(pullData);
                    if(data.length === index + 1){
                        resolve(themelist)
                    }
                })   
                msg = 'sucessfully found theme Data'; 
            } else {
                msg = 'Not found theme Data'; 
                resolve(themelist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getthemeAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, themelist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getkeywordAll = async function (req, res, next) {
    
    var msg = ''; 
    const getkeywordAll = new Promise((resolve, reject) => {
        dataprocessService.getkeywordAll()
        .then(data => {            
            
            let keywordlist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (keyword, index) => {

                    const pullData = {
                        "id" : keyword.id, 
                        "theme_id" : keyword.keyword_id,
                        "keyword" : keyword.keyword,                                  
                        "created_on" : keyword.created_on,
                        "created_by" : keyword.created_by
                    }

                    keywordlist.push(pullData);
                    if(data.length === index + 1){
                        resolve(keywordlist)
                    }
                })   
                msg = 'sucessfully found keyword Data'; 
            } else {
                msg = 'Not found keyword Data'; 
                resolve(keywordlist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getkeywordAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, keywordlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.gettopicAll = async function (req, res, next) {
    
    var msg = ''; 
    const gettopicAll = new Promise((resolve, reject) => {
        dataprocessService.gettopicAll()
        .then(data => {            
            
            let topiclist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (topic, index) => {

                    const pullData = {
                        "id" : topic.id, 
                        "keyword_id" : topic.keyword_id,
                        "topic" : topic.topic,                                  
                        "created_on" : topic.created_on,
                        "created_by" : topic.created_by
                    }

                    topiclist.push(pullData);
                    if(data.length === index + 1){
                        resolve(topiclist)
                    }
                })   
                msg = 'sucessfully found topic Data'; 
            } else {
                msg = 'Not found topic Data'; 
                resolve(topiclist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([gettopicAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, topiclist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}


// Get all client wise theme
exports.getclientthemeAll = async function (req, res, next) {
    
    var msg = ''; 
    const getthemeAll = new Promise((resolve, reject) => {
        dataprocessService.getclientthemeAll(req.params.client_id)
        .then(data => {            
            
            let themelist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (theme, index) => {

                    const pullData = {
                        "id" : theme.id, 
                        "client_id" : theme.client_id,
                        "theme_name" : theme.theme_name,                                  
                        "created_on" : theme.created_on,
                        "created_by" : theme.created_by
                    }

                    themelist.push(pullData);
                    if(data.length === index + 1){
                        resolve(themelist)
                    }
                })   
                msg = 'sucessfully found theme Data'; 
            } else {
                msg = 'Not found theme Data'; 
                resolve(themelist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getthemeAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, themelist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

// Get all theme wise keyword
exports.getthemekeywordAll = async function (req, res, next) {
    
    var msg = ''; 
    const getkeywordAll = new Promise((resolve, reject) => {
        dataprocessService.getthemekeywordAll(req.params.theme_id)
        .then(data => {            
            
            let keywordlist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (keyword, index) => {

                    const pullData = {
                        "id" : keyword.id, 
                        "theme_id" : keyword.theme_id,
                        "keyword" : keyword.keyword,                                  
                        "created_on" : keyword.created_on,
                        "created_by" : keyword.created_by
                    }

                    keywordlist.push(pullData);
                    if(data.length === index + 1){
                        resolve(keywordlist)
                    }
                })   
                msg = 'sucessfully found keyword Data'; 
            } else {
                msg = 'Not found keyword Data'; 
                resolve(keywordlist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getkeywordAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, keywordlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

// Get all keyword wise topic
exports.getkeywordtopicAll = async function (req, res, next) {
    
    var msg = ''; 
    const gettopicAll = new Promise((resolve, reject) => {
        dataprocessService.getkeywordtopicAll(req.params.keyword_id)
        .then(data => {            
            
            let topiclist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (topic, index) => {

                    const pullData = {
                        "id" : topic.id, 
                        "keyword_id" : topic.keyword_id,
                        "topic" : topic.topic,                                  
                        "created_on" : topic.created_on,
                        "created_by" : topic.created_by
                    }

                    topiclist.push(pullData);
                    if(data.length === index + 1){
                        resolve(topiclist)
                    }
                })   
                msg = 'sucessfully found topic Data'; 
            } else {
                msg = 'Not found topic Data'; 
                resolve(topiclist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([gettopicAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, topiclist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}


// Get single theme 
exports.getsingleclientthemeAll = async function (req, res, next) {
    
    var msg = ''; 
    const getthemeAll = new Promise((resolve, reject) => {
        dataprocessService.getsingleclientthemeAll(req.params.id)
        .then(data => {            
            
            let themelist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (theme, index) => {

                    const pullData = {
                        "id" : theme.id, 
                        "client_id" : theme.client_id,
                        "theme_name" : theme.theme_name,                                  
                        "created_on" : theme.created_on,
                        "created_by" : theme.created_by
                    }

                    themelist.push(pullData);
                    if(data.length === index + 1){
                        resolve(themelist)
                    }
                })   
                msg = 'sucessfully found theme Data'; 
            } else {
                msg = 'Not found theme Data'; 
                resolve(themelist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getthemeAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, themelist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

// Get single keyword 
exports.getsinglethemekeywordAll = async function (req, res, next) {
    
    var msg = ''; 
    const getkeywordAll = new Promise((resolve, reject) => {
        dataprocessService.getsinglethemekeywordAll(req.params.id)
        .then(data => {            
            
            let keywordlist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (keyword, index) => {

                    const pullData = {
                        "id" : keyword.id, 
                        "theme_id" : keyword.theme_id,
                        "keyword" : keyword.keyword,                                  
                        "created_on" : keyword.created_on,
                        "created_by" : keyword.created_by
                    }

                    keywordlist.push(pullData);
                    if(data.length === index + 1){
                        resolve(keywordlist)
                    }
                })   
                msg = 'sucessfully found keyword Data'; 
            } else {
                msg = 'Not found keyword Data'; 
                resolve(keywordlist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getkeywordAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, keywordlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

// get single topic
exports.getsinglekeywordtopicAll = async function (req, res, next) {
    
    var msg = ''; 
    const gettopicAll = new Promise((resolve, reject) => {
        dataprocessService.getsinglekeywordtopicAll(req.params.id)
        .then(data => {            
            
            let topiclist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (topic, index) => {

                    const pullData = {
                        "id" : topic.id, 
                        "keyword_id" : topic.keyword_id,
                        "topic" : topic.topic,                                  
                        "created_on" : topic.created_on,
                        "created_by" : topic.created_by
                    }

                    topiclist.push(pullData);
                    if(data.length === index + 1){
                        resolve(topiclist)
                    }
                })   
                msg = 'sucessfully found topic Data'; 
            } else {
                msg = 'Not found topic Data'; 
                resolve(topiclist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([gettopicAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, topiclist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

//add keyword 
exports.addkeywords = async function (req, res, next) {
    
    const addkeywords = new Promise((resolve, reject) => {
        //req.body.addkeywords1.map(async (e, index) => {             

        var theme_id = req.body.theme_id;
        if(theme_id == '' || typeof theme_id == 'undefined' ){ theme_id = "0"; }        
        
        //console.log((' body : ', req.body); 
        
        dataprocessService.addkeywords({               
            theme_id : theme_id,          
            keyword : req.body.keyword,        
        },req.body.action,req.body.id)
        //})
        resolve('sucessfully added keywords')
    });
    
    Promise.all([addkeywords]).then((values) => {
        //console.log(('values 111', values)
        res.json({ message: 'keywords sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}

//add theme 
exports.addtheme = async function (req, res, next) {
    
    const addtheme = new Promise((resolve, reject) => {
        //req.body.addtheme1.map(async (e, index) => {             

        var client_id = req.body.client_id;
        if(client_id == '' || typeof client_id == 'undefined' ){ client_id = "0"; }        
        
            dataprocessService.addtheme({               
                client_id : client_id,          
                theme_name : req.body.theme_name
            },req.body.action,req.body.id)
        //})
        resolve('sucessfully added theme')
    });
    
    Promise.all([addtheme]).then((values) => {
        //console.log(('values 111', values)
        res.json({ message: 'theme sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}

//add theme 
exports.addtopic = async function (req, res, next) {
    
    const addtopic = new Promise((resolve, reject) => {
        //req.body.addtopic1.map(async (e, index) => {             

        var keyword_id = req.body.keyword_id;
        if(keyword_id == '' || typeof keyword_id == 'undefined' ){ keyword_id = "0"; }        
        
            dataprocessService.addtopic({               
                keyword_id : keyword_id,          
                topic :  req.body.topic    
            },req.body.action,req.body.id)
        //})
        resolve('sucessfully added topic')
    });
    
    Promise.all([addtopic]).then((values) => {
        //console.log(('values 111', values)
        res.json({ message: 'topic sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}


// Get all client wise theme
exports.getclienttktAll = async function (req, res, next) {
    
    var msg = ''; 
    const getthemeAll = new Promise((resolve, reject) => {
        dataprocessService.getclienttktAll(req.params.client_id)
        .then(data => {            
            
            let themelist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (theme, index) => {

                    // const pullData = {
                    //     "id" : theme.id, 
                    //     "client_id" : theme.client_id,
                    //     "theme_name" : theme.theme_name,                                  
                    //     "created_on" : theme.created_on,
                    //     "created_by" : theme.created_by
                    // }

                     themelist.push(theme);
                    if(data.length === index + 1){
                        resolve(themelist)
                    }
                })   
                msg = 'sucessfully found client related Data'; 
            } else {
                msg = 'Not found client related Data'; 
                resolve(themelist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getthemeAll]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, themelist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}


// Get all client wise theme
exports.getclienttktsingle = async function (req, res, next) {
    
    var msg = ''; 
    const getthemeAll = new Promise((resolve, reject) => {
        dataprocessService.getclienttktsingle(req.params.id)
        .then(data => {            
            
            let themelist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (theme, index) => {                   

                     themelist.push(theme);
                    if(data.length === index + 1){
                        resolve(themelist)
                    }
                })   
                msg = 'sucessfully found client related Data'; 
            } else {
                msg = 'Not found client related Data'; 
                resolve(themelist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getthemeAll]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, themelist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

//add theme 
exports.addthemekeywordtopicOrg = async function (req, res, next) {
    

    // theme insert process 
        // for (var key in req.body.theme) {   
        //     //alert(req.body.keyword[key].keyword);
        //     //console.log(req.body.theme[key].theme_name); 
        // }

        //console.log(req.body.keyword); 

        //console.log(req.body.topic); 

    var keyworddata = req.body.keyword;

    var topicdata = req.body.topic;    

    if(req.body.theme != ''){
                       
        for (var key in req.body.theme) {  

            //alert(req.body.keyword[key].keyword);
            var theme = req.body.theme[key].theme_name;           

            if(theme != '') { 
                //console.log((req.body.theme[key].theme_name); 
                var client_id =  req.body.client_id;
                const rwiddata = dataprocessService.addthemenew({               
                    client_id : client_id,          
                    theme_name : theme,
                    keyworddata,
                    topicdata,
                }); 

                //console.log("rwiddata : "+JSON.stringify(rwiddata)); exist;
            }
        }
    }

    /*
    const addtheme = new Promise((resolve, reject) => {
        //req.body.addtheme1.map(async (e, index) => {             

        //console.log(('body :', req.body); return 0;

        

        var client_id = req.body.client_id;
        if(client_id == '' || typeof client_id == 'undefined' ){ client_id = "0"; }        
        
            dataprocessService.addthemekeywordtopic({               
                client_id : client_id,          
                theme : req.body.theme,
                keyword : req.body.keyword,
                topic : req.body.topic
            })
        //})
        resolve('sucessfully added theme')
    });
    
    Promise.all([addtheme]).then((values) => {
        //console.log(('values 111', values)
        res.json({ message: 'theme sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })*/

}

const addKeywordAndData = async (m_themes, keywordarr) => {    
    if (keywordarr !== undefined && keywordarr?.length !== 0) {

        await dataprocessService.createMKeywords(keywordarr).then(async (keywords) => {

            return keywords
        });
    }
};

const addopicAndData = async (keywordarr) => {    

    //console.log('keywordarr ', keywordarr);

    if (keywordarr !== undefined && keywordarr?.length !== 0) {

        await dataprocessService.createMTopics(keywordarr).then(async (keywords) => {

            return keywords
        });
    }

};

//add theme 
exports.addthemekeywordtopic = async function (req, res, next) {
        
    const addtheme = new Promise((resolve, reject) => {

        if(req.body.theme != ''){
                        
            for (var key in req.body.theme) {  

                var theme = req.body.theme[key].theme_name;       

                qa_data = {               
                    client_id : req.body.client_id,          
                    theme_name : theme
                };           

                //console.log(('qa_data', qa_data)

                dataprocessService.createMTheme(qa_data).then(async (m_themes) => {
                    
                    //console.log(('m_themes : ', m_themes.id)

                    if (m_themes) {

                        var keywordarr = [];

                        for (var key in req.body.keyword) {  
            
                            //var theme_id = typeof req.body.theme[key].theme_id === 'number' ? req.body.theme[key].theme_id : 0; 
                            var theme_id = m_themes.id;  

                            var keyword = req.body.keyword[key].keyword; 

                            qa_keydata = {               
                                "theme_id" : theme_id,
                                "keyword" : keyword,      
                            };

                            keywordarr.push(qa_keydata);
                        }    

                        //console.log(('keywordarr', keywordarr)

                        //insertlenth = insertlenth + 1;
                        const result = await addKeywordAndData(m_themes, keywordarr);
                        
                        let keywordlist = []
                        
                        //for (var key in req.body.keyword) {  

                            var theme_id = m_themes.id;                              
                            await dataprocessService.getthemekeywordAll(theme_id).then(async (data) => {                                  
                                //console.log(('data : ', data)                                
                                if(data.length > 0){
                                    data && data.length && data.forEach(async (keyword, index) => {

                                        //console.log(('#### data : ', keyword) 

                                        const pullData = {
                                            "id" : keyword.id
                                        }

                                        keywordlist.push(pullData);                                        
                                    })                                       
                                } 
                            });
                        //}

                        //console.log(('keywordlist : ', keywordlist); 

                        var topicarr = [];   

                        for (var key5 in req.body.topic) {  

                            var topic = req.body.topic[key5].topic; 

                            //console.log('topic : ', topic); 

                            for (var key6 in keywordlist) {  

                                var keyId = keywordlist[key6].id; 

                                //console.log('keyId : ', keyId); 

                                qa_topic1 = {               
                                    "keyword_id" : keyId,
                                    "topic" : topic,      
                                };

                                //console.log('qa_topic1 : ', qa_topic1);

                                topicarr.push(qa_topic1);                                
                            }
                        }

                        //console.log('topicarr : ', topicarr); 

                        const result123 = await addopicAndData(topicarr);

                    }
                });
            }
        }  

        res.json({ message: 'Theme Data sucessfully updated', data: {} });
        
   });
        
    Promise.all([addtheme]).then((values) => {
        //console.log(('values 111', values)
        res.json({ message: 'Theme Data sucessfully updated', data: {} });

    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })
}


// Row Article Data functions 

exports.getarticlesrowAll = async function (req, res, next) {

    var msg = params = page = ''; 

    const getarticlesrowAll = new Promise((resolve, reject) => {     
        
        //dataprocessService.getarticlesrowAll(req.body.client_id,req.body.media_type,moment(new Date(req.body.fromDate)).format('YYYY-MM-DD'),moment(new Date(req.body.toDate)).format('YYYY-MM-DD'),page,req) 
        dataprocessService.getarticlesrowAllcustom(req.body.client_id,moment(new Date(req.body.fromDate)).format('YYYY-MM-DD'),moment(new Date(req.body.toDate)).format('YYYY-MM-DD'),page,req.body) 
        .then(data => { 
            //console.log((JSON.stringify(data)); exist;             
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
        //console.log(('values', values)
        res.json({ message: msg, articlesrowlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getUniquearticlesrow = async function (req, res, next) {

    //console.log((req.params.id); exist;       
    var msg = ''; 
    const getUniquearticlesrow = new Promise((resolve, reject) => {
        dataprocessService.getUniquearticlesrow(req.params.id)
        .then(data => {

           //console.log(("length : "+data.length); exist; 

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

    //console.log((JSON.stringify(getUniquearticlesrow)); exist;

    Promise.all([getUniquearticlesrow]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, articlesrowlist: values[0] });
    }).catch((error) => {
        //console.log('error', error)
        res.status(500).json({ error: error });
    })  

}

const addjournalistsAndData = async (id, journalistsdata) => {

    for (var key in journalistsdata) {             
        
        var journalistid = journalistsdata[key].journalistid; 
        var journalistname = journalistsdata[key].journalistname; 
        var journalisttype = journalistsdata[key].journalisttype; 
        var journalistdet = journalistsdata[key].journalistdet; 

        const qa_keydata = {               
            "q_article_id" : id,
            "journalists_id" : journalistid,   
            "journalists_type" : journalisttype,
            "journalists_name" : journalistname,
            "journalists_det" : journalistdet,   
        };  

        //console.log(("qa_keydata : "+JSON.stringify(qa_keydata));

        if (qa_keydata !== undefined && qa_keydata?.length !== 0) {
    
            //console.log(("createJournalist : "+createJournalist);

            await dataprocessService.createJournalist(qa_keydata).then(async (data) => {
    
                //return spokepeople
            });
        }
    }    

    
};

const addSpokesPersonAndData = async (id, entityid , spokespersondata) => {   
    for (var key in spokespersondata) {             
        
        //var spokespersonid = spokespersondata[key].spokespersonid; 
        var spokespersonname = spokespersondata[key].spokespersonname; 
        //var spokedesignation = spokespersondata[key].spokedesignation; 
        //var spokevisibility = spokespersondata[key].spokevisibility; 
        var spokecommenton = spokespersondata[key].spokecommenton;

        const qa_keydata = {       
            "spokesperson_name" : spokespersonname,   
            "spokesperson_name_merge": spokespersonname.replace(/[^a-zA-Z0-9]/g, '_').trim(),
            "description" : spokecommenton,
            "company_id" : entityid  
        };  

        //console.log(("qa_keydata : "+JSON.stringify(qa_keydata));

        if (qa_keydata !== undefined && qa_keydata?.length !== 0) {
    
            await dataprocessService.createQaSpokesPerson(qa_keydata).then(async (data) => {     
                //return spokepeople
            });

            //console.log(("createQaSpokesPerson : ");
        }
    }    
};


const addProductAndData = async (id, entityid , products) => {   

    for (var key in products) {             
        
        var productname = products[key].productname; 
        var productcategory = products[key].productcategory;

        const qa_keydata = {       
            "product_name": productname,
            "product_name_merge": productname.replace(/[^a-zA-Z0-9]/g, '_').trim(),
            "product_category": productcategory,            
            "company_id" : entityid  
        };  

        //console.log("createQaClientProduct : "+JSON.stringify(qa_keydata));

        if (qa_keydata !== undefined && qa_keydata?.length !== 0) {
    
            await dataprocessService.createQaClientProduct(qa_keydata).then(async (data) => {
    
                //return spokepeople
            });

            //console.log(("createQaClientProduct");
        }
    }    
}

exports.addarticlesrow = async function (req, res, next) {
    
    const addarticlesrow = new Promise((resolve, reject) => {
        //req.body.addarticlesrow1.map(async (e, index) => {             

        /* Validation start */
        var id = req.body.id;
        if(id == '' || typeof id == 'undefined' ){ 
            reject('Missing ID. Please check'); 
        }

        var client_id = req.body.client_id;
        if(client_id == '' || typeof client_id == 'undefined' ){ 
            reject('Missing client_id. Please check'); 
        }

        var entity_id = req.body.entity_id;
        if(entity_id == '' || typeof entity_id == 'undefined' ){ 
            reject('Missing entity id. Please check'); 
        }

        var articletype = req.body.articletype;
        if(articletype == '' || typeof articletype == 'undefined' ){ 
            reject('Missing Article Type. Please check'); 
        }

        var articletage = req.body.articletage;
        if(articletage == '' || typeof articletage == 'undefined' ){ 
            reject('Missing Article Tags. Please check');             
         }

        var prominence_id = req.body.prominence_id;

        var prominence = req.body.prominence;
        if(prominence == '' || typeof prominence == 'undefined' ){ 
            reject('Missing Prominence. Please check');                
         }

        var notrelavant = req.body.notrelavant;
        if(notrelavant == '' || typeof notrelavant == 'undefined' ){ 
            reject('Missing Not Relavant Articles. Please check');            
        }

        var articlesummary = req.body.articlesummary;
        if(articlesummary == '' || typeof articlesummary == 'undefined' ){ 
            reject('Missing Article Summary. Please check');
        }

        var positiveCCM = req.body.positiveCCM;
        if(positiveCCM == '' || typeof positiveCCM == 'undefined' ){ 
            reject('Missing Positive CCM. Please check');
        }

        var neutralCCM = req.body.neutralCCM;
        if(neutralCCM == '' || typeof neutralCCM == 'undefined' ){ 
            reject('Missing Neutral CCM. Please check');
        }

        var negativeCCM = req.body.negativeCCM;
        if(negativeCCM == '' || typeof negativeCCM == 'undefined' ){ 
            reject('Missing Negative CCM. Please check');
        }

        var keywordcategory = req.body.keywordcategory;
        if(keywordcategory == '' || typeof keywordcategory == 'undefined' ){ 

            reject('Missing Keyword Category. Please check');
        }

        var productcategory = req.body.productcategory;
        if(productcategory == '' || typeof productcategory == 'undefined' ){ 

            reject('Missing Product Category. Please check');
        }

        var recommendationarticle = req.body.recommendationarticle;
        if(recommendationarticle == '' || typeof recommendationarticle == 'undefined' ){ 

            reject('Missing Recommendation Article. Please check');
        }
        
        var theme_id = req.body.theme_id;

        var theme = req.body.theme;
        if(theme == '' || typeof theme == 'undefined' ){ 
            reject('Missing Theme. Please check');
        }

        var newproductlunch = req.body.newproductlunch;
        if(newproductlunch == '' || typeof newproductlunch == 'undefined' ){ 
            reject('Missing New Product Lunch. Please check');
        }

        var financialplanner = req.body.financialplanner;
        if(financialplanner == '' || typeof financialplanner == 'undefined' ){ 
            reject('Missing Financial Planner. Please check');
        }

        var newstype = req.body.newstype;
        if(newstype == '' || typeof newstype == 'undefined' ){ 
            reject('Missing News. Please check');
        }

        var journalist = req.body.journalist;
        if(journalist == '' || typeof journalist == 'undefined' ){ 
            reject('Missing Journalist Data. Please check');
        }

        // var journalisttype = req.body.journalisttype;
        // if(journalisttype == '' || typeof journalisttype == 'undefined' ){ 
        //     reject('Missing Journalist Type. Please check');
        // }

        // var journalistdet = req.body.journalistdet;
        // if(journalistdet == '' || typeof journalistdet == 'undefined' ){ 
        //     reject('Missing Journalist Details. Please check');
        // }

        var spokespersons = req.body.spokespersons;
        if(spokespersons == '' || typeof spokespersons == 'undefined' ){ 
            reject('Missing Spokesperson. Please check');
        }

        /*var spokedesignation = req.body.spokedesignation;
        if(spokedesignation == '' || typeof spokedesignation == 'undefined' ){ 
            reject('Missing Spokesperson Designation. Please check');
        }

        var spokeprofile = req.body.spokeprofile;
        if(spokeprofile == '' || typeof spokeprofile == 'undefined' ){ 
            reject('Missing Spokesperson Profile. Please check');
        }

        var spokevisibility  = req.body.spokevisibility;
        if(spokevisibility == '' || typeof spokevisibility == 'undefined' ){ 
            reject('Missing Spokesperson Visibility. Please check');
        }

        var spokecommenton  = req.body.spokecommenton;
        if(spokecommenton == '' || typeof spokecommenton == 'undefined' ){ 
            reject('Missing Comments on. Please check');
        }*/


        var products  = req.body.products;
        if(products == '' || typeof products == 'undefined' ){ 
            reject('Missing Product. Please check');
        }

        /*var productname  = req.body.productname;
        if(productname == '' || typeof productname == 'undefined' ){ 
            reject('Missing Product Name. Please check');
        }

        var productcategory  = req.body.productcategory;
        if(productcategory == '' || typeof productcategory == 'undefined' ){ 
            reject('Missing Product Category. Please check');
        }*/

        var visibilityheadline  = req.body.visibilityheadline;
        if(visibilityheadline == '' || typeof visibilityheadline == 'undefined' ){ 
            reject('Missing Visibility Headline. Please check');
        }

        var visibilityphoto  = req.body.visibilityphoto;
        if(visibilityphoto == '' || typeof visibilityphoto == 'undefined' ){ 
            reject('Missing Visibility Photo. Please check');
        }

        var visibilityhitmiss  = req.body.visibilityhitmiss;
        if(visibilityhitmiss == '' || typeof visibilityhitmiss == 'undefined' ){ 
            reject('Missing Visibility Hit Miss. Please check');
        }

        var visibilitypushpull  = req.body.visibilitypushpull;
        if(visibilitypushpull == '' || typeof visibilitypushpull == 'undefined' ){ 
            reject('Missing Visibility Push Pull. Please check');
        }
        

        var keymessage  = req.body.keymessage;
        if(keymessage == '' || typeof keymessage == 'undefined' ){ 
            reject('Missing Key Message. Please check');
        }    

        var keymessage  = req.body.keymessage;
        if(keymessage == '' || typeof keymessage == 'undefined' ){ 
            reject('Missing Key Message. Please check');
        }  
        
        var word_count  = req.body.word_count;
        if(word_count == '' || typeof word_count == 'undefined' ){ 
            reject('Missing Key word count. Please check');
        }  

        var reach  = req.body.reach;
        if(reach == '' || typeof reach == 'undefined' ){ 
            reject('Missing Key reach. Please check');
        }  

        var index  = req.body.index;
        if(index == '' || typeof index == 'undefined' ){ 
            reject('Missing Key index. Please check');
        }  

        var topic  = req.body.topic;
        if(topic == '' || typeof topic == 'undefined' ){ 
            reject('Missing Key topic. Please check');
        }  

        var mav  = req.body.mav;
        if(mav == '' || typeof mav == 'undefined' ){ 
            reject('Missing Key MAV. Please check');
        }  

        var ccm  = req.body.ccm;
        if(ccm == '' || typeof ccm == 'undefined' ){ 
            reject('Missing Key CCM. Please check');
        }  

        var vertical  = req.body.vertical;
        if(vertical == '' || typeof vertical == 'undefined' ){ 
            reject('Missing Key vertical. Please check');
        }  

        var visibility_score  = req.body.visibility_score;
        if(visibility_score == '' || typeof visibility_score == 'undefined' ){ 
            reject('Missing Key visibility_score. Please check');
        }       
        
        /* validation end  */
        
        var totalCCM = parseFloat(req.body.positiveCCM) + parseFloat(req.body.neutralCCM) + parseFloat(req.body.positiveCCM);

        //console.log("totalCCM : "+totalCCM);

        qa_data = {
            id: req.body.id,
            client_id: req.body.client_id,
            entity_id: req.body.entity_id,
            article_type: req.body.articletype,
            article_tag: req.body.articletage,
            prominent_id: req.body.prominence_id,
            prominent: req.body.prominence,
            not_relavant: req.body.notrelavant,
            article_summary: req.body.articlesummary,
            positive_ccms: req.body.positiveCCM,
            neutral_ccms: req.body.neutralCCM,
            negative_ccms: req.body.negativeCCM,
            total_ccms: req.body.totalCCM,
            priority: req.body.priority,
            keyword_category: req.body.keywordcategory,
            keyword_category1: req.body.productcategory,
            theme_id: req.body.theme_id,
            theme: req.body.theme,
            new_product_launch: req.body.newproductlunch,
            financial_planner: req.body.financialplanner,
            news_type: req.body.newstype,
            headline_mention: req.body.visibilityheadline,
            photo_presence: req.body.visibilityphoto,
            hit_miss: req.body.visibilityhitmiss,
            push_pull: req.body.visibilitypushpull,
            negative_ccms: req.body.keymessage,
            word_count: req.body.word_count,
            reach: req.body.reach,
            index: req.body.index,
            topic: req.body.topic,
            mav: req.body.mav,
            ccm: req.body.ccm,
            vertical: req.body.vertical,
            visibility_score: req.body.visibility_score,
            press_release: req.body.press_release,
            quality_check: 1,
            updatedAt:Date.now(),
            last_modified_on:moment().format("YYYY-MM-DD h:mm:ss")
        }       

        //console.log(JSON.stringify(qa_data));

        dataprocessService.createQaData(qa_data).then(async (q_articles) => {

            if (q_articles) {                
                
                const result = await addjournalistsAndData( req.body.id, req.body.journalist);
               
                //console.log(("addjournalistsAndData : "+JSON.stringify(result));

                const resultsp = await addSpokesPersonAndData( req.body.id,req.body.entity_id, req.body.spokespersons);
                
                //console.log(("addSpokesPersonAndData : "+JSON.stringify(resultsp));

                for (var key in req.body.spokespersons) {    

                    var spokespersonname = req.body.spokespersons[key].spokespersonname;
                    const qa_keydata = {                                  
                        "spokesperson_name" : spokespersonname,   
                        "spokesperson_name_merge": spokespersonname.replace(/[^a-zA-Z0-9]/g, '_').trim(),
                        "company_id" : req.body.entity_id  
                    };  
                    
                    //console.log(("qa_keydata : "+JSON.stringify(qa_keydata));

                    await dataprocessService.findQaSpokesPerson(qa_keydata).then(async (spokepeople) => {
                        // const [spokepeople, created] = sps;
                        //console.log(("spokepeople : "+JSON.stringify(spokepeople));

                        if (spokepeople) {
                            const spersondata = {
                                spokesperson_id: spokepeople.id,
                                q_article_id: req.body.id,
                                spokesperson_profiling: req.body.spokespersons[key].spokeprofile,
                                spokesperson_visibility: req.body.spokespersons[key].spokevisibility,
                                spokesperson_Comments: req.body.spokespersons[key].spokecommenton,
                            };                         

                            const result = await dataprocessService.createQaDataSpokesPerson(spersondata);                          

                            //console.log(("createQaDataSpokesPerson : "+JSON.stringify(result));
                            //return spokepeople
                        }
                    });
                }                    

                const resultsprd = await addProductAndData(req.body.id,req.body.entity_id, req.body.products);

                //console.log(("addProductAndData : "+JSON.stringify(resultsprd));

                for (var key in req.body.products) {             
        
                    var productname = req.body.products[key].productname; 
                    var productcategory = req.body.products[key].productcategory;
            
                    const qa_keydata = {       
                        "product_name": productname,
                        "product_name_merge": productname.replace(/[^a-zA-Z0-9]/g, '_').trim(),
                        "company_id" : req.body.entity_id  
                    };  
            
                    //console.log(("qa_keydata : "+JSON.stringify(qa_keydata));

                    await dataprocessService.findProductOne(qa_keydata).then(async (products) => {
                        if(products){

                            const productdata = {
                                product_id: products.id,
                                q_article_id: req.body.id
                            }

                            //console.log(("productdata : "+productdata);

                            const res = await dataprocessService.createQaDataProduct(productdata);

                            //console.log(("createQaDataProduct : "+JSON.stringify(res));

                            //return productdata;
                        }
                    })
                }        
                
                const uptedata = {
                    quality_check: '1',
                    updatedAt:Date.now(),
                    last_modified_on:moment().format("YYYY-MM-DD h:mm:ss")
                }

                //console.log("uptedata : "+JSON.stringify(uptedata));

                const res1 = await dataprocessService.updatearticleStatus(uptedata,req.body.id);

                
            }
        });

        resolve('sucessfully added articles')
    });
    
    Promise.all([addarticlesrow]).then((values) => {
        //console.log(('values 111', values)
        res.json({ message: 'articles sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}

exports.getqualifyRuleslist = async function (req, res, next) {  
    
    var msg = ''; 
    const getqualifyAll = new Promise((resolve, reject) => {
        dataprocessService.getQualifyRulesAll()
        .then(data => {            
            
            let qualifylist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (qualifylst, index) => {
                    const pullData = {
                        "id" : qualifylst.id, 
                        "rule" : qualifylst.rule
                    }

                    //console.log((pullData);

                    qualifylist.push(pullData);
                    if(data.length === index + 1){
                        resolve(qualifylist)
                    }
                })                   
            } else {                
                resolve(qualifylist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getqualifyAll]).then((values) => {
        //return values[0];
        res.json(values[0]);
    }).catch((error) => {
        return error;
    })
}

exports.cronqualifyarticle = async function (req, res, next) {    

    var msg = params = page = ''; 

      

    const getarticlesrowAll = new Promise((resolve, reject) => {     
                
        let articleEdition = [];
        //cronprocessService.getarticlesrowAll(req.body.client_id,req.body.media_type,moment(new Date(req.body.fromDate)).format('YYYY-MM-DD'),moment(new Date(req.body.toDate)).format('YYYY-MM-DD'),page,req) 
        dataprocessService.getarticlesrowAllcustomcron() 
        .then(data => { 
            //console.log((JSON.stringify(data)); exist;             
            let articlesrowlist = [];
            let ccmcounterP = 0;
            let ccmcounterO = 0;

            let articleCnt  = data.length;
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
                        "theme" : articlesrow.theme,
                        "quality_check" : articlesrow.quality_check,
                        "not_relavant" : articlesrow.not_relavant,
                        "recommendation_article" : articlesrow.recommendation_article,
                        "financial_planner" : articlesrow.financial_planner,
                        "new_product_launch" : articlesrow.new_product_launch,
                        "news_type" : articlesrow.news_type,
                        "article_tag" : articlesrow.article_tag,
                        "dbphoto" : articlesrow.dbphoto,                        
                        "spokesPerson" : "",
                        "products" : ""  ,
                        "jurnalist" : ""                     
                    }                                       
                    
                    //console.log(("edition : "+articlesrow.edition);

                    articleEdition = articleEdition+" "+articlesrow.edition;

                    //console.log(("articleEdition : "+articleEdition);

                    await dataprocessService.findArticleQaSpokesPerson(articlesrow.id).then(async (spokedata) => {
                       
                        const pullDataint1 = { "spokesPerson" : spokedata } 
                        //pullData.push(pullDataint1);

                        pullData.spokesPerson  = spokedata;
                    })

                    await dataprocessService.findArticleProducts(articlesrow.id).then(async (productdata) => {
                      
                        const pullDataint2 = { "products" : productdata } 
                        //pullData.push(pullDataint2);

                        pullData.products  = productdata;
                    })

                    await dataprocessService.findArticlejurnalist(articlesrow.id).then(async (jurnalistdata) => {
                      
                        const pullDataint3 = { "jurnalist" : jurnalistdata }

                        //pullData.push(pullDataint3);
                        pullData.jurnalist  = jurnalistdata;
                    })

                    articlesrowlist.push(pullData);
                    
                    if(data.length === index + 1){
                        resolve(articlesrowlist)
                    }  

                    if(articlesrow.media_type_id == 2){                    
                        ccmcounterP = parseFloat(ccmcounterP) + parseFloat(articlesrow.ccm);
                    } else if(articlesrow.media_type_id == 1){                    
                        ccmcounterO = parseFloat(ccmcounterO) + parseFloat(articlesrow.ccm);
                    }                    

                    const qualifyRuleList = await checkqualifyarticles(pullData,ccmcounterP,ccmcounterO);

                    // Update article status after QC check
                        const uptedata = {
                            quality_check: '2',
                            updatedAt:Date.now(),
                            last_modified_on:moment().format("YYYY-MM-DD h:mm:ss")
                        }

                        //console.log(("uptedata : "+JSON.stringify(uptedata));
                        //console.log(("articeldata ID :: "+articlesrow.id); 

                        await dataprocessService.updatearticleStatus(uptedata,articlesrow.id);
                    // End

                    //console.log(("qualifyRuleList : "+qualifyRuleList);
                })   
                msg = articleCnt+' articles checked for Qualify Rules'; 
            } else {
                msg = 'Not found articles row Data'; 
                resolve(articlesrowlist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getarticlesrowAll]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, data: "" });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })   

}

const checkqualifyarticles = async (articeldata,ccmcounterP,ccmcounterO) => {   

    //start
        const articletypes = { "article_type" : "" };
        await dataprocessService.findqasettings('article_type').then(data => {                         
            if(data.length > 0){
                data && data.length && data.forEach(async (publictn, index) => {
                    
                    articletypes.article_type  = publictn.values_data;
                })                               
            }  
            
        })
        const types = JSON.parse(articletypes['article_type']);   
        //console.log((types);
    // End 

   
    // start
        const spokespersons_profile = { "spokespersons_profile" : "" };
        await dataprocessService.findqasettings('spokespersons_profile').then(data => {                         
            if(data.length > 0){
                data && data.length && data.forEach(async (publictn, index) => {
                    
                    spokespersons_profile.spokespersons_profile  = publictn.values_data;
                })                               
            }  
            
        })
        const spokespersonsprofile = JSON.parse(spokespersons_profile['spokespersons_profile']);   
        //console.log((spokespersonsprofile); 
    // End 


    // start
        let themeData = [];
        await dataprocessService.getthemeAll().then(data => {                         
            if(data.length > 0){
                data && data.length && data.forEach(async (themesdet, index) => {
                    
                    const pullDataint3 = { "themename" : themesdet.theme_name }
                    themeData.push(pullDataint3);
                })                               
            }              
        })

        //console.log(("themeData : "+themeData); 

        //console.log((JSON.stringify(themeData)); exist;        
    //end    

    // start

        const rule14Rowdata = { "rule14" : "" };

        await dataprocessService.findqasettings('rule_14').then(data => {                         
            if(data.length > 0){
                data && data.length && data.forEach(async (publictn, index) => {
                    
                    rule14Rowdata.rule14  = publictn.values_data;
                })                               
            }  
            
        })
        
        const rule14DetData = JSON.parse(rule14Rowdata['rule14']);   

        //console.log((rule14DetData); 
    // End 

    // start 
        let keywordlist = [];
        let keywordthemelist = [];

        await dataprocessService.getkeywordAll().then(data => {                         
            if(data.length > 0){
                data && data.length && data.forEach(async (publictn, index) => {

                    const pullDataint3 = { "theme_id" : publictn.theme_id,"keyword" : publictn.keyword }

                    //console.log(("pullDataint3 :: "+pullDataint3); 

                    keywordthemelist.push(pullDataint3);

                    keywordlist.push(publictn.keyword);
                })                               
            }          
        })    
        //const keywordList = JSON.parse(keywordDetdata['keywords']);   
        //console.log((JSON.stringify(keywordthemelist)); exist;
    // End 

    // start 
        /*let juralistlist = [];

        await dataprocessService.findjurnalist().then(data => {                         
            if(data.length > 0){
                data && data.length && data.forEach(async (publictn, index) => {                
                    juralistlist.push(publictn.journalist_name);
                })                               
            }          
        })    
        //const keywordList = JSON.parse(keywordDetdata['keywords']);   
        //console.log(JSON.stringify(juralistlist)); exist;
    // End*/

        const getqualifyAll = new Promise((resolve, reject) => {
        dataprocessService.getQualifyRulesAll()
        .then(data => {            
            
            let qualifylist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (qualifylst, index) => {
                    
                    const pullData = {
                        "id" : qualifylst.id, 
                        "rule" : qualifylst.rule
                    }                    

                    //console.log(("id :: "+qualifylst.id);    

                    switch (qualifylst.id) {
                        case 1:        
                            // Article type need to be filled any new article type need to be part of master    
                            //console.log((qualifylst.rule)
                            const searcharticletype = articeldata.article_type;
                            const indexOfThree = types.indexOf(searcharticletype);
                            //console.log((indexOfThree)

                             if(indexOfThree <= 0){

                                //console.log(("Not found"+indexOfThree);
                                const bid = articeldata.id;  
                                const article_id = articeldata.article_id;    
                                const rule_id = qualifylst.id;
                                
                                const qa_keydata = {       
                                    "bid": bid,  
                                    "article_id": article_id,                        
                                    "rule_id": rule_id
                                }; 
                                //console.log(("qa_keydata : "+qa_keydata);

                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
    
                                    //return spokepeople
                                });
                             } else {

                                let result = searcharticletype.toLowerCase();
                                const indexOfThree = types.indexOf(result);

                                if(indexOfThree <= 0){

                                    //console.log(("Not found"+indexOfThree);
                                    const bid = articeldata.id;  
                                    const article_id = articeldata.article_id;    
                                    const rule_id = qualifylst.id;
                                    
                                    const qa_keydata = {       
                                        "bid": bid,  
                                        "article_id": article_id,                        
                                        "rule_id": rule_id
                                    }; 
                                    //console.log(("qa_keydata : "+qa_keydata);

                                    await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
        
                                        //return spokepeople
                                    });
                                }

                            }
                                
                          break;

                        case 2:                            
                            //Check name of the Column is properly
                            // On Hold as requested by shringesh 
                        break;  

                        case 3:   
                        
                            // Article summary and Keyword summary need to be filled    
                            //console.log((qualifylst.rule)
                            const article_summary = articeldata.article_summary;   
                            
                            const keyword_summary = articeldata.keyword_summary;      
                            //console.log((indexOfThree)

                             if(article_summary == '' || keyword_summary == ''){

                                //console.log(("Not found"+indexOfThree);
                                /*const bid = articeldata.id;  
                                const article_id = articeldata.article_id;    
                                const rule_id = qualifylst.id;
                                
                                const qa_keydata = {       
                                    "bid": bid,  
                                    "article_id": article_id,                        
                                    "rule_id": rule_id
                                }; 
                                //console.log(("qa_keydata : "+qa_keydata);

                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
    
                                    //return spokepeople
                                });*/
                             }       
                                
                          break;                           
                        
                        case 4:    
                            // Check KeyMessage Details                                
                            const key_messages = articeldata.key_messages; 

                             if(key_messages == ''){
                                /*
                                //console.log(("Not found"+indexOfThree);
                                const bid = articeldata.id;  
                                const article_id = articeldata.article_id;    
                                const rule_id = qualifylst.id;                                
                                const qa_keydata = {       
                                    "bid": bid,  
                                    "article_id": article_id,                        
                                    "rule_id": rule_id
                                };                                 
                                //console.log(("qa_keydata : "+qa_keydata);
                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {    
                                    //return spokepeople
                                }); 
                                */
                             }       
                                
                          break;
                      
                        case 5:                            
                             //To check no mention is given to views or opinion in Internet Analysis
                             // On Hold as requested by shringesh 
                        break;  

                        case 6:   
                            // Check Interview, Profiling & Authored are correctly assigned against the name of Spokespersons/Analysts (Compare this with Summary too)
                            //console.log((articeldata)
                            const spokesPersons = articeldata.spokesPerson; 
                            var errflg = 0;

                            if(spokesPersons.length > 0){
                                for (var key in spokesPersons) {   
                                    //alert(req.body.keyword[key].keyword);
                                    //console.log((key+" || "+spokesPersons[key].spokesperson_profiling); 

                                    const spokesperson_name1 = spokesPersons[key].spokesperson_name;

                                    const searcharticletype = spokesPersons[key].spokesperson_profiling;
                                    const indexOfThreespf = spokespersonsprofile.indexOf(searcharticletype);
                                    //console.log((indexOfThree)

                                    //if(indexOfThreespf <= 0 || spokesperson_name1 == ''){
                                    if(spokesperson_name1 == ''){    

                                        //console.log(("Not found"+indexOfThree);
                                        const bid = articeldata.id;  
                                        const article_id = articeldata.article_id;    
                                        const rule_id = qualifylst.id;
                                        
                                        const qa_keydata = {       
                                            "bid": bid,  
                                            "article_id": article_id,                        
                                            "rule_id": rule_id
                                        }; 
                                        //console.log(("qa_keydata : "+qa_keydata);

                                        await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
            
                                            //return spokepeople
                                        });

                                    } else {

                                        let result = searcharticletype.toLowerCase();
                                        const indexOfThreespf = spokespersonsprofile.indexOf(result);

                                        if(indexOfThreespf <= 0 || spokesperson_name1 == '' ){

                                            //console.log(("Not found"+indexOfThree);
                                            const bid = articeldata.id;  
                                            const article_id = articeldata.article_id;    
                                            const rule_id = qualifylst.id;
                                            
                                            const qa_keydata = {       
                                                "bid": bid,  
                                                "article_id": article_id,                        
                                                "rule_id": rule_id
                                            }; 

                                            //console.log(("qa_keydata : "+qa_keydata);

                                            await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
                
                                                //return spokepeople
                                            });
                                        }

                                    }
                                }
                            }                           

                        break;  

                        case 7:   
                        
                            const spokesPersonslist = articeldata.spokesPerson; 
                            var errflg = 0;

                            if(spokesPersonslist.length > 0){
                                for (var key in spokesPersonslist) {   
                                    //alert(req.body.keyword[key].keyword);
                                    //console.log((key+" || "+spokesPersons[key].spokesperson_profiling); 

                                    const spokesperson_name = spokesPersonslist[key].spokesperson_name;

                                    const spokesperson_Comments = spokesPersonslist[key].spokesperson_Comments;

                                    //console.log((" spokesperson_name :  "+spokesPersonslist[key].spokesperson_name); 
                                    
                                    if(spokesperson_name == '' || spokesperson_Comments == ''){

                                        const bid = articeldata.id;  
                                        const article_id = articeldata.article_id;    
                                        const rule_id = qualifylst.id;
                                        
                                        const qa_keydata = {       
                                            "bid": bid,  
                                            "article_id": article_id,                        
                                            "rule_id": rule_id
                                        }; 
                                        
                                        //console.log(("qa_keydata : "+qa_keydata);

                                        await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
            
                                            //return spokepeople
                                        });

                                    }
                                }
                            }
                            
                        break;

                        case 8:                              
                            // Interviews, Author articles cant be shared (article type), and negative (tonality) and CCM/Sq.CM will be same as article and Spokesperson name will be there
                            $media_type_id = articeldata.media_type_id;
                            
                            //const totalCCMPO = parseFloat(ccmcounterP) + parseFloat(ccmcounter0);
                            
                            const article_type = articeldata.article_type;

                            const tonality = articeldata.tonality;

                            const prominent = articeldata.prominent;

                            const ccm = articeldata.ccm;

                            const spokesPersonslist1 = articeldata.spokesPerson; 
                            
                            // //console.log("article_type : "+article_type)
                            
                            // //console.log("tonality : "+tonality)

                            // //console.log("prominent : "+prominent)
                            
                            // //console.log("ccm : "+ccm)
                            
                            // //console.log("spokesPersonslist1 : "+spokesPersonslist1)

                            var errflg = '0';

                            if(article_type =='Interview' || article_type =='interview' || article_type =='Author' || article_type =='author'){
                                if(prominent =='share' || prominent =='shared' || prominent =='industry' || prominent =='Industry'){
                                    if(tonality == 'negative'){
                                        errflg = '1';
                                    }

                                    if(ccm <= 0) {
                                        errflg = '1';
                                    }
                                }
                            } 

                            //console.log(("errflg : "+errflg)

                            if(errflg == '1'){

                                const bid = articeldata.id;  
                                const article_id = articeldata.article_id;    
                                const rule_id = qualifylst.id;
                                
                                const qa_keydata = {       
                                    "bid": bid,  
                                    "article_id": article_id,                        
                                    "rule_id": rule_id
                                }; 
                                
                                //console.log(("qa_keydata : "+qa_keydata);

                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
    
                                    //return spokepeople
                                });

                            }        

                            break;

                        case 9:             
                                //Check all CSR, Marketing & Product stories                
                                const articletheme = articeldata.theme;
                                                                
                                var errflg = 0;

                                if(themeData.length > 0){
                                    for (var key in themeData) {   
                                        //alert(req.body.keyword[key].keyword);
                                        //console.log((key+" || "+spokesPersons[key].spokesperson_profiling); 

                                        const themename = themeData[key].themename;
                                        
                                        //console.log((key+" || "+themename); 
                                        const result = articletheme.toUpperCase() === themename.toUpperCase();

                                        if(result) {
                                            errflg= 0;
                                        } else {
                                            errflg= 1;
                                        }

                                        /*//if(indexOfThreespf <= 0 || spokesperson_name1 == ''){
                                        if(spokesperson_name1 == ''){    

                                            //console.log(("Not found"+indexOfThree);
                                            const bid = articeldata.id;  
                                            const article_id = articeldata.article_id;    
                                            const rule_id = qualifylst.id;
                                            
                                            const qa_keydata = {       
                                                "bid": bid,  
                                                "article_id": article_id,                        
                                                "rule_id": rule_id
                                            }; 
                                            //console.log(("qa_keydata : "+qa_keydata);

                                            await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
                
                                                //return spokepeople
                                            });

                                        } else {

                                            let result = searcharticletype.toLowerCase();
                                            const indexOfThreespf = spokespersonsprofile.indexOf(result);

                                            if(indexOfThreespf <= 0 || spokesperson_name1 == '' ){

                                                //console.log(("Not found"+indexOfThree);
                                                const bid = articeldata.id;  
                                                const article_id = articeldata.article_id;    
                                                const rule_id = qualifylst.id;
                                                
                                                const qa_keydata = {       
                                                    "bid": bid,  
                                                    "article_id": article_id,                        
                                                    "rule_id": rule_id
                                                }; 

                                                //console.log(("qa_keydata : "+qa_keydata);

                                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
                    
                                                    //return spokepeople
                                                });
                                            }

                                        }*/
                                    }

                                    if(errflg == '1'){

                                        const bid = articeldata.id;  
                                        const article_id = articeldata.article_id;    
                                        const rule_id = qualifylst.id;
                                        
                                        const qa_keydata = {       
                                            "bid": bid,  
                                            "article_id": article_id,                        
                                            "rule_id": rule_id
                                        };                                     
                                                
                                        await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
            
                                            //return data
                                        });
        
                                    }    
                                }     
                        break;

                        case 10:                            
                                    const tonality1 = articeldata.tonality;
                                    if(tonality1 == 'Negative' || tonality1 == 'negative'){

                                        const bid = articeldata.id;  
                                        const article_id = articeldata.article_id;    
                                        const rule_id = qualifylst.id;
                                        
                                        const qa_keydata = {       
                                            "bid": bid,  
                                            "article_id": article_id,                        
                                            "rule_id": rule_id
                                        };                                     
                                                
                                        await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
            
                                            //return data
                                        });
        
                                    }   
                        break;  

                        case 11:                            
                                //                              

                                var totalCCM = parseFloat(ccmcounterP) + parseFloat(ccmcounterO);

                                //console.log(("ccmcounter: "+totalCCM);

                                var positive_ccms = articeldata.positive_ccms;

                                var neutral_ccms = articeldata.neutral_ccms;

                                var negative_ccms = articeldata.negative_ccms;

                                var total_ccms = articeldata.total_ccms;
                                
                                if( totalCCM <= 0 || positive_ccms <= 0 || neutral_ccms <= 0 || negative_ccms <= 0 || total_ccms <=0 ){

                                    const bid = articeldata.id;  
                                    const article_id = articeldata.article_id;    
                                    const rule_id = qualifylst.id;
                                    
                                    const qa_keydata = {       
                                        "bid": bid,  
                                        "article_id": article_id,                        
                                        "rule_id": rule_id
                                    };                                 
    
                                    await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
        
                                        //return spokepeople
                                    });
    
                                } 
                        break; 

                        case 12:                            
                                
                                const spokesPersons12 = articeldata.spokesPerson; 
                                const tonality12 = articeldata.tonality; 
                                var errflg = 0;

                                if(spokesPersons12.length > 0){
                                    for (var key in spokesPersons12) {   
                                        //alert(req.body.keyword[key].keyword);
                                        //console.log((key+" || "+spokesPersons[key].spokesperson_profiling); 

                                        const spokesperson_name1 = spokesPersons12[key].spokesperson_name;                                           

                                        //if(indexOfThreespf <= 0 || spokesperson_name1 == ''){
                                        if(spokesperson_name1 != ''){    

                                            if(tonality12 == 'Negative' || tonality12 == 'Neutral' || tonality12 == 'negative' || tonality12 == 'neutral'){

                                                //console.log(("Not found"+indexOfThree);
                                                const bid = articeldata.id;  
                                                const article_id = articeldata.article_id;    
                                                const rule_id = qualifylst.id;
                                                
                                                const qa_keydata = {       
                                                    "bid": bid,  
                                                    "article_id": article_id,                        
                                                    "rule_id": rule_id
                                                }; 
                                                //console.log(("qa_keydata : "+qa_keydata);

                                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
                    
                                                    //return spokepeople
                                                });
                                            }

                                        } 
                                    }
                                }     
                        break; 

                        case 13:                            
                            // Check spokesperson/Analyst name to be categorized into Four categories only and not in CP/TL etc                            
                            
                            const spokesPersons13 = articeldata.spokesPerson; 
                            var errflg = 0;

                            if(spokesPersons13.length > 0){
                                for (var key in spokesPersons13) {                                       

                                    const spokesperson_name1 = spokesPersons13[key].spokesperson_name;

                                    const spokesperson_profiling = spokesPersons13[key].spokesperson_profiling;

                                    //const indexOfThreespf = spokespersonsprofile.indexOf(searcharticletype);

                                    const theme = articeldata.theme;                                    

                                    //if(indexOfThreespf <= 0 || spokesperson_name1 == ''){
                                    if(spokesperson_profiling == 'Interview' || spokesperson_profiling == 'interview' || spokesperson_profiling == 'Author' || spokesperson_profiling == 'author' ){    

                                        //console.log(("spokesperson_profiling : "+spokesperson_profiling);

                                        //console.log(("theme : "+theme);
                                        if(theme == 'Industry' || theme == 'industry'){                                            

                                            //console.log((" Entry ");
                                            //console.log(("Not found"+indexOfThree);

                                            const bid = articeldata.id;  
                                            const article_id = articeldata.article_id;    
                                            const rule_id = qualifylst.id;
                                            
                                            const qa_keydata = {       
                                                "bid": bid,  
                                                "article_id": article_id,                        
                                                "rule_id": rule_id
                                            }; 
                                            //console.log(("qa_keydata : "+qa_keydata);

                                            await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
                
                                                //return spokepeople
                                            });
                                        }
                                    } 
                                }
                            }   
                           
                        break; 

                        case 14:                            
                                //There should be only National or International tags for a company in an article (according to focus of news)
                                const topic = articeldata.topic;
                                
                                if(rule14DetData.length > 0){
                                    for (var key in rule14DetData) {

                                        //console.log((" rule14DetData :  "+rule14DetData[key]);                                        

                                        const dbsearchstring = rule14DetData[key];

                                        if (!topic.toLowerCase().includes(dbsearchstring.toLowerCase())) {

                                            //console.log((" Insert Record ");

                                            const bid = articeldata.id;  
                                            const article_id = articeldata.article_id;    
                                            const rule_id = qualifylst.id;
                                            
                                            const qa_keydata = {       
                                                "bid": bid,  
                                                "article_id": article_id,                        
                                                "rule_id": rule_id
                                            };                                     
                                                    
                                            await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {

                                                //return data
                                            });
                                        }

                                    }
                                }                               
                                   
                        break; 

                        case 15:                            
                                //Report by a company is always Positive,  if its negative or neutyral the highlights                               
                                
                                const spokesPersons15 = articeldata.spokesPerson; 
                                const tonality15 = articeldata.tonality;
                                var errflg = 0;                                

                                if(spokesPersons15.length > 0){
                                    for (var key in spokesPersons15) {                                          

                                        const spokesperson_name1 = spokesPersons15[key].spokesperson_name;

                                        const searcharticletype = spokesPersons15[key].spokesperson_profiling;

                                        //console.log(("searcharticletype : "+searcharticletype);                               
                                        
                                        if(searcharticletype == 'company' || searcharticletype == 'Company'){    

                                            //console.log(("searcharticletype == 'company' ");

                                            if(tonality15 != 'Positive' || tonality15 != 'positive'){                                               
                                                
                                                const bid = articeldata.id;  
                                                const article_id = articeldata.article_id;    
                                                const rule_id = qualifylst.id;
                                                
                                                const qa_keydata = {       
                                                    "bid": bid,  
                                                    "article_id": article_id,                        
                                                    "rule_id": rule_id
                                                };                                                

                                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
                    
                                                    //return data
                                                });
                                            }
                                        } 
                                    }
                                }                                
                                
                                break;  

                        case 16:                            
                                //There should be only National or International tags for a company in an article (according to focus of news)
                                const news_type = articeldata.news_type;

                                //console.log(("news_type : "+news_type);

                                if(news_type != 'National' || news_type != 'International' || news_type != 'national' || news_type != 'international'){

                                    //console.log((" Entry ");

                                    const bid = articeldata.id;  
                                    const article_id = articeldata.article_id;    
                                    const rule_id = qualifylst.id;
                                    
                                    const qa_keydata = {       
                                        "bid": bid,  
                                        "article_id": article_id,                        
                                        "rule_id": rule_id
                                    };                                     
                                            
                                    await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {

                                        //return data
                                    });

                                }   

                        break; 

                        case 17:                            
                                //Duplicate article for a company in a particular date on same website to be checked by headline for Internet
                                const headline17 = articeldata.headline;
                                const entity_id17 = articeldata.entity_id;
                                const publication = articeldata.publication;
                                const publish_date = articeldata.publish_date;
                                const article_id17 = articeldata.article_id;
                                const edition17 = articeldata.edition;
                                const cav_id17 = articeldata.cav_id;
                                const media_type_id17 = articeldata.media_type_id;
                                const website_url17 = articeldata.website_url;

                                let dataarr = [];	
                                let datacnt = 0;
                                var errflg = 0;            
                                //const spokespersons_profile = { "spokespersons_profile" : "" };
                                await dataprocessService.getarticlesheadlinerowAll(headline17,entity_id17,publication,moment(new Date(publish_date)).format('YYYY-MM-DD'),moment(new Date(publish_date)).format('YYYY-MM-DD')).then(data => {                         
                                                                    
                                    if(data.length > 0){                                                                          

                                        data && data.length && data.forEach(async (articlelist, index) => {

                                            //console.log(("articlelist :: "+JSON.stringify(articlelist)); exist;

                                            const article_iddb = articlelist.article_id;
                                            const headlinedb = articlelist.headline;
                                            const entity_iddb = articlelist.entity_id;
                                            const publicationdb = articlelist.publication;
                                            const publish_datedb = articlelist.publish_date;
                                            const editiondb = articlelist.edition;
                                            const cav_iddb = articlelist.cav_id;
                                            const media_type_iddb = articlelist.media_type_id;
                                            const website_urldb = articlelist.website_url;

                                            // //console.log( headline17+" = "+headline17);
                                            // //console.log( entity_id17+" = "+entity_iddb);
                                            // //console.log( publication+" = "+publicationdb);
                                            // //console.log( publish_datedb+" = "+publish_datedb);
                                            // //console.log( editiondb+" = "+edition17);
                                            // //console.log( article_id17+" = "+article_iddb);

                                            if(media_type_iddb == 1){

                                                if(headline17 == headlinedb && 
                                                    entity_id17 == entity_iddb && 
                                                    publication == publicationdb && 
                                                    publish_datedb == publish_datedb && 
                                                    editiondb == edition17 && 
                                                    article_id17 == article_iddb &&
                                                    cav_id17 == cav_iddb &&
                                                    website_url17 == website_urldb) { 
                                                    errflg = 1;
                                                }

                                            } else{

                                                if(headline17 == headlinedb && 
                                                    entity_id17 == entity_iddb && 
                                                    publication == publicationdb && 
                                                    publish_datedb == publish_datedb && 
                                                    editiondb == edition17 && 
                                                    article_id17 == article_iddb &&
                                                    cav_id17 == cav_iddb){ 
                                                    errflg = 1;
                                                }
                                            }
                                            
                                        })                               
                                    }                                      
                                })                             
                                

                                if(errflg == '1'){

                                    const bid = articeldata.id;  
                                    const article_id = articeldata.article_id;    
                                    const rule_id = qualifylst.id;
                                    
                                    const qa_keydata = {       
                                        "bid": bid,  
                                        "article_id": article_id,                        
                                        "rule_id": rule_id
                                    };                                     
                                            
                                    await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
        
                                        //return data
                                    });
    
                                }                                                        
                                
                            break;  

                        case 18:                            
                                //Press Release tag will be exlusive and positive or neutral, if it tagged with out these then hiughlight 
                                const press_release = articeldata.press_release;

                                const tonality18 = articeldata.tonality;

                                //console.log(" press_release : "+press_release);

                                if(press_release != ''){

                                    if(tonality15 == 'negative' || tonality15 == 'Negative'){                                               
                                                
                                        const bid = articeldata.id;  
                                        const article_id = articeldata.article_id;    
                                        const rule_id = qualifylst.id;
                                        
                                        const qa_keydata = {       
                                            "bid": bid,  
                                            "article_id": article_id,                        
                                            "rule_id": rule_id
                                        };                                                

                                        await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
            
                                            //return data
                                        });
                                    }

                                }   
                                break; 

                        case 19:                            
                            // ET Wealth, BS, FE, FC, Mint One company mention in one article but it did not mention in similar article, those need to be highlighted
                            const edition = articeldata.edition;

                            //console.log(("news_type : "+news_type);

                            if(edition == ''){                                

                                const bid = articeldata.id;  
                                const article_id = articeldata.article_id;    
                                const rule_id = qualifylst.id;
                                
                                const qa_keydata = {       
                                    "bid": bid,  
                                    "article_id": article_id,                        
                                    "rule_id": rule_id
                                };                                     
                                        
                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => { 
                                    //return data
                                });

                            }  

                        break; 

                        case 20:                            
                                // same as 19 
                        break;                          

                        case 22:                             
                                //Check Journalists if its two then two need to be there                                
                                
                                const jurnalist20 = articeldata.jurnalist; 
                                //const tonality15 = articeldata.tonality;
                                var errflg = 0;                                

                                if(jurnalist20.length > 0){

                                    for (var key in jurnalist20) {                                          

                                        const journalists_type = jurnalist20[key].journalists_type;

                                        const journalists_name = jurnalist20[key].journalists_name;

                                        //console.log(("journalists_name : "+journalists_name);                               
                                        
                                        if(journalists_name == '' || journalists_type == ''){                                                                                         

                                            const bid = articeldata.id;  
                                            const article_id = articeldata.article_id;    
                                            const rule_id = qualifylst.id;
                                            
                                            const qa_keydata = {       
                                                "bid": bid,  
                                                "article_id": article_id,                        
                                                "rule_id": rule_id
                                            };                                                

                                            await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
                
                                                //return data
                                            });                                           
                                        } 
                                    }
                                }    
                        break;  
                        
                        case 21: 
                        case 23:
                        case 24:               
                                    //21-Company need to be fetched from keyword master and highlight whichle analysis, If those are not analysed then it need to be highlighted and monitoring pwerson name will be there so we can highlight                       
                                    //23-Check Keywords - New Keywords need to be matched with all parameters as Keyword level 1, Super theme
                                    //24-Any new keyword need to be cross checked once again

                                    const keyword = articeldata.keyword; 
                                    const articletheme23 = articeldata.theme;
                                    const keyword_category = articeldata.keyword_category;
                                    const keyword_category1 = articeldata.keyword_category1;
                                    const keyword_category2 = articeldata.keyword_category2;
                                    //const tonality15 = articeldata.tonality;
                                    var errflg = 0;              
                                    
                                    let index1 = keywordlist.indexOf(keyword);
                                    let index2 = keywordlist.indexOf(keyword_category);
                                    let index3 = keywordlist.indexOf(keyword_category1);
                                    let index4 = keywordlist.indexOf(keyword_category2);

                                    // //console.log("index1 : "+index1);      
                                    // //console.log("index2 : "+index2);      
                                    // //console.log("index3 : "+index3);      
                                    // //console.log("index4 : "+index4);      
                                    var errflg = 0;
                                    if( index1 < 0 && index2 < 0 && index3 < 0 && index4 < 0 ){                                                                                         
                                        
                                        const bid = articeldata.id;  
                                        const article_id = articeldata.article_id;    
                                        const rule_id = qualifylst.id;
                                        
                                        const qa_keydata = {       
                                            "bid": bid,  
                                            "article_id": article_id,                        
                                            "rule_id": rule_id
                                        };                                                

                                        //console.log(("qa_keydata : "+qa_keydata);  

                                        await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
            
                                            //return data
                                        });      
                                                                             
                                    }  else if(index1 > 0 || index1 < 0){

                                        if(index1 < 0){
                                            errflg = 1;
                                        }else{                                              

                                            if(keywordthemelist.length > 0){

                                                for (var key in keywordthemelist) {                                          
            
                                                    const theme_id = keywordthemelist[key].theme_id;
                                                    const keywordstrarr = keywordthemelist[key].keyword;

                                                    //console.log(("theme_id : "+theme_id)   
                                                    if (keywordstrarr.toLowerCase() == keyword.toLowerCase()) {
                                                        //console.log(("keywordstrarr : "+keywordstrarr+" == "+keyword)
                                                        //console.log(("if theme_id : "+theme_id)
                                                        if(theme_id <= 0 || theme_id == null){
                                                            errflg = 1;
                                                            //console.log(("if errflg : "+errflg)
                                                        }
                                                    } 
                                                }
                                            }     
                                        }   
                                    }   else if(index2 > 0 || index2 < 0){

                                        if(index2 < 0){
                                            errflg = 1;
                                        }else{                                           

                                            if(keywordthemelist.length > 0){

                                                for (var key in keywordthemelist) {                                          
            
                                                    const theme_id = keywordthemelist[key].theme_id;
                                                    const keywordstrarr = keywordthemelist[key].keyword;

                                                    //console.log(("theme_id : "+theme_id)   
                                                    if (keywordstrarr.toLowerCase() == keyword_category.toLowerCase()) {
                                                        //console.log(("keywordstrarr : "+keywordstrarr+" == "+keyword)
                                                        //console.log(("if theme_id : "+theme_id)
                                                        if(theme_id <= 0 || theme_id == null){
                                                            errflg = 1;
                                                            //console.log(("if errflg : "+errflg)
                                                        }
                                                    } 
                                                }
                                            }     
                                        }   
                                    }   else if(index3 > 0 || index3 < 0){

                                        if(index3 < 0){
                                            errflg = 1;
                                        }else{                                            

                                            if(keywordthemelist.length > 0){

                                                for (var key in keywordthemelist) {                                          
            
                                                    const theme_id = keywordthemelist[key].theme_id;
                                                    const keywordstrarr = keywordthemelist[key].keyword;

                                                    //console.log(("theme_id : "+theme_id)   
                                                    if (keywordstrarr.toLowerCase() == keyword_category1.toLowerCase()) {
                                                        //console.log(("keywordstrarr : "+keywordstrarr+" == "+keyword)
                                                        //console.log(("if theme_id : "+theme_id)
                                                        if(theme_id <= 0 || theme_id == null){
                                                            errflg = 1;
                                                            //console.log(("if errflg : "+errflg)
                                                        }
                                                    } 
                                                }
                                            }     
                                        }   
                                    }  else if(index4 > 0 || index4 < 0){

                                        if(index4 < 0){
                                            errflg = 1;
                                        }else{                                           

                                            if(keywordthemelist.length > 0){

                                                for (var key in keywordthemelist) {                                          
            
                                                    const theme_id = keywordthemelist[key].theme_id;
                                                    const keywordstrarr = keywordthemelist[key].keyword;

                                                    //console.log(("theme_id : "+theme_id)   
                                                    if (keywordstrarr.toLowerCase() == keyword_category1.toLowerCase()) {
                                                        //console.log(("keywordstrarr : "+keywordstrarr+" == "+keyword)
                                                        //console.log(("if theme_id : "+theme_id)
                                                        if(theme_id <= 0 || theme_id == null){
                                                            errflg = 1;
                                                            //console.log(("if errflg : "+errflg)
                                                        }
                                                    } 

                                                }
                                            }     
                                        }   
                                    }  

                                    if(errflg == 1) {

                                        const bid = articeldata.id;  
                                        const article_id = articeldata.article_id;    
                                        const rule_id = qualifylst.id;
                                        
                                        const qa_keydata = {       
                                            "bid": bid,  
                                            "article_id": article_id,                        
                                            "rule_id": rule_id
                                        };                                                

                                        //console.log(("qa_keydata : "+qa_keydata);  

                                        await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
            
                                            //return data
                                        });   

                                    }

                        break;  
                                    
                        case 25:   
                            // Any duplicated entry for Spokesperson, Product, topic or any master need to be highlight
                            //console.log(("id :: "+qualifylst.id);   
                            const spokesPersons25 = articeldata.spokesPerson; 
                            const products25 = articeldata.products; 
                            const jurnalist25 = articeldata.jurnalist; 
                            const topic25 = articeldata.topic; 
                            var errflg = 0;

                            let sppkelist25 = [];
                            let Productlist25 = [] ; 
                            let jurnlistArr25 = [] ; 

                            let spokecnt = 0;
                            let productcnt = 0;
                            let jurnlistcnt = 0;
                                    
                            if(spokesPersons25.length > 0){
                                for (var key in spokesPersons25) {                                      

                                    const spokesperson_name1 = spokesPersons25[key].spokesperson_name;
                                    const spokesperson_name25 = spokesperson_name1.replace(/[^a-zA-Z0-9]/g, '_').trim();

                                    sppkelist25.push(spokesperson_name25);

                                    spokecnt = parseInt(spokecnt) + 1;                                    
                                }
                            }     
                            
                            if(products25.length > 0){
                                for (var key in products25) {                                      

                                    const product_name1 = products25[key].product_name;
                                    const product_name25 = product_name1.replace(/[^a-zA-Z0-9]/g, '_').trim();

                                    Productlist25.push(product_name25);

                                    productcnt = parseInt(productcnt) + 1;                                    
                                }
                            } 

                            if(jurnalist25.length > 0){
                                for (var key in jurnalist25) {                                      

                                    const journalists_name1 = jurnalist25[key].journalists_name;
                                    const journalists_name25 = journalists_name1.replace(/[^a-zA-Z0-9]/g, '_').trim();

                                    jurnlistArr25.push(journalists_name25);

                                    jurnlistcnt = parseInt(jurnlistcnt) + 1;                                    
                                }
                            } 
                            // //console.log("sppkelist25 : "+sppkelist25);
                            // //console.log("spokecnt : "+spokecnt);
                            // //console.log("length : "+sppkelist25.length);
                            // //console.log("Productlist25 : "+Productlist25);
                            // //console.log("productcnt : "+productcnt);
                            // //console.log("length : "+jurnlistArr25.length);
                            // //console.log("jurnlistArr25 : "+jurnlistArr25);
                            // //console.log("jurnlistcnt : "+jurnlistcnt);
                            // //console.log("length : "+jurnlistArr25.length);

                            var errflg25 = 0;

                            if(sppkelist25.length > sppkelist25 || sppkelist25.length < sppkelist25){
                                errflg25 = 1;
                            }

                            if(Productlist25.length > productcnt || Productlist25.length < productcnt){
                                errflg25 = 1;
                            }

                            if(jurnlistArr25.length > jurnlistcnt || jurnlistArr25.length < jurnlistcnt){
                                errflg25 = 1;
                            }

                            //console.log(("errflg25 : "+errflg25);

                            if(errflg25 == 1){
                                const bid = articeldata.id;  
                                const article_id = articeldata.article_id;    
                                const rule_id = qualifylst.id;
                                
                                const qa_keydata = {       
                                    "bid": bid,  
                                    "article_id": article_id,                        
                                    "rule_id": rule_id
                                }; 
                                //console.log(("qa_keydata : "+qa_keydata);

                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {

                                    //return spokepeople
                                });
                            }


                        break;  

                        case 26:  

                            // Check Visibility - If Photo is tagged as no and automation proces yes then check 
                            //console.log(("id :: "+qualifylst.id);    
                            const photo_presence = articeldata.photo_presence;     
                            const dbphoto = articeldata.dbphoto;                           

                            //console.log(("photo_presence : "+photo_presence);
                            //console.log(("dbphoto : "+dbphoto);

                            if(photo_presence != '' && dbphoto != '' && photo_presence != dbphoto){
                                
                                //console.log(("photo_presence : "+photo_presence); 
                                //console.log(("dbphoto : "+dbphoto);

                                const bid = articeldata.id;  
                                const article_id = articeldata.article_id;    
                                const rule_id = qualifylst.id;
                                
                                const qa_keydata = {       
                                    "bid": bid,  
                                    "article_id": article_id,                        
                                    "rule_id": rule_id
                                }; 
                                //console.log(("qa_keydata : "+qa_keydata);

                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {

                                    //return spokepeople
                                });
                            } 
                                
                        break;
                        
                        case 27:        
                            // if any company name is in headline then it need need to check checked as yesâ€¦ if                             
                            
                            const entity_name = articeldata.entity_name;

                            const headline = articeldata.headline;

                            const indexOfThree27 = headline.indexOf(entity_name);

                            //console.log((indexOfThree)

                            if(indexOfThree27 <= 0){
                                
                                const bid = articeldata.id;  
                                const article_id = articeldata.article_id;    
                                const rule_id = qualifylst.id;
                                
                                const qa_keydata = {       
                                    "bid": bid,  
                                    "article_id": article_id,                        
                                    "rule_id": rule_id
                                }; 
                                //console.log(("qa_keydata : "+qa_keydata);

                                await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {

                                    //return spokepeople
                                });
                            } 
                                
                        break;


                       case 39 :
                                //Check Page No. should not be 0 
                                const page_no = articeldata.page_no;
                                const media_type_id = articeldata.media_type_id;

                                //console.log(("news_type : "+news_type);

                                if(media_type_id == '2' && page_no == 0){

                                    //console.log((" Entry ");

                                    const bid = articeldata.id;  
                                    const article_id = articeldata.article_id;    
                                    const rule_id = qualifylst.id;
                                    
                                    const qa_keydata = {       
                                        "bid": bid,  
                                        "article_id": article_id,                        
                                        "rule_id": rule_id
                                    };                                     
                                            
                                    await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {

                                        //return data
                                    });

                                }   

                        break; 
                            
                       case 31 : 
                                const spokesPersons31 = articeldata.spokesPerson;                                     
                                var errflg31 = 0;                               

                                //console.log(("spokesPersons31 : "+spokesPersons31);
                                if(spokesPersons31.length > 0){
                                    for (var key in spokesPersons31) {                                          

                                        const spokesperson_name31 = spokesPersons31[key].spokesperson_name;

                                        const searcharticletype31 = spokesPersons31[key].spokesperson_profiling;   
                                        
                                        //console.log(("searcharticletype : "+searcharticletype);
                                        //console.log(("searcharticletype31 : #"+searcharticletype31+"#");
                                        //console.log(("spokesperson_name31 : "+spokesperson_name31);  
                                       
                                        if(searcharticletype31 == 'company' || searcharticletype31 == 'Company' || searcharticletype31 == 'Industry' || searcharticletype31 == 'industry'){    
                                                                                 
                                            if(spokesperson_name31 != ''){
                                                //errflg = 0;
                                                //console.log(" if ");
                                            } else {
                                                //console.log(" else  ");
                                                errflg31 = 1;
                                            }                                            
                                        } 
                                        
                                    }
                                }  

                                //console.log("errflg31 : "+errflg31);

                                if(errflg31 == 1){                                               
                                                
                                    //console.log(" addqualifyerrorentry ");

                                    const bid = articeldata.id;  
                                    const article_id = articeldata.article_id;    
                                    const rule_id = qualifylst.id;                                           
                                                                                    
                                    const qa_keydata = {       
                                        "bid": bid,  
                                        "article_id": article_id,                        
                                        "rule_id": rule_id
                                    };       
                                    
                                    //console.log("qa_keydata : "+qa_keydata);

                                    await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
        
                                        //return data
                                    });

                                } 
                                    
                                break; 
                                
                       case 34 : 
                                //Check NPL articles. Also check Press Release in NPL articles
                                const press_release34 = articeldata.press_release;
                                
                                //console.log(" press_release34 : #"+press_release34+"#");

                                if(press_release34 == ''){

                                    //if(tonality15 == 'negative' || tonality15 == 'Negative'){                                               
                                                
                                        const bid = articeldata.id;  
                                        const article_id = articeldata.article_id;    
                                        const rule_id = qualifylst.id;
                                        
                                        const qa_keydata = {       
                                            "bid": bid,  
                                            "article_id": article_id,                        
                                            "rule_id": rule_id
                                        };                                                

                                        await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
            
                                            //return data
                                        });
                                    //}

                                }
                                break;


                        case 37 :    
                                        // What's in it for Me/You column is an authored articleâ€¦Check
                                        // Author article should have a spokesperson name

                                        const spokesPersonslist37 = articeldata.spokesPerson; 
                                        const article_type37 = articeldata.article_type; 
                                        var errflg = 0;

                                        if(article_type37 == 'Author' || article_type37 == 'author' || article_type37 == 'authored' || article_type37 == 'Authored'){
                                            if(spokesPersonslist37.length > 0){
                                                for (var key in spokesPersonslist37) {                                                   

                                                    const spokesperson_name37 = spokesPersonslist37[key].spokesperson_name;

                                                    const spokesperson_profiling37 = spokesPersonslist37[key].spokesperson_profiling;
                                                
                                                    
                                                        if(spokesperson_name37 == '' ){

                                                            const bid = articeldata.id;  
                                                            const article_id = articeldata.article_id;    
                                                            const rule_id = qualifylst.id;
                                                            
                                                            const qa_keydata = {       
                                                                "bid": bid,  
                                                                "article_id": article_id,                        
                                                                "rule_id": rule_id
                                                            };

                                                            await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
                                
                                                                //return spokepeople
                                                            });

                                                        }                                                
                                                }
                                            }
                                        }
                                    break;
                                             
                        case 42 : 
                                //If article ID will not match then we'll highlight the same separtley 

                                const article_id42 = articeldata.article_id;
                                
                                //console.log((" article_id42 : #"+article_id42+"#");

                                if(article_id42 == ''){                                                                              
                                                
                                    const bid = articeldata.id;  
                                    const article_id = articeldata.article_id;    
                                    const rule_id = qualifylst.id;
                                    
                                    const qa_keydata = {       
                                        "bid": bid,  
                                        "article_id": article_id,                        
                                        "rule_id": rule_id
                                    };                                                

                                    await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
        
                                        //return data
                                    });                                    

                                }
                                break;
                        
                        case 43 : 

                                const spokesPersons42 = articeldata.spokesPerson;                                     
                                var errflg43 = 0;                               

                                //console.log(("spokesPersons31 : "+spokesPersons31);
                                if(spokesPersons42.length > 0){

                                    for (var key in spokesPersons42) {                                          

                                        const spokesperson_name31 = spokesPersons42[key].spokesperson_name;

                                        const searcharticletype31 = spokesPersons42[key].spokesperson_profiling;   

                                        const jurnalist43 = articeldata.jurnalist;                                   
                                                              
                                        //console.log(("spokesPersons31 : "+spokesPersons31);
                                        if(jurnalist43.length > 0){

                                            for (var key in spokesPersons42) {                                          

                                                const journalists_name43 = jurnalist43[key].journalists_name;

                                                if(journalists_name43.toLowerCase() == spokesperson_name31.toLowerCase()){
                                                    errflg43 = 1;          
                                                }
                                            }
                                        }                                        
                                    }
                                }                                

                                //console.log("errflg43 : "+errflg43);

                                if(errflg43 == 1){                                               
                                                
                                    //console.log(" addqualifyerrorentry ");

                                    const bid = articeldata.id;  
                                    const article_id = articeldata.article_id;    
                                    const rule_id = qualifylst.id;                                           
                                                                                    
                                    const qa_keydata = {       
                                        "bid": bid,  
                                        "article_id": article_id,                        
                                        "rule_id": rule_id
                                    };       
                                    
                                    //console.log("qa_keydata : "+qa_keydata);

                                    await dataprocessService.addqualifyerrorentry(qa_keydata).then(async (data) => {
        
                                        //return data
                                    });

                                } 
                                    
                                break;      

                      }

                      
                })                   
            } else {                
                resolve(qualifylist)
            }     
            
        })
        .catch(next);
       
    });
    
    Promise.all([getqualifyAll]).then((values) => {
        //return values[0];
        //res.json(values[0]);
        return values[0];
    }).catch((error) => {
        return error;
    })
   
};


// Product functions 

exports.getProductAll = async function (req, res, next) {

    //console.log(("@@@@@@@@@@@@@@@"); exist;
    var msg = ''; 
    const getProductAll = new Promise((resolve, reject) => {
        dataprocessService.getProductAll()
        .then(data => {            
            
            let Productlist = []
            if(data.length > 0){
                data && data.length && data.forEach(async (products, index) => {

                    //var productname = req.body.products[key].productname; 
                    //var productcategory = req.body.products[key].productcategory;
                    //"product_name_merge": spokespersonname.replace(/[^a-zA-Z0-9]/g, '_').trim(),

                    const pullData = {
                        "id" : products.id, 
                        "product_name" : products.product_name,                         
                        "description" : products.description, 
                        "company_id" : products.company_id,
                        "product_category" : products.product_category,
                        "createdAt" : products.createdAt,
                        "created_by" : products.created_by
                    }

                    Productlist.push(pullData);
                    if(data.length === index + 1){
                        resolve(Productlist)
                    }
                })   
                msg = 'sucessfully found Product Data'; 
            } else {
                msg = 'Not found Product Data'; 
                resolve(Productlist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getProductAll]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, Productlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getUniqueProduct = async function (req, res, next) {

    //console.log((req.params.id); exist;       
    var msg = ''; 
    const getUniqueProduct = new Promise((resolve, reject) => {
        dataprocessService.getUniqueProduct(req.params.id)
        .then(data => {

           //console.log(("length : "+data.length); exist; 

            let Productlist = []

            if(data.length > 0){
                data && data.length && data.forEach(async (products, index) => {
                    const pullData = {
                        "id" : products.id, 
                        "product_name" : products.product_name,                         
                        "description" : products.description, 
                        "company_id" : products.company_id,
                        "product_category" : products.product_category,
                        "createdAt" : products.createdAt,
                        "created_by" : products.created_by
                    }
                    Productlist.push(pullData);
                    if(data.length === index + 1){
                        resolve(Productlist)
                    }
                })    

                msg = 'sucessfully found Product Data'; 

            } else {
                msg = 'Not found Product Data'; 
              resolve(Productlist)
            }    
            
        })
        .catch(next);
       
    });

    //console.log((JSON.stringify(getUniqueProduct)); exist;

    Promise.all([getUniqueProduct]).then((values) => {
        //console.log('values', values)
        res.json({ message: msg, Productlist: values[0] });
    }).catch((error) => {
        //console.log('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.addProduct = async function (req, res, next) {
    
    const addProduct = new Promise((resolve, reject) => {
        //req.body.addProduct1.map(async (e, index) => {             

        var biu_id = req.body.productname;
        if(biu_id == '' || typeof biu_id == 'undefined' ){ biu_id = "0"; }
        
        var productname = req.body.productname; 
        var productcategory = req.body.productcategory;       

            dataprocessService.addProduct({
                "product_name": productname,
                "product_name_merge": productname.replace(/[^a-zA-Z0-9]/g, '_').trim(),
                "product_category" : req.body.productcategory,
                "company_id" : req.body.entity_id,
                "description" : req.body.description
            },req.body.action,req.body.id)
        //})
        resolve('sucessfully added Product')
    });
    
    Promise.all([addProduct]).then((values) => {
        //console.log(('values 111', values)
        res.json({ message: 'Product sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}


exports.cronqualifyarticlev1 = async function (req, res, next) {    

        const getQCarticlesrowAll = new Promise((resolve, reject) => {     
                
        let articleEdition = [];
        //cronprocessService.getarticlesrowAll(req.body.client_id,req.body.media_type,moment(new Date(req.body.fromDate)).format('YYYY-MM-DD'),moment(new Date(req.body.toDate)).format('YYYY-MM-DD'),page,req) 
        dataprocessService.getQCarticlesrowAll() 
        .then(data => { 

           // //console.log(JSON.stringify(data)); exist;             

            let articlesrowlist = [];
            let countArry = [];
            let ccmcounterP = 0;
            let ccmcounterO = 0;
            let flg  = 0 ;

            
            let articleCnt  = data.length;
            if(data.length > 0){
                data && data.length && data.forEach(async (articlesrow, index) => {

                    let qcchecked  = 0 ; 
                    let qcunderchecked  = 0 ; 
                    let qccheckedfailed  = 0 ;
                    let qccheckedpass  = 0 ;
                    

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
                        "theme" : articlesrow.theme,
                        "quality_check" : articlesrow.quality_check,
                        "not_relavant" : articlesrow.not_relavant,
                        "recommendation_article" : articlesrow.recommendation_article,
                        "financial_planner" : articlesrow.financial_planner,
                        "new_product_launch" : articlesrow.new_product_launch,
                        "news_type" : articlesrow.news_type,
                        "article_tag" : articlesrow.article_tag,
                        "dbphoto" : articlesrow.dbphoto,                        
                        "spokesPerson" : "",
                        "products" : ""  ,
                        "jurnalist" : "",
                        "qcrules" : ""                     
                    }                                       
                    
                    //console.log(("edition : "+articlesrow.edition);

                    articleEdition = articleEdition+" "+articlesrow.edition;

                    //console.log(("articleEdition : "+articleEdition);

                    await dataprocessService.findArticleQaSpokesPerson(articlesrow.id).then(async (spokedata) => {
                       
                        const pullDataint1 = { "spokesPerson" : spokedata } 
                        //pullData.push(pullDataint1);

                        pullData.spokesPerson  = spokedata;
                    })

                    await dataprocessService.findArticleProducts(articlesrow.id).then(async (productdata) => {
                      
                        const pullDataint2 = { "products" : productdata } 
                        //pullData.push(pullDataint2);

                        pullData.products  = productdata;
                    })

                    await dataprocessService.findArticlejurnalist(articlesrow.id).then(async (jurnalistdata) => {
                      
                        const pullDataint3 = { "jurnalist" : jurnalistdata }

                        //pullData.push(pullDataint3);
                        pullData.jurnalist  = jurnalistdata;
                    })

                    await dataprocessService.getarticlesqcrulesdata(articlesrow.id).then(async (qcrulesdata) => {
                      
                        const pullDataint4 = { "qcrules" : qcrulesdata }

                        
                        //pullData.push(pullDataint3);                        
                        pullData.qcrules  = qcrulesdata;
                        if(qcrulesdata.length > 0){
                            qccheckedfailed = parseInt(qccheckedfailed)+1;
                        } else {
                            qccheckedpass = parseInt(qccheckedpass)+1;
                        }
                    })

                   

                    var msg = params = page = '';        

                    if(flg == 0){
                        await dataprocessService.getQCarticlesrowAllCNT('1').then(async (flagdata) => {       

                            qcunderchecked = flagdata.flagcount;
                            flg = 1;
                        })

                        //console.log("flg :: "+flg);

                    }

                    articlesrowlist.push(pullData);
                    
                    qcchecked = data.length;

                    totalcnt = qccheckedfailed + qccheckedpass;                    
                    
                    const countsubary = { "qccheckedcnt" : qcchecked, "qcunderchecked" : qcunderchecked, "qccheckedfailed" : qccheckedfailed, "qccheckedpass" : qccheckedpass, "total" : totalcnt }

                    //console.log(("countsubary :: "+countsubary);

                    countArry.push(countsubary);
                    
                    //console.log(("length :: "+data.length);

                    //console.log(("articlesrowlist :: "+articlesrowlist.length);

                    //console.log(("index :: "+index);

                    if(data.length === articlesrowlist.length){
                        articlesrowlist.push(countsubary);
                        resolve(articlesrowlist)
                    }                      
                })   
                msg = articleCnt+' articles Found'; 
            } else {
                msg = 'No Record found'; 
                resolve(articlesrowlist)
            }     
            
        })
        .catch(next);
       
    });
    Promise.all([getQCarticlesrowAll]).then((values) => {
        //console.log(('values', values)
        res.json({ message: msg, getQCarticlesrowAll: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })   
    
}


// Row Article Data functions 

exports.relarticlesrowlist = async function (req, res, next) {

    var msg = params = page = ''; 

    var client_id = req.body.client_id;

    // console.log("fromDate : #"+req.body.fromDate+"#");
    // console.log("toDate : #"+req.body.toDate+"#");
    // var fromDate = '';
    if(req.body.fromDate != '' && req.body.fromDate != 'undefined'){
        var fromDate = moment(new Date(req.body.fromDate)).format('YYYY-MM-DD');
    }

    // var toDate = '';
    if(req.body.toDate != '' && req.body.toDate != 'undefined'){
        var toDate = moment(new Date(req.body.toDate)).format('YYYY-MM-DD');
    }   

    // console.log("fromDate : #"+fromDate+"#");
    // console.log("toDate : #"+toDate+"#");
    
    var headline = req.body.headline;
    var publication = req.body.publication;
    var media_type = req.body.media_type;
    var zone = req.body.zone;
    var edition = req.body.edition;
    var entities = req.body.entities;
    //var type = req.body.type;

    const getarticlesrowAll = new Promise((resolve, reject) => {             
        
        dataprocessService.getarticlesrowAllrelated(client_id,fromDate,toDate,headline,publication,media_type,zone,edition,entities) 
        .then(data => { 
            //console.log((JSON.stringify(data))); exist;                         
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
        //console.log(('values', values)
        res.json({ message: msg, articlesrowlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}


exports.singlepubdelete = async function (req, res, next) {
      
    var msg = ''; 
    const singlepubdelete = new Promise((resolve, reject) => {

        //console.log(" inside id : "+req.params.id);
        dataprocessService.deletepubsingle(req.params.id).then(async (data) => {      

            msg = 'Delete Sucessfull'; 
            resolve(msg)
        })              
    });

    //console.log((JSON.stringify(singlepubdelete)); exist;

    Promise.all([singlepubdelete]).then((values) => {
        //console.log('values', values);
        res.json({ message: "Delete Sucessfull" });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.singlesuplidelete = async function (req, res, next) {
      
    var msg = ''; 
    const singlesuplidelete = new Promise((resolve, reject) => {

        //console.log(" inside id : "+req.params.id);
        dataprocessService.deletesuplisingle(req.params.id).then(async (data) => {     
            msg = 'Delete Sucessfull'; 
            resolve(msg)
        })              
    });

    //console.log((JSON.stringify(singlesuplidelete)); exist;

    Promise.all([singlesuplidelete]).then((values) => {
        //console.log('values', values);
        res.json({ message: "Delete Sucessfull" });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.singleproddelete = async function (req, res, next) {
      
    var msg = ''; 
    const singleproddelete = new Promise((resolve, reject) => {

        //console.log(" inside id : "+req.params.id);
        dataprocessService.deleteprodsingle(req.params.id).then(async (data) => {     
            msg = 'Delete Sucessfull'; 
            resolve(msg)
        })              
    });

    //console.log((JSON.stringify(singleproddelete)); exist;

    Promise.all([singleproddelete]).then((values) => {
        //console.log('values', values);
        res.json({ message: "Delete Sucessfull" });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}


exports.singlespokdelete = async function (req, res, next) {
      
    var msg = ''; 
    const singlespokdelete = new Promise((resolve, reject) => {

        //console.log(" inside id : "+req.params.id);
        dataprocessService.deletespoksingle(req.params.id).then(async (data) => {     
            msg = 'Delete Sucessfull'; 
            resolve(msg)
        })              
    });

    //console.log((JSON.stringify(singlespokdelete)); exist;

    Promise.all([singlespokdelete]).then((values) => {
        //console.log('values', values);
        res.json({ message: "Delete Sucessfull" });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}


exports.singlethemedelete = async function (req, res, next) {
      
    var msg = ''; 
    const singlethemedelete = new Promise((resolve, reject) => {

        //console.log(" inside id : "+req.params.id);
        dataprocessService.deletethemesingle(req.params.id).then(async (data) => {     
            msg = 'Delete Sucessfull'; 
            resolve(msg)
        })              
    });

    //console.log((JSON.stringify(singlethemedelete)); exist;

    Promise.all([singlethemedelete]).then((values) => {
        //console.log('values', values);
        res.json({ message: "Delete Sucessfull" });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}


exports.singlethemekeyworddelete = async function (req, res, next) {
      
    var msg = ''; 
    const singlethemekeyworddelete = new Promise((resolve, reject) => {

        //console.log(" inside id : "+req.params.id);
        dataprocessService.deletethemekeywordsingle(req.params.id).then(async (data) => {     
            msg = 'Delete Sucessfull'; 
            resolve(msg)
        })              
    });

    //console.log((JSON.stringify(singlethemekeyworddelete)); exist;

    Promise.all([singlethemekeyworddelete]).then((values) => {
        //console.log('values', values);
        res.json({ message: "Delete Sucessfull" });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.singlekeywordtopicdelete = async function (req, res, next) {
      
    var msg = ''; 
    const singlekeywordtopicdelete = new Promise((resolve, reject) => {

        //console.log(" inside id : "+req.params.id);
        dataprocessService.deletekeywordtopicsingle(req.params.id).then(async (data) => {     
            msg = 'Delete Sucessfull'; 
            resolve(msg)
        })              
    });

    //console.log((JSON.stringify(singlekeywordtopicdelete)); exist;

    Promise.all([singlekeywordtopicdelete]).then((values) => {
        //console.log('values', values);
        res.json({ message: "Delete Sucessfull" });
    }).catch((error) => {
        //console.log(('error', error)
        res.status(500).json({ error: error });
    })  

}

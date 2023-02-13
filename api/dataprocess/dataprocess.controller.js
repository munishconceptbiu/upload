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

    //console.log("@@@@@@@@@@@@@@@"); exist;
    var msg = ''; 
    const getpublicationsAll = new Promise((resolve, reject) => {
        dataprocessService.getpublicationsAll()
        .then(data => {

            console.log(JSON.stringify(data)); exist;
            
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
        console.log('values', values)
        res.json({ message: msg, publicationlist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getUniquePublications = async function (req, res, next) {

    //console.log(req.params.id); exist;       
    var msg = ''; 
    const getUniquePublications = new Promise((resolve, reject) => {
        dataprocessService.getUniquePublications(req.params.id)
        .then(data => {

           //console.log("length : "+data.length); exist; 

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

    //console.log(JSON.stringify(getUniquePublications)); exist;

    Promise.all([getUniquePublications]).then((values) => {
        console.log('values', values)
        res.json({ message: msg, publicationlist: values[0] });
    }).catch((error) => {
        console.log('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.addPublication = async function (req, res, next) {
    
    //console.log(JSON.stringify(req.body)); 
    //console.log(req.body);exist;

    const addPublication = new Promise((resolve, reject) => {
        //req.body.addpublication1.map(async (e, index) => {          

        console.log('language_id : ', req.body.language_id)

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
                publication: req.body.publication,
                biunew_publication_id: 0,
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
            })
        //})
        resolve('sucessfully added Publications')
    });
    
    Promise.all([addPublication]).then((values) => {
        //console.log('values 111', values)
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

    //console.log("@@@@@@@@@@@@@@@"); exist;
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
        console.log('values', values)
        res.json({ message: msg, supplimentslist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getUniquesuppliments = async function (req, res, next) {

    //console.log(req.params.id); exist;       
    var msg = ''; 
    const getUniquesuppliments = new Promise((resolve, reject) => {
        dataprocessService.getUniquesuppliments(req.params.id)
        .then(data => {

           //console.log("length : "+data.length); exist; 

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

    //console.log(JSON.stringify(getUniquesuppliments)); exist;

    Promise.all([getUniquesuppliments]).then((values) => {
        console.log('values', values)
        res.json({ message: msg, supplimentslist: values[0] });
    }).catch((error) => {
        console.log('error', error)
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
            })
        //})
        resolve('sucessfully added suppliments')
    });
    
    Promise.all([addsuppliments]).then((values) => {
        //console.log('values 111', values)
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

    //console.log("@@@@@@@@@@@@@@@"); exist;
    var msg = ''; 
    const getspokespersonsAll = new Promise((resolve, reject) => {
        dataprocessService.getspokespersonsAll()
        .then(data => {

            console.log(JSON.stringify(data)); exist;
            
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
        console.log('values', values)
        res.json({ message: msg, spokespersonslist: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.getUniquespokespersons = async function (req, res, next) {

    //console.log(req.params.id); exist;       
    var msg = ''; 
    const getUniquespokespersons = new Promise((resolve, reject) => {
        dataprocessService.getUniquespokespersons(req.params.id)
        .then(data => {

           //console.log("length : "+data.length); exist; 

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

    //console.log(JSON.stringify(getUniquespokespersons)); exist;

    Promise.all([getUniquespokespersons]).then((values) => {
        console.log('values', values)
        res.json({ message: msg, spokespersonslist: values[0] });
    }).catch((error) => {
        console.log('error', error)
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
                designation : req.body.spokesperson_name,     
                member_for_platform : member_for_platform,
                company_id : company_id,
                company_name : company_name,
                suggested_by : suggested_by,         
            })
        //})
        resolve('sucessfully added spokespersons')
    });
    
    Promise.all([addspokespersons]).then((values) => {
        //console.log('values 111', values)
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
        console.log('values', values)
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
        console.log('values', values)
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
        console.log('values', values)
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
        console.log('values', values)
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
        console.log('values', values)
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
        console.log('values', values)
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
        console.log('values', values)
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
        console.log('values', values)
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
        console.log('values', values)
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
        
        //console.log(' body : ', req.body); 
        
        dataprocessService.addkeywords({               
            theme_id : theme_id,          
            keyword : req.body.keyword,        
        })
        //})
        resolve('sucessfully added keywords')
    });
    
    Promise.all([addkeywords]).then((values) => {
        //console.log('values 111', values)
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
            })
        //})
        resolve('sucessfully added theme')
    });
    
    Promise.all([addtheme]).then((values) => {
        //console.log('values 111', values)
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
            })
        //})
        resolve('sucessfully added topic')
    });
    
    Promise.all([addtopic]).then((values) => {
        //console.log('values 111', values)
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
        //console.log('values', values)
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
        //console.log('values', values)
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
        //     console.log(req.body.theme[key].theme_name); 
        // }

        console.log(req.body.keyword); 

        console.log(req.body.topic); 

    var keyworddata = req.body.keyword;

    var topicdata = req.body.topic;    

    if(req.body.theme != ''){
                       
        for (var key in req.body.theme) {  

            //alert(req.body.keyword[key].keyword);
            var theme = req.body.theme[key].theme_name;           

            if(theme != '') { 
                //console.log(req.body.theme[key].theme_name); 
                var client_id =  req.body.client_id;
                const rwiddata = dataprocessService.addthemenew({               
                    client_id : client_id,          
                    theme_name : theme,
                    keyworddata,
                    topicdata,
                }); 

                console.log("rwiddata : "+JSON.stringify(rwiddata)); exist;
            }
        }
    }

    /*
    const addtheme = new Promise((resolve, reject) => {
        //req.body.addtheme1.map(async (e, index) => {             

        //console.log('body :', req.body); return 0;

        

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
        //console.log('values 111', values)
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

    console.log('keywordarr ', keywordarr);

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

                //console.log('qa_data', qa_data)

                dataprocessService.createMTheme(qa_data).then(async (m_themes) => {
                    
                    //console.log('m_themes : ', m_themes.id)

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

                        //console.log('keywordarr', keywordarr)

                        //insertlenth = insertlenth + 1;
                        const result = await addKeywordAndData(m_themes, keywordarr);
                        
                        let keywordlist = []
                        
                        //for (var key in req.body.keyword) {  

                            var theme_id = m_themes.id;                              
                            await dataprocessService.getthemekeywordAll(theme_id).then(async (data) => {                                  
                                //console.log('data : ', data)                                
                                if(data.length > 0){
                                    data && data.length && data.forEach(async (keyword, index) => {

                                        //console.log('#### data : ', keyword) 

                                        const pullData = {
                                            "id" : keyword.id
                                        }

                                        keywordlist.push(pullData);                                        
                                    })                                       
                                } 
                            });
                        //}

                        //console.log('keywordlist : ', keywordlist); 

                        var topicarr = [];   

                        for (var key5 in req.body.topic) {  

                            var topic = req.body.topic[key5].topic; 

                            console.log('topic : ', topic); 

                            for (var key6 in keywordlist) {  

                                var keyId = keywordlist[key6].id; 

                                console.log('keyId : ', keyId); 

                                qa_topic1 = {               
                                    "keyword_id" : keyId,
                                    "topic" : topic,      
                                };

                                console.log('qa_topic1 : ', qa_topic1);

                                topicarr.push(qa_topic1);                                
                            }
                        }

                        console.log('topicarr : ', topicarr); 

                        const result123 = await addopicAndData(topicarr);

                    }
                });
            }
        }  

        res.json({ message: 'Theme Data sucessfully updated', data: {} });
        
   });
        
    Promise.all([addtheme]).then((values) => {
        //console.log('values 111', values)
        res.json({ message: 'Theme Data sucessfully updated', data: {} });

    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })
}
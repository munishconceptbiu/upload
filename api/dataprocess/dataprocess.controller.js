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


// Row Article Data functions 

exports.getarticlesrowAll = async function (req, res, next) {

    var msg = params = page = ''; 

    const getarticlesrowAll = new Promise((resolve, reject) => {     
        
        //dataprocessService.getarticlesrowAll(req.body.client_id,req.body.media_type,moment(new Date(req.body.fromDate)).format('YYYY-MM-DD'),moment(new Date(req.body.toDate)).format('YYYY-MM-DD'),page,req) 
        dataprocessService.getarticlesrowAllcustom(req.body.client_id,moment(new Date(req.body.fromDate)).format('YYYY-MM-DD'),moment(new Date(req.body.toDate)).format('YYYY-MM-DD'),page,req.body) 
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

exports.getUniquearticlesrow = async function (req, res, next) {

    //console.log(req.params.id); exist;       
    var msg = ''; 
    const getUniquearticlesrow = new Promise((resolve, reject) => {
        dataprocessService.getUniquearticlesrow(req.params.id)
        .then(data => {

           //console.log("length : "+data.length); exist; 

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

    //console.log(JSON.stringify(getUniquearticlesrow)); exist;

    Promise.all([getUniquearticlesrow]).then((values) => {
        console.log('values', values)
        res.json({ message: msg, articlesrowlist: values[0] });
    }).catch((error) => {
        console.log('error', error)
        res.status(500).json({ error: error });
    })  

}

exports.addarticlesrow = async function (req, res, next) {
    
    const addarticlesrow = new Promise((resolve, reject) => {
        //req.body.addarticlesrow1.map(async (e, index) => {             

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

        var positiveCCM = req.body.positiveCCM;
        if(positiveCCM == '' || typeof positiveCCM == 'undefined' ){ 
            reject('Missing Positive CCM. Please check');
        }

        var news = req.body.news;
        if(news == '' || typeof news == 'undefined' ){ 
            reject('Missing News. Please check');
        }

        var journalistname = req.body.journalistname;
        if(journalistname == '' || typeof journalistname == 'undefined' ){ 
            reject('Missing Journalist Name. Please check');
        }

        var journalisttype = req.body.journalisttype;
        if(journalisttype == '' || typeof journalisttype == 'undefined' ){ 
            reject('Missing Journalist Type. Please check');
        }

        var journalistdet = req.body.journalistdet;
        if(journalistdet == '' || typeof journalistdet == 'undefined' ){ 
            reject('Missing Journalist Details. Please check');
        }

        var spokespersonname = req.body.spokespersonname;
        if(spokespersonname == '' || typeof spokespersonname == 'undefined' ){ 
            reject('Missing Spokesperson Name. Please check');
        }

        var spokedesignation = req.body.spokedesignation;
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
        }

        var productname  = req.body.productname;
        if(productname == '' || typeof productname == 'undefined' ){ 
            reject('Missing Product Name. Please check');
        }

        var productcategory  = req.body.productcategory;
        if(productcategory == '' || typeof productcategory == 'undefined' ){ 
            reject('Missing Product Category. Please check');
        }

        var visibilityheadline  = req.body.visibilityheadline;
        if(visibilityheadline == '' || typeof visibilityheadline == 'undefined' ){ 
            reject('Missing Visibility Headline. Please check');
        }

        var visibilityphoto  = req.body.visibilityphoto;
        if(visibilityphoto == '' || typeof visibilityphoto == 'undefined' ){ 
            reject('Missing Visibility Photo. Please check');
        }

        var visibilityanalysis  = req.body.visibilityanalysis;
        if(visibilityanalysis == '' || typeof visibilityanalysis == 'undefined' ){ 
            reject('Missing Visibility analysis. Please check');
        }

        var keymessage  = req.body.keymessage;
        if(keymessage == '' || typeof keymessage == 'undefined' ){ 
            reject('Missing Key Message. Please check');
        }               
        
        /*const state_name = states.filter(state => state.city === e['edition']);
        const edition = e['media type'] === "Print" ? await articalService.getEdition(e['edition']) : { id: null };
        qa_data = {

            state_name: state_name.length ? state_name[0].state : '',
            article_id: e['article id'],
            client_id: req.body.client_id,
            media_type: e['media type'],
            photo_mention: e['photo'],
            headline: e['headline'],
            headline_mention: e['headline mention'] || false,
            prominence: e['prominence'],
            tonality: e['tonality'],
            vertical: e['vertical'],
            EV: e['ev'],
            theme: e['theme'],
            keyword_level_1: e['keyword_level_1'],
            Topic: e['topic'],
            publication_type: e['publication type'],
            publication: e['publication'],
            language: e['language'],
            category_A: e['category'],
            visibility_score: e['visibility score'] || e['visibility'],
            circulation_web_weightage: e["cir ('000) & web wtg"],
            co_score: e['co score'],
            edition: e['edition'],
            publish_date: moment(new Date(e['publish date'])).format('YYYY-MM-DD'),
            mav: typeof e['mav'] === 'number' ? e['mav'] : 0,
            ccm: typeof e['ccm'] === 'number' ? e['ccm'] : 0,
            word_count: typeof e['word count'] === 'number' ? e['word count'] : 0,
            press_release: e['press release'],
            page_no: e['page no'],
            circlation: typeof e['circulation'] === 'number' ? e['circlation'] : 0,
            zone: e['zone'],
            link: e['undefined'],
            website_url: e['undefined'],
            month_name: e['month'],
            monthly_visits: e['monthly visitors*'],
            total_CCMs: typeof e['total ccms'] === 'number' ? e['total ccms'] : 0,
            client_article_type: e['article type'],
            photo_weightage: typeof e['photo weightage'] === 'number' ? e['photo weightage'] : 0,
            headline_weightage: typeof e['headline weightage'] === 'number' ? e['headline weightage'] : 0,
            prominence_weightage: typeof e['prominence weightage'] === 'number' ? e['prominence weightage'] : 0,
            word_count_weightage: typeof e['word count wtg'] === 'number' ? e['word count wtg'] : 0,
            front_Page_weightage: typeof e['front page'] === 'number' ? e['front page'] : 0,
            index_weightage: typeof e['index'] === 'number' ? e['index'] : 0,
            source_name: e['journalist'],
            entity_name: e['company name'],
            prominence: e['prominence'],
            client_name: req.body.client_name,
            edition_id: edition?.id,
            upload_id: upload?.id,
        }
        qa_data.publication_id = dbdata?.publication_id;
        qa_data.edition_id = dbdata?.edition_id,
            qa_data.publication_type_id = dbdata?.publication_type_id
        qa_data.language_id = dbdata?.language_id
        qa_data.suppliment_id = dbdata?.suppliment_id,
            qa_data.source_id = dbdata?.source_id
        qa_data.cav_id = dbdata?.cav_id
        qa_data.entity_id = dbdata?.entity_id
        qa_data.zone_id = dbdata?.zone_id
        qa_data.prominent_id = dbdata?.prominent_id
        qa_data.section_id = dbdata?.section_id

        articalService.createQaData(qa_data).then(async (q_articles) => {
            // const [q_articles, created] = q_articles;
            // if(created === false) {
            //     await articalService.updateQaData(qa_data, q_articles)
            // }
            // console.log('q_articles', q_articles.id)
            if (q_articles) {
                insertlenth = insertlenth + 1;
                const result = await addSpokesPersonAndData(e, q_articles, upload);

                const spokesman = Object.entries(e).filter((e, v) => e[0].match(/spokesperson [0-9]/g) && e[1] !== 0)
                if (spokesman.length !== 0) {
                    spokesman?.forEach(async (s) => {
                        const sperson = {
                            spokesperson_name: s[1].trim(),
                            spokesperson_name_merge: s[1].replace(/[^a-zA-Z0-9]/g, '_').trim(),
                            upload_id: upload?.id
                        };
                        await articalService.findQaSpokesPerson(sperson).then(async (spokepeople) => {
                            // const [spokepeople, created] = sps;
                            if (spokepeople) {
                                const spersondata = {
                                    spokesperson_id: spokepeople.id,
                                    q_article_id: q_articles?.id,
                                    spokesperson_profiling: e['spokesperson profiling'],
                                    upload_id: upload?.id
                                };
                                const result = await articalService.createQaDataSpokesPerson(spersondata);
                                return spokepeople
                            }
                        });

                    })
                }

                const results = await addProductAndData(e, q_articles, upload);
                const productss = Object.entries(e).filter((e, v) => e[0].match(/product name [0-9]/g) && e[1] !== 0)
                if (productss.length !== 0) {
                    productss?.filter(async (p) => {
                        const product = {
                            product_name: p[1],
                            upload_id: upload?.id,
                            product_name_merge: p[1].replace(/[^a-zA-Z0-9]/g, '_').trim()
                        }
                        await articalService.findProductOne(product).then(async (products) => {
                            if(products){
                                const productdata = {
                                    product_id: products.id,
                                    q_article_id: q_articles?.id,
                                    upload_id: upload?.id
                                }
                                const res = await articalService.createQaDataProduct(productdata);
                                return productdata;
                            }
                        })

                    })
                }
            }
        });*/
        resolve('sucessfully added articles')
    });
    
    Promise.all([addarticlesrow]).then((values) => {
        //console.log('values 111', values)
        res.json({ message: 'articles sucessfully updated', data: {} });
    }).catch((error) => {
        if(error == ''){
            error = 'Something went wrong! please try again';
        }
        res.status(500).json({ error: error });
    })

}
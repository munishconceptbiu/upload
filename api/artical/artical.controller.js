const express = require('express');
const reader = require('xlsx')
const articalService = require('./artical.service');
const moment = require('moment');

const multer = require('multer')
const XLSXWriteStream = require('xlsx-write-stream');
const storageCustom = require('./customStorageEngine')

var XLSX = require('xlsx');
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

exports.getArtical = async function (req, res, next) {
    let edition = await articalService.getEdition('Online Web');
    res.json({ edition: edition, message: 'Edition successful' })
}
exports.getList = async function (req, res, next) {
    // articalService.getAllListUpload(req.params.client_id, req.query.client_id).then((data) => {
    //     res.json({ data: data, message: 'Artical successful' })
    // })

    const getListAll = new Promise((resolve, reject) => {
        articalService.getAllListUpload(req.params.client_id, req.query.client_id)
        .then(data => {
            let settings = []
            data && data.length && data.forEach(async (setting, index) => {
                const saveData = {
                   ...setting.dataValues,
                   total_count : await articalService.getUploadCount(setting.id)
                }
                settings.push(saveData);
                if(data.length === index + 1){
                    resolve(settings)
                }
            })
        })
        .catch(next);
       
    });
    Promise.all([getListAll]).then((values) => {
        console.log('values', values)
        res.json({ message: 'List sucessfully updated', data: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
}
exports.getUpload = async function (req, res, next) {
    // articalService.getUpload().then((data) => {
    //     res.json({ data: data, message: 'Upload list successful' })
    // })

    const getListAll = new Promise((resolve, reject) => {
        articalService.getUpload()
        .then(data => {
            let settings = []
            data && data.length && data.forEach(async (setting, index) => {
                const saveData = {
                   ...setting.dataValues,
                   total_count : await articalService.getUploadCount(setting.id)
                }
                settings.push(saveData);
                if(data.length === index + 1){
                    resolve(settings)
                }
            })
        })
        .catch(next);
       
    });
    Promise.all([getListAll]).then((values) => {
        console.log('values', values)
        res.json({ message: 'List sucessfully updated', data: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
}

const addSpokesPersonAndData = async (e, q_articles, upload) => {
    const spokesman = Object.entries(e).filter((e, v) => e[0].match(/spokesperson [0-9]/g) && e[1] !== 0)[0]?.map(e => ({
        "spokesperson_name": e.trim(),
        "spokesperson_name_merge": e.replace(/[^a-zA-Z0-9]/g, '_').trim(),
        "upload_id": upload?.id
    }))
    if (spokesman !== undefined && spokesman?.length !== 0) {

        await articalService.createQaSpokesPerson(spokesman).then(async (spokepeople) => {

            return spokepeople
        });
    }
};

const addProductAndData = async (e, q_articles, upload) => {
    const productss = Object.entries(e).filter((e, v) => e[0].match(/product name [0-9]/g) && e[1] !== 0)[0]?.map(e => ({
        "product_name": e.trim(),
        "product_name_merge": e.replace(/[^a-zA-Z0-9]/g, '_').trim(),
        "upload_id": upload?.id
    }))
    if (productss !== undefined && productss?.length !== 0) {

        await articalService.createQaClientProduct(productss).then(async (pro) => {
            return pro;
        })

    }
}


exports.saveArtical = async function (req, res, next) {
    console.log('files', req.body)
    var f = req.body.upload; // <input type="file" id="upload" name="upload">
    var workbook = XLSX.readFile(f.path, { 'type': 'base64', cellDates: true, raw: true });
    var data = [];
    var sheetHeader;
    var sheet_name_list1 = workbook.SheetNames;
    let sheet_name_list = [];
    sheet_name_list.push(sheet_name_list1[0]);
    sheet_name_list.forEach(function (y) {
        var worksheet = workbook.Sheets[y];
        var a = {};
        var headers = {};
        // var data = [];
        var result = [];
        for (z in worksheet) {
            if (z[0] === '!') continue;
            //parse out the column, row, and value
            var tt = 0;
            for (var i = 0; i < z.length; i++) {
                if (!isNaN(z[i])) {
                    tt = i;
                    break;
                }
            };
            var col = z.substring(0, tt);
            var row = parseInt(z.substring(tt));
            var value = worksheet[z].v === 'Link' ? worksheet[z].l?.Target : worksheet[z].v;
            //store header names
            if (row == 1 && value) {
                headers[col] = value.toLowerCase();
                sheetHeader = headers;
                continue;
            }

            if (!data[row]) data[row] = {};
            data[row][headers[col]] = value;
        }
        data.shift();
        data.shift();
    });
    let upload;
    const addUploadDetails = new Promise(async (resolve, reject) => {
        if (req.body.isIndex === 'true') {
            if (data.filter(e => e.index).length === 0) {
                reject('Your sheet not proper index values. Please check')
            }
        }
        if (req.body.isReach === 'true') {
            if (data.filter(e => e["cir ('000) & web wtg"]).length === 0) {
                reject('Your sheet not proper reach values. Please check')
            }
        }



        const artlength = data.filter(e => e['article id']);
        const datelength = data.filter(e => e['publish date']);
        const companylength = data.filter(e => e['company name']);
        const editionlength = data.filter(e => e['edition']);
        const medialength = data.filter(e => e['media type']);
        console.log('artlength', artlength.length)
        console.log('datelength', datelength.length)
        console.log('companylength', companylength.length)
        console.log('editionlength', editionlength.length)
        console.log('medialength', medialength.length)
        if (artlength.length === 0) {
            reject('Your sheet not proper article values. Please check')
        }
        if (datelength.length === 0) {
            reject('Your sheet not proper publish date values. Please check')
        }
        if (companylength.length === 0) {
            reject('Your sheet not proper company values. Please check')
        }
        if (editionlength.length === 0) {
            reject('Your sheet not proper edition values. Please check')
        }
        if (medialength.length === 0) {
            reject('Your sheet not proper media type values. Please check')
        }

        //    await JSON.parse(req.body.setting).map(async (entry, index) => {
        //         if(entry.graph_id === 1){
        //             const tonalitylength = data.filter(e => e['tonality']);
        //             if(tonalitylength.length === 0){
        //                 reject('Your sheet not proper tonality values. Please check')
        //             }
        //         }
        //     })
        if (artlength.length !== 0 && datelength.length !== 0 && companylength.length !== 0 && editionlength.length !== 0 && medialength.length !== 0) {
            // upload = await articalService.addUploadDetails({
            //     username: req.body.username,
            //     email: req.body.email,
            //     client_id: req.body.client_id,
            //     client_name: req.body.client_name,
            //     start_date: req.body.start_date,
            //     end_date: req.body.end_date,
            //     ip_address: req.body.ip_address,
            //     file: f.url,
            //     filename: f.filename,
            //     originalname: f.originalname,
            //     user_id: req.body.user_id
            // })
            resolve(upload)
        }
    });

    // const addSetting = new Promise((resolve, reject) => {
    //     JSON.parse(req.body.setting).map(async (e, index) => {
    //         articalService.addSetting({
    //             client_id: req.body.client_id,
    //             entity_level: e.entity_level,
    //             publication_level: e.publication_level,
    //             journalist_level: e.journalist_level,
    //             city_level: e.city_level,
    //             keyword_level: e.keyword_level,
    //             topic_level: e.topic_level,
    //             graph_type: e.graph_type,
    //             spokesperson_level: e.spokesperson_level,
    //             profiling_level: e.profiling_level,
    //             visibility_level: e.visibility_level,
    //             client_name: req.body.client_name,
    //             graph_id: e.graph_id,
    //             order_id: index + 1,
    //         })
    //     })
    //     resolve('added settings')
    // });


    let insertlenth = 0;
    let noinsertlength = 0;

    await Promise.all([addUploadDetails,
        upload = await articalService.addUploadDetails({
            username: req.body.username,
            email: req.body.email,
            client_id: req.body.client_id,
            client_name: req.body.client_name,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            ip_address: req.body.ip_address,
            file: f.url,
            filename: f.filename,
            originalname: f.originalname,
            user_id: req.body.user_id
        }),
        data.map(async (e, index) => {
            const art = parseInt(e['article id']);
            if (art !== 0 && !isNaN(art)) {

                await articalService.getAll(req.body.client_id, e['article id'], e['company name'], e['media type']).then(async (dbdata) => {
                    if (dbdata.length === 0) {
                        noinsertlength = noinsertlength + 1;
                        await articalService.addNotMatchingArticle({
                            article_id: art,
                            entity_name: e['company name'],
                            media_type: e['media type'],
                            client_id: req.body.client_id,
                            client_name: req.body.client_name,
                            upload_id: upload?.id
                        })

                    } else {
                        dbdata = dbdata[0]
                        const state_name = states.filter(state => state.city === e['edition']);
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
                            publish_date: moment(e['publish date']).format('YYYY-MM-DD'),
                            mav: typeof e['mav'] === 'number' ? e['mav'] : 0,
                            ccm: typeof e['ccm'] === 'number' ? e['ccm'] : 0,
                            word_count: typeof e['word count'] === 'number' ? e['word count'] : 0,
                            press_release: e['press release'],
                            page_no: e['page no'],
                            circlation: e['circulation'],
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
                        // if (e['media type'] === 'Print') {
                        //     const [print_data, created] = dbdata;
                        //     if (print_data) {
                        //         qa_data.publication_id = print_data.dataValues.publication_id;
                        //         // qa_data.edition_id = print_data.dataValues.edition_id,
                        //         qa_data.publication_type_id = print_data.dataValues.publication_type_id
                        //         qa_data.language_id = print_data.dataValues.language_id
                        //         qa_data.suppliment_id = print_data.dataValues.suppliment_id,
                        //             qa_data.source_id = print_data.dataValues.source_id
                        //         qa_data.cav_id = print_data.dataValues.cav_id
                        //         qa_data.entity_id = print_data.dataValues.entity_id
                        //         qa_data.zone_id = print_data.dataValues.zone_id
                        //         qa_data.prominent_id = print_data.dataValues.prominent_id
                        //         qa_data.section_id = print_data.dataValues.section_id
                        //         edition_id: edition?.id,
                        //     }
                        //     else {

                        //     }
                        // }
                        // if (e['media type'] === 'Online') {
                        //     const [online_data, created] = dbdata;
                        //     if (online_data) {
                        //         qa_data.publication_id = online_data.dataValues.publication_id;
                        //         // qa_data.edition_id = online_data.dataValues.edition_id,
                        //         qa_data.publication_type_id = online_data.dataValues.publication_type_id
                        //         qa_data.language_id = online_data.dataValues.language_id
                        //         qa_data.suppliment_id = online_data.dataValues.suppliment_id,
                        //             qa_data.source_id = online_data.dataValues.source_id
                        //         qa_data.cav_id = online_data.dataValues.cav_id
                        //         qa_data.entity_id = online_data.dataValues.entity_id
                        //         qa_data.zone_id = online_data.dataValues.zone_id
                        //         qa_data.prominent_id = online_data.dataValues.prominent_id
                        //         qa_data.section_id = online_data.dataValues.section_id
                        //     }
                        // }


                        await articalService.createQaData(qa_data).then(async (q_articles) => {
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
                        });
                    }

                })

                if (data.length === index + 1) {
                    await articalService.updateUploadCount(upload?.id, insertlenth, noinsertlength)
                    res.json({ message: 'Article upload succesfully - total article : ' + insertlenth, data: {} });
                    // resolve('Article upload succesfully - total article : ' + insertlenth)
                }
            }

        })


    ]).then((values) => {
        // console.log('values', values)
        // res.json({ message: 'Article upload processing', data: {} });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })

    // res.json({ message: 'Artical upload processing', data: {} });
}


// for custom multer storage
let upload = multer({
    storage: storageCustom({
        key: function (req, file, cb) {
            cb(null, fullPath)
        }
    })
})


exports.processExcel = function (req, res) {
    // add writer stream variable in req so it can be accessed from custom storage
    // req.xlsxWriter = new XLSXWriteStream();
    let u = upload.single('upload');

    // console.log("starting upload")
    // u(req, res, (err) => {
    //     if (err) {
    //         console.log(err)
    //         // An error occurred when uploading
    //         return res.send({
    //             success: false,
    //             message: err.message
    //         });

    //     }
    //     res.json({ message: 'Artical successfully uploded' })       
    // })
    var data = [];
    var sheetHeader;
    var workbook = XLSX.readFile(req.file.path);
    var sheet_name_list1 = workbook.SheetNames;
    let sheet_name_list = [];
    sheet_name_list.push(sheet_name_list1[0]);
    sheet_name_list.forEach(function (y) {
        var worksheet = workbook.Sheets[y];
        var a = {};
        var headers = {};
        // var data = [];
        var result = [];
        for (z in worksheet) {
            if (z[0] === '!') continue;
            //parse out the column, row, and value
            var tt = 0;
            for (var i = 0; i < z.length; i++) {
                if (!isNaN(z[i])) {
                    tt = i;
                    break;
                }
            };
            var col = z.substring(0, tt);
            var row = parseInt(z.substring(tt));
            var value = worksheet[z].v;

            //store header names
            if (row == 1 && value) {
                headers[col] = value.toLowerCase();
                sheetHeader = headers;
                continue;
            }

            if (!data[row]) data[row] = {};
            data[row][headers[col]] = value;
        }
        data.shift();
        data.shift();
    });
}

exports.addSetting = async function (req, res, next) {
    // articalService.addSetting(req.body)
    //     .then((setting) => {
    //         res.json({ setting: setting, message: 'Setting added successful' })
    //     })
    //     .catch(next);
    const addSettings = new Promise((resolve, reject) => {
        req.body.setting.map(async (e, index) => {
            articalService.addSetting({
                client_id: req.body.client_id,
                entity_level: e.entity_level,
                publication_level: e.publication_level,
                journalist_level: e.journalist_level,
                city_level: e.city_level,
                keyword_level: e.keyword_level,
                topic_level: e.topic_level,
                graph_type: e.graph_type,
                spokesperson_level: e.spokesperson_level,
                profiling_level: e.profiling_level,
                visibility_level: e.visibility_level,
                client_name: req.body.client_name,
                graph_id: e.graph_id,
                order_id: index + 1,
                user_id: req.body.user_id,
                created_by: req.body.user_id
            })
        })
        resolve('added settings')
    });

    const addVertical = new Promise((resolve, reject) => {
        articalService.addVerticalSetting({
            isVertical: req.body.is_vertical,
            verticals: req.body.verticals,
            client_id: req.body.client_id,
            client_name: req.body.client_name,
            isIndex: req.body.isIndex,
            isReach: req.body.isReach,
            isPrint: req.body.isPrint,
            isOnline: req.body.isOnline,
            isPrintOnline: req.body.isPrintOnline,
            user_id: req.body.user_id,
            created_by: req.body.user_id
        })
        resolve('add vertical')
    });
    Promise.all([addSettings, addVertical]).then((values) => {
        console.log('values', values)
        res.json({ message: 'Setting sucessfully updated', data: {} });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })

}

exports.getSetting = async function (req, res, next) {
    articalService.getQualitativeCheck(req.params.client_id)
        .then(check => {
            articalService.getSetting(req.params.client_id)
                .then(data => {
                    articalService.getVerticalSetting(req.params.client_id)
                        .then(vertical => {
                            res.json({ settings: data, qualitative: check > 0 ? true : false, isVertical: vertical ? vertical?.isVertical : false, verticals: vertical ? JSON.parse(vertical?.verticals) : [], isIndex: vertical ? vertical?.isIndex : false, isReach: vertical ? vertical?.isReach : false, isOnline: vertical ? vertical?.isOnline : false, isPrint: vertical ? vertical?.isPrint : false, isPrintOnline: vertical ? vertical?.isPrintOnline : false, message: "Client setting fetched successfully" });
                        })
                        .catch(next);
                })
                .catch(next);
        })
        .catch(next);
}

exports.getQualitativeCheck = async function (req, res, next) {
    articalService.getQualitativeCheck(req.params.client_id)
        .then(data => {
            res.json({ qualitative: data > 0 ? true : false, message: "Client Qualitative fetched successfully" });
        })
        .catch(next);
}

exports.getSettingAll = async function (req, res, next) {

    const getSettingAll = new Promise((resolve, reject) => {
        articalService.getSettingAll()
        .then(data => {
            let settings = []
            data && data.length && data.forEach(async (setting, index) => {
                const saveData = {
                    'id': setting.id,
                    'client_id': setting.client_id,
                    'client_name' :  setting.client_name,
                    'levels': await articalService.getSetting(setting.client_id)
                }
                settings.push(saveData);
                if(data.length === index + 1){
                    resolve(settings)
                }
            })
           
            // articalService.getSetting(data && data.length ? data[0].client_id : req.params.client_id)
            //     .then(check => {
            //         articalService.getUniqueVerticalSetting(data && data.length ? data[0].client_id : req.params.client_id)
            //             .then(vertical => {
            //                 res.json({ settings: data, levels: check, isVertical: vertical ? vertical?.isVertical : false, verticals: vertical ? JSON.parse(vertical?.verticals) : [], isIndex: vertical ? vertical?.isIndex : false, isReach: vertical ? vertical?.isReach : false, isOnline: vertical ? vertical?.isOnline : false, isPrint: vertical ? vertical?.isPrint : false, isPrintOnline: vertical ? vertical?.isPrintOnline : false, message: "Client setting fetched successfully" });
            //             })
            //             .catch(next);
            //     })
            //     .catch(next);
        })
        .catch(next);
       
    });
    Promise.all([getSettingAll]).then((values) => {
        console.log('values', values)
        res.json({ message: 'Setting sucessfully updated', settings: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })
   

}

exports.updateSetting = async function (req, res, next) {
    articalService.updateSetting(req.params.id, req.body)
        .then(data => {
            res.json({ settings: {}, message: "Client setting updated successfully" });
        })
        .catch(next);
}

exports.deleteSetting = async function (req, res, next) {
    articalService.deleteSetting(req.params.id)
        .then(data => {
            res.json({ settings: {}, message: "Client setting deleted successfully" });
        })
        .catch(next);
}

exports.getClientList = async function (req, res, next) {
    articalService.getClientList(req.params.client_name)
        .then(data => {
            res.json({ client: data, message: "Client list fetched successfully" });
        })
        .catch(next);
}

exports.getSettingClientList = async function (req, res, next) {
    articalService.getSettingClientList(req.params.client_name)
        .then(data => {
            res.json({ client: data, message: "Client list fetched successfully" });
        })
        .catch(next);
}

exports.getUniqueSetting = async function (req, res, next) {
    const getSettingAll = new Promise((resolve, reject) => {
        articalService.getUniqueSetting(req.params.client_id)
        .then(data => {
            let settings = []
            data && data.length && data.forEach(async (setting, index) => {
                const saveData = {
                    'id': setting.id,
                    'client_id': setting.client_id,
                    'client_name' :  setting.client_name,
                    'levels': await articalService.getSetting(setting.client_id)
                }
                settings.push(saveData);
                if(data.length === index + 1){
                    resolve(settings)
                }
            })
           
            // articalService.getSetting(data && data.length ? data[0].client_id : req.params.client_id)
            //     .then(check => {
            //         articalService.getUniqueVerticalSetting(data && data.length ? data[0].client_id : req.params.client_id)
            //             .then(vertical => {
            //                 res.json({ settings: data, levels: check, isVertical: vertical ? vertical?.isVertical : false, verticals: vertical ? JSON.parse(vertical?.verticals) : [], isIndex: vertical ? vertical?.isIndex : false, isReach: vertical ? vertical?.isReach : false, isOnline: vertical ? vertical?.isOnline : false, isPrint: vertical ? vertical?.isPrint : false, isPrintOnline: vertical ? vertical?.isPrintOnline : false, message: "Client setting fetched successfully" });
            //             })
            //             .catch(next);
            //     })
            //     .catch(next);
        })
        .catch(next);
       
    });
    Promise.all([getSettingAll]).then((values) => {
        console.log('values', values)
        res.json({ message: 'Setting sucessfully updated', settings: values[0] });
    }).catch((error) => {
        res.status(500).json({ error: error });
    })

    // articalService.getUniqueSetting(req.params.client_id)
    //     .then(data => {
    //         articalService.getSetting(data && data.length ? data[0].client_id : req.params.client_id)
    //             .then(check => {
    //                 articalService.getUniqueVerticalSetting(data && data.length ? data[0].client_id : req.params.client_id)
    //                     .then(vertical => {
    //                         res.json({ settings: data, levels: check, isVertical: vertical ? vertical?.isVertical : false, verticals: vertical ? JSON.parse(vertical?.verticals) : [], isIndex: vertical ? vertical?.isIndex : false, isReach: vertical ? vertical?.isReach : false, isOnline: vertical ? vertical?.isOnline : false, isPrint: vertical ? vertical?.isPrint : false, isPrintOnline: vertical ? vertical?.isPrintOnline : false, message: "Client setting fetched successfully" });
    //                     })
    //                     .catch(next);
    //             })
    //             .catch(next);
    //     })
    //     .catch(next);

}

exports.deleteUpload = async function (req, res, next) {
    articalService.deleteUpload(req.params.id)
        .then(data => {
            res.json({ settings: {}, message: "Upload deleted successfully" });
        })
        .catch(next);
}
exports.getNMArticleList = async function (req, res, next) {
    articalService.getNMArticleList(req.params.id)
        .then(data => {
            res.json({ list: data, message: "Upload not matching list fetched successfully" });
        })
        .catch(next);
}

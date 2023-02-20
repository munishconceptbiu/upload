

const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const dataprocessController = require('./dataprocess.controller')

//publication routes
router.get('/get-publicationlist',  dataprocessController.getpublicationsAll);

router.get('/get-singlepublications/:id',  dataprocessController.getUniquePublications);

router.post('/add-publication',  dataprocessController.addPublication);


//suppliments routes
router.get('/get-supplimentslist',  dataprocessController.getsupplimentsAll);

router.get('/get-singlesuppliments/:id',  dataprocessController.getUniquesuppliments);

router.post('/add-suppliments',  dataprocessController.addsuppliments);

//suppliments routes
router.get('/get-supplimentslist',  dataprocessController.getsupplimentsAll);

router.get('/get-singlesuppliments/:id',  dataprocessController.getUniquesuppliments);

router.post('/add-suppliments',  dataprocessController.addsuppliments);

//spokespersons routes
router.get('/get-spokespersonslist',  dataprocessController.getspokespersonsAll);

router.get('/get-singlespokespersons/:id',  dataprocessController.getUniquespokespersons);

router.post('/add-spokespersons',  dataprocessController.addspokespersons);


//spokespersons routes
router.get('/get-themelist',  dataprocessController.getthemeAll);
router.get('/get-keywordlist',  dataprocessController.getkeywordAll);
router.get('/get-topiclist',  dataprocessController.gettopicAll);

router.get('/get-clientthemelist/:client_id',  dataprocessController.getclientthemeAll);
router.get('/get-themekeywordlist/:theme_id',  dataprocessController.getthemekeywordAll);
router.get('/get-keywordtopiclist/:keyword_id',  dataprocessController.getkeywordtopicAll);

router.get('/get-singlethemelist/:id',  dataprocessController.getsingleclientthemeAll);
router.get('/get-singlethemekeywordlist/:id',  dataprocessController.getsinglethemekeywordAll);
router.get('/get-singlekeywordtopiclist/:id',  dataprocessController.getsinglekeywordtopicAll);

router.post('/add-keywords',  dataprocessController.addkeywords);

router.post('/add-theme',  dataprocessController.addtheme);

router.post('/add-topic',  dataprocessController.addtopic);

router.get('/get-clienttktAll/:client_id',  dataprocessController.getclienttktAll);

router.get('/get-clienttktsingle/:id',  dataprocessController.getclienttktsingle);


router.post('/add-themekeywordtopic',  dataprocessController.addthemekeywordtopic);

module.exports = router;

//articles routes

router.post('/get-articlesrowlist',  dataprocessController.getarticlesrowAll);

router.get('/get-singlearticlesrow/:id',  dataprocessController.getUniquearticlesrow);

router.post('/add-articlesrow',  dataprocessController.addarticlesrow);
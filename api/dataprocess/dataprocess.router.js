

const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const dataprocessController = require('./dataprocess.controller')

//publication routes
router.get('/get-publicationlist',  dataprocessController.getpublicationsAll);

router.get('/get-singlepublications/:id',  dataprocessController.getUniquePublications);

router.get('/get-singlepubdelete/:id',  dataprocessController.singlepubdelete);

router.post('/add-publication',  dataprocessController.addPublication);


//suppliments routes
router.get('/get-supplimentslist',  dataprocessController.getsupplimentsAll);

router.get('/get-singlesuppliments/:id',  dataprocessController.getUniquesuppliments);

router.get('/get-singlesuplidelete/:id',  dataprocessController.singlesuplidelete);

router.post('/add-suppliments',  dataprocessController.addsuppliments);

//products routes
router.get('/get-productslist',  dataprocessController.getProductAll);

router.get('/get-singleproducts/:id',  dataprocessController.getUniqueProduct);

router.get('/get-singleproddelete/:id',  dataprocessController.singleproddelete);

router.post('/add-products',  dataprocessController.addProduct);

/*//suppliments routes
router.get('/get-supplimentslist',  dataprocessController.getsupplimentsAll);

router.get('/get-singlesuppliments/:id',  dataprocessController.getUniquesuppliments);

router.post('/add-suppliments',  dataprocessController.addsuppliments);*/

//spokespersons routes
router.get('/get-spokespersonslist',  dataprocessController.getspokespersonsAll);

router.get('/get-singlespokespersons/:id',  dataprocessController.getUniquespokespersons);

router.get('/get-singlespokdelete/:id',  dataprocessController.singlespokdelete);

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

router.get('/get-singlethemedelete/:id',  dataprocessController.singlethemedelete);

router.get('/get-singlethemekeyworddelete/:id',  dataprocessController.singlethemekeyworddelete);

router.get('/get-singlekeywordtopicdelete/:id',  dataprocessController.singlekeywordtopicdelete);

router.post('/add-keywords',  dataprocessController.addkeywords);

router.post('/add-theme',  dataprocessController.addtheme);

router.post('/add-topic',  dataprocessController.addtopic);

router.get('/get-clienttktAll/:client_id',  dataprocessController.getclienttktAll);

router.get('/get-clienttktsingle/:id',  dataprocessController.getclienttktsingle);


router.post('/add-themekeywordtopic',  dataprocessController.addthemekeywordtopic);

router.get('/cronqualifyarticlev1',  dataprocessController.cronqualifyarticlev1);


//articles routes

router.post('/get-articlesrowlist',  dataprocessController.getarticlesrowAll);

router.get('/get-singlearticlesrow/:id',  dataprocessController.getUniquearticlesrow);

router.post('/add-articlesrow',  dataprocessController.addarticlesrow);

router.get('/cronqualifyarticle',  dataprocessController.cronqualifyarticle);

router.get('/getqualifyRuleslist',  dataprocessController.getqualifyRuleslist);

router.post('/get-relarticlesrowlist',  dataprocessController.relarticlesrowlist);

module.exports = router;

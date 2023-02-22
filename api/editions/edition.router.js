
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const editionController = require('../editions/edition.controller')
// router

router.get('/:name',  editionController.getEdition);

module.exports = router;
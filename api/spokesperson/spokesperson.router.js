
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const spokespersonController = require('../spokesperson/spokesperson.controller')
// router
router.get('/:name',  spokespersonController.getSpokeperson);

module.exports = router;
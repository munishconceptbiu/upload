
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const userController = require('../editions/edition.controller')
// router
router.get('/:name',  userController.getEdition);
router.get('/zone/:zoneid',  userController.getZoneEdition);

module.exports = router;
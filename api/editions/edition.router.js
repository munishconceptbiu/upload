
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const userController = require('../editions/edition.controller')
// router
router.get('/:name',  userController.getEdition);

module.exports = router;
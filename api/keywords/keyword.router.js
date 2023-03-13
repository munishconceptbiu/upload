
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const keywordController = require('../keywords/keyword.controller')
// router
router.get('/:name',  keywordController.getKeyword);

router.post('/:name',  keywordController.getClientKeyword);

module.exports = router;
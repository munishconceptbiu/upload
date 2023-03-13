
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const themeController = require('../themes/themes.controller')
// router
router.post('/:name',  themeController.getThemes);

module.exports = router;
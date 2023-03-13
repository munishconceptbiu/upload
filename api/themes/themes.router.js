
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const themeController = require('../themes/themes.controller')
// router
router.get('/:name',  themeController.getThemes);
router.post('/:name',  themeController.getClientThemes);

module.exports = router;

const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const qaarticleController = require('../qaarticle/qaarticle.controller')
// router
router.put('/:id',  qaarticleController.updateArticle);

module.exports = router;
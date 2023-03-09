
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const qaarticleController = require('../qaarticle/qaarticle.controller')
// router

router.post('/',  qaarticleController.getArticle);

router.put('/:id',  qaarticleController.updateArticle);

router.put('/',  qaarticleController.updateArticles);

router.put('/finalstep',  qaarticleController.updateFinalStepArticles);

module.exports = router;
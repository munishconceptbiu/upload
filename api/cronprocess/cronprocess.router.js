const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const cronprocessController = require('./cronprocess.controller')

router.get('/cronqualifyarticle',  cronprocessController.cronqualifyarticle);
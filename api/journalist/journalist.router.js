
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const journalistController = require('./journalist.controller')
// routes



router.get('/publication/:publicationid',  journalistController.getAllPublicaitonWise);

router.put('/:id',  journalistController.update);
router.get('/:id',  journalistController.getSingle);
router.delete('/:id',  journalistController.delete);
router.post('/',  journalistController.add);
router.get('/',  journalistController.getAll);
module.exports = router;
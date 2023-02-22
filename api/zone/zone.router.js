
const Router = require('express').Router;
const router = Router();

const authorize = require('_middleware/authorize')
const zoneController = require('../zone/zone.controller')
// router
router.get('/',  zoneController.getZone);

router.get('/editions/:zoneid',  zoneController.getZoneEdition);

module.exports = router;
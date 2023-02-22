const zoneService = require('./zone.service');


exports.getZone  = async function (req, res, next) {
    let zones = await zoneService.getZone();
    res.json({ zones: zones, message: 'Zone successful' })
}

exports.getZoneEdition  = async function (req, res, next) {
    let editions = await zoneService.getZoneEdition(req.params.zoneid);
    res.json({ editions: editions, message: 'Edition successful' })
}
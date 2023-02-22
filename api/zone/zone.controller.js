const keywordService = require('./zone.service');


exports.getZone  = async function (req, res, next) {
    let zones = await keywordService.getZone();
    res.json({ zones: zones, message: 'Zone successful' })
}
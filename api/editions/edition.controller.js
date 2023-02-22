const editionService = require('./edition.service');


exports.getEdition  = async function (req, res, next) {
    let editions = await editionService.getEdition(req.params.name);
    res.json({ editions: editions, message: 'Edition successful' })
}

exports.getZoneEdition  = async function (req, res, next) {
    let editions = await editionService.getZoneEdition(req.params.zoneid);
    res.json({ editions: editions, message: 'Edition successful' })
}
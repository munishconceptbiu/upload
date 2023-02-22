const editionService = require('./edition.service');


exports.getEdition  = async function (req, res, next) {
    let editions = await editionService.getEdition(req.params.name);
    res.json({ editions: editions, message: 'Edition successful' })
}

const spokespersonService = require('./spokesperson.service');


exports.getSpokeperson  = async function (req, res, next) {
    let spokesperson = await spokespersonService.getSpokeperson(req.params.name);
    res.json({ spokesperson: spokesperson, message: 'Spokesperson successful' })
}
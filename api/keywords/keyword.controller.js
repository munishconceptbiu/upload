const keywordService = require('./keyword.service');


exports.getKeyword  = async function (req, res, next) {
    let keywords = await keywordService.getKeyword(req.params.name);
    res.json({ keywords: keywords, message: 'Keyword successful' })
}

exports.getClientKeyword  = async function (req, res, next) {
    let keywords = await keywordService.getClientKeyword(req.body.theme_id,req.params.name);
    res.json({ keywords: keywords, message: 'Keyword successful' })
}
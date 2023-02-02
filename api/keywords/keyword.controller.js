const keywordService = require('./keyword.service');


exports.getKeyword  = async function (req, res, next) {
    let keywords = await keywordService.getKeyword(req.params.name);
    res.json({ keywords: keywords, message: 'Keyword successful' })
}
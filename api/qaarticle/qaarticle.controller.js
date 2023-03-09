const qaarticleService = require('./qaarticle.service');


exports.updateArticle  = async function (req, res, next) {
    let article = await qaarticleService.updateArticle(req.body, req.params.id);
    res.json({ article: article, message: 'Article updated successful' })
}

exports.getArticle  = async function (req, res, next) {
    let article = await qaarticleService.getArticle(req.body);
    res.json({ article: article.data, message: 'Article updated successful' })
}

exports.updateArticles  = async function (req, res, next) {
    let article = await qaarticleService.updateArticles(req.body);
    res.json({ article: article, message: 'Articles updated successful' })
}

exports.updateFinalStepArticles  = async function (req, res, next) {
    await qaarticleService.addUpdateJournalist(req.body)
    await qaarticleService.addUpdateSpokeperson(req.body)
    await qaarticleService.addUpdateProducts(req.body)
    let article = await qaarticleService.updateArticles(req.body);
    res.json({ article: article, message: 'Articles updated successful' })
}
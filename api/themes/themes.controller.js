const themeService = require('./themes.service');


exports.getThemes  = async function (req, res, next) {
    let themes = await themeService.getThemes(req.params.name);
    res.json({ themes: themes, message: 'Themes successful' })
}
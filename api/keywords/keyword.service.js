const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getKeyword,
    getClientKeyword
};

async function getKeyword(name) {
    const edition = await db4.MThemeKeywords.findAll({
        where: {
            keyword: {
                [Op.like]: `${name}%`
            }
        },
        attributes: ["id",
            "keyword",
        ]
    });
    return edition;
}

async function getClientKeyword(theme_id,name) {
    const edition = await db4.MThemeKeywords.findAll({
        where: {
            keyword: {
                [Op.like]: `${name}%`
            },
            theme_id : theme_id
        },
        attributes: ["id",
            "keyword",
        ]
    });
    return edition;
}
const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getKeyword
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
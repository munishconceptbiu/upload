const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getKeyword,
    getClientKeyword,
    getThemeWordTopic
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

async function getThemeWordTopic(client_id) {
     return await db4.sequelize.query(
        `SELECT *
FROM m_themes t 
INNER JOIN m_theme_keywords k ON t.id=k.theme_id
INNER JOIN m_theme_keyword_topics topic ON k.id=topic.keyword_id
WHERE  t.client_id=:client_id`,
        {
            replacements: { client_id: client_id },
            type: QueryTypes.SELECT
        }
    );
    return edition;
}
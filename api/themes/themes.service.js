const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getThemes,
    getClientThemes
};

async function getThemes(name) {
    const themes = await db4.MThemes.findAll({
        where: {
            theme_name: {
                [Op.like]: `${name}%`
            },
        },
        attributes: ["id",
            "theme_name",
        ]
    });
    return themes;
}

async function getClientThemes(client_id, name) {
    const themes = await db4.MThemes.findAll({
        where: {
            theme_name: {
                [Op.like]: `${name}%`
            },
            client_id: client_id
        },
        attributes: ["id",
            "theme_name",
        ]
    });
    return themes;
}
const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getThemes
};

async function getThemes(client_id, name) {
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
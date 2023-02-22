const db = require('_helpers/db');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getEdition,
};

async function getEdition(name) {
    const edition = await db.Edition.findAll({
        where: {
            edition_name: {
                [Op.like]: `${name}%`
            }
        },
        attributes: ["id",
            "edition_name",
        ]
    });
    return edition;
}
const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getSpokeperson
};

async function getSpokeperson(name) {
    const spokesperon = await db4.MSpokespersons.findAll({
        where: {
            spokesperson_name: {
                [Op.like]: `${name}%`
            }
        }
    });
    return spokesperon;
}
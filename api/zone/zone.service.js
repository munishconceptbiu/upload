const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getZone,
    getZoneEdition
};

async function getZone(name) {
    const zones = await db4.Zone.findAll();
    return zones;
}

async function getZoneEdition(zoneid) {
    const edition = await db.Edition.findAll({
        where: {
            zone_id:  zoneid
        }
    });
    return edition;
}
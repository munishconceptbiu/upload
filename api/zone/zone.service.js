const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getZone
};

async function getZone(name) {
    const zones = await db4.Zone.findAll();
    return zones;
}
const db = require('_helpers/db');
const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    getAll,
    getById,
    save,
    delete: _delete,
    update: _update,
    getAllPublicaitonWise,
    getAllNameWise
};



async function getAll() {
    const result = await db.Journalist.findAll();
    return result;
}

async function getById(id) {
    return await getJournalist(id);
}
async function save(params) {
    await db.Journalist.create(params);
}
async function _delete(id) {
    const journalist = await getJournalist(id);
    await journalist.destroy();
}

async function getJournalist(id) {
    const journalist = await db.Journalist.findByPk(id);
    if (!journalist) throw 'Journalist not found';
    return journalist;
}
async function _update(params, id) {
    await db.Journalist.update(params, { where: { id: id } });
    return await getJournalist(id);
}

async function getAllPublicaitonWise(id) {
    const result = await db.Journalist.findAll({where: { publication_id: id}});
    return result;
}

async function getAllNameWise(name) {
    const journalist = await db.Journalist.findAll({
        where: {
            journalist_name: {
                [Op.like]: `${name}%`
            }
        }
    });
    return journalist;
}
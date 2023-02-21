const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");

const { func } = require('joi');

module.exports = {
    updateArticle
};

async function updateArticle(data, id) {
    const article = await db4.QaArticlesRow.update(data, {
        where: {
          id: id
        }
      });;
    return article;
}
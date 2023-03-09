const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");
const axios = require('axios');

const { func } = require('joi');

module.exports = {
    updateArticle,
    getArticle,
    updateArticles,
    addUpdateJournalist,
    addUpdateSpokeperson,
    addUpdateProducts,
};

async function updateArticle(data, id) {
    const article = await db4.QaArticlesRow.update(data, {
        where: {
          id: id
        }
      });;
    return article;
}

async function getArticle(con) {

  const data = {"client_id": con.client_id,"article_id": con.article_id,"entity_id":con.entity_id,"user_id":"4","rbase_url":"cbiu.weboapps.com"}
  // const url = "http://betadevapi.conceptbiu.com/app/auth/login";
  const url = con.media_type === 1 ? "https://clientportal.conceptbiu.com/api/app/online_articles/details" : "http://betadevapi.conceptbiu.com/app/articles/details";
  const config = {
      method: 'post',
      url,
      headers: { 'Content-Type': 'application/json', Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiNCRhbWl0LmNsaWVudEBjb25jZXB0Yml1LmNvbSJ9.VeM2QtccR6VhDsa8vC1XHQjU0GQA-wmdJRPaA2_cXmk" },
      data,
    };
    return axios(config);
}

async function updateArticles(data) {
  await data?.articles.map(async (article, index) => {
  const articles = await db4.QaArticlesRow.update(data.data, {
      where: {
        id: article.id
      }
    });
    if(data?.articles.length === index + 1) return articles;
  })
  
}


async function addUpdateSpokeperson(data) {
  await data?.articles.map(async (article, index) => {
    await data?.spokeperson.map(async (spokeperson, index) => {
      const params = {
        "spokesperson_id" : spokeperson.spokepersonId,
        "q_article_id": article.id,
        "upload_id" : 0
      }
      await db4.QaDataSpokesPerson.findOrCreate({ where: { spokesperson_id: spokeperson.spokepersonId, q_article_id: article.id }, defaults: params });
    });
  });
}

async function addUpdateJournalist(data) {
  await data?.articles.map(async (article, index) => {
    await data?.journalist.map(async (journalist, index) => {
      const params = {
        "journalists_name" : journalist.journalistName,
        "journalists_id": journalist.journalistId,
        "journalists_det": journalist.details,
        "journalists_type": journalist.type,
        "q_article_id": article.id,
        "upload_id" : 0
      }
      console.log('params', params)
      await db4.QJournalists.findOrCreate({ where: { journalists_id: journalist.journalistId, q_article_id: article.id }, defaults: params });
    });
  });
}

async function addUpdateProducts(data) {
  await data?.articles.map(async (article, index) => {
    await data?.products.map(async (products, index) => {
      const params = {
        "product_id": products.productId,
        "q_article_id": article.id,
        "upload_id" : 0
      }
      await db4.QaDataProduct.findOrCreate({ where: { product_id: products.productId, q_article_id: article.id }, defaults: params });
    });
  });
}
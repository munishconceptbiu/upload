const db4 = require('_helpers/db4');

const { Op, QueryTypes } = require("sequelize");
const axios = require('axios');

const { func } = require('joi');

module.exports = {
    updateArticle,
    getArticle,
    updateArticles
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
  console.log('data', data)
  data?.articles.map(async (article, index) => {
  const articles = await db4.QaArticlesRow.update(data.data, {
      where: {
        id: article.id
      }
    });
    if(data?.articles.length === index + 1) return articles;
  })
  
}
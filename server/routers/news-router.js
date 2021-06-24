const express = require('express');
const router = express.Router();
const query = encodeURI('코로나');
const request = require('request');
require('dotenv').config();

const options = {
  method: 'GET',
  url: `https://openapi.naver.com/v1/search/news.json?query=${query}&display=10&start=1&sort=sim`,
  headers: {
    'X-Naver-Client-Id': process.env.NEWS_ID,
    'X-Naver-Client-Secret': process.env.NEWS_PASSWORD
  }
};

// 네이버 뉴스 라우터
router.get("/", (req, res) => {
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    res.send(body);
  });
});

module.exports = router;
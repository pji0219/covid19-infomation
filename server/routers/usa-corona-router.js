const express = require('express');
const router = express.Router();
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api.covid19api.com/total/dayone/country/us'
}

// 미국 코로나 api 라우터
router.get('/', (req, res) => {
  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    res.send(body);
  });
});

module.exports = router;
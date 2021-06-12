const express = require('express');
const router = express.Router();
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api.covid19api.com/total/dayone/country/cn'
}


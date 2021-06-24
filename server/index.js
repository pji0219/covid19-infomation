const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const korData = require('./routers/kor-corona-router');
const globalData = require('./routers/global-corona-router');
const usaData = require('./routers/usa-corona-router');
const jpData = require('./routers/jp-corona-router');
const cnData = require('./routers/cn-corona-router');
const news = require('./routers/news-router');

// cors 해결
app.use(cors({
  origin: ['http://localhost:3000']
}));

// 국내 종합 코로나 정보 api
app.use('/api/kor', korData);

// 해외 종합 코로나 정보 api
app.use('/api/global', globalData);

// 미국 종합 코로나 정보 api
app.use('/api/usa', usaData);

// 일본 종합 코로나 정보 api
app.use('/api/jp', jpData);

//중국 종합 코로나 정보 api
app.use('/api/cn', cnData);

// 네이버 뉴스 api
app.use('/api/navernews', news);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});
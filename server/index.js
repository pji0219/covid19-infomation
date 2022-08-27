const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const news = require('./routers/news-router');

// cors 해결
app.use(
  cors({
    origin: ['https://know-corona-info.netlify.app'],
  })
);

// 네이버 뉴스 api
app.use('/api/navernews', news);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});

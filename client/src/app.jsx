import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import KorCoronaData from './components/kor-corona-data/kor-corona-data';
import GlobalCoronaData from './components/global-corona-data/global-corona-data';
import NewsData from './components/news-data/news-data';
import DataSource from './components/data-source/data-source';
import Header from './components/header/header';
import NotFound from './components/not-found/not-found';
import Footer from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={KorCoronaData} />
        <Route path="/global" component={GlobalCoronaData} />
        <Route path="/news" component={NewsData} />
        <Route path="/source" component={DataSource} />
        <Route to="/404" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

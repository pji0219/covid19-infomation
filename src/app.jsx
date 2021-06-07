import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import KorCoronaData from './components/kor-corona-data/kor-corona-data';
import GlobalCoronaData from './components/global-corona-data/global-corona-data';
import News from './components/news/news';
import DataSource from './components/data-source/data-source';
import Header from './components/header/header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={KorCoronaData} />
          <Route path="/global" component={GlobalCoronaData} />
          <Route path="/news" component={News} />
          <Route path="/source" component={DataSource} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

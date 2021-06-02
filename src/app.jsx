import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import KorCoronaData from './components/kor-corona-data/kor-corona-data';
import GlobalCoronaData from './components/global-corona-data/global-corona-data';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={KorCoronaData} />
          <Route path="/global" component={GlobalCoronaData} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

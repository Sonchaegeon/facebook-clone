import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainContainer from './container/MainContainer/MainContainer';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

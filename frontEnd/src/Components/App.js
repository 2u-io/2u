import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Login from '../pages/Login'
import Catalogo from '../pages/Catalogo'
import CreateAccount from '../pages/CreateAccount'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/catalogo" component={Catalogo} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
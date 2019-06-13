import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home'
import Catalogo from '../pages/Catalogo'
import CreateAccount from '../pages/CreateAccount'
import Profile from '../pages/ProfileConfig'
import Car from '../pages/Car'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={CreateAccount} />
          <Route exact path="/catalogo" component={Catalogo} />
          <Route exact path="/perfil" component={Profile} />
          <Route exact path="/shopcar" component={Car} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header';
import Map from './views/Map';
import Pokedex from './views/Pokedex';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Map />
        </Route>
        <Route path='/pokedex'>
          <Pokedex />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

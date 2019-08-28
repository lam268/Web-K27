import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateGameScreen from './pages/CreateGameScreen';
import GameDetailScreen from './pages/GameDetailScreen';
import NotFoundScreen from './pages/NotFoundScreen';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={CreateGameScreen} exact={true}></Route>
        <Route path='/games/:gameId' component={GameDetailScreen} exact={true}></Route>
        <Route path='*' component={NotFoundScreen}></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;

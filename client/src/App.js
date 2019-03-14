import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/" component={Authentication}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

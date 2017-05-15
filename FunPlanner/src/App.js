import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Adventures from './components/Adventures';
import Nav from './components/Nav';
import AddAdventureContainer from './components/AddAdventureContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={AddAdventureContainer} />
            <Route path='/list' component={Adventures} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

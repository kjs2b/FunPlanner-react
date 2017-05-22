import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, IndexRedirect } from 'react-router-dom';

import AuthService from './utils/AuthService'
import Adventures from './components/Adventures';
import Nav from './components/Nav';
import AddAdventureContainer from './components/AddAdventureContainer';
import Login from './components/Login';
import CreateEditModal from './components/CreateEditModal';


const auth = new AuthService('v9P8Ehko9qtNgpFuEY-uYrmrr8puOyOy', 'kjs2b.auth0.com');

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={CreateEditModal} />
            <Route path='/list' component={Adventures} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

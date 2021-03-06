import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import AuthService from './utils/AuthService'
import Adventures from './components/Adventures';
import TopBar from './components/TopBar';
//import Callback from './components/Callback';
//import Login from './components/Login';


// const auth = new AuthService('v9P8Ehko9qtNgpFuEY-uYrmrr8puOyOy', 'kjs2b.auth0.com');

// const requireAuth = (nextState, replace) => {
//   if (!auth.loggedIn()) {
//     replace({ pathname: '/login' });
//   }
// }

const App = () => {
  return (
    <Router>
      <div className='container'>
        <TopBar />
        <Switch>
          <Route path='/' component={Adventures} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

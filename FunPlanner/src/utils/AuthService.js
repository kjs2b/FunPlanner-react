import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'

export default class AuthService {
  constructor(clientID, domain) {
    //Configure Auth
    this.lock = new Auth0Lock(clientID, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/login',
        responseType: 'token'
      }
    });
    //Add callback for authenticated event
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    this.login = this.login.bind(this);
  }

  _doAuthentication(authResult) {
    //Save user token
    this.setToken(authResult.idToken);
    //navigate to home route
    browserHistory.replace('/home');
  }

  login() {
    this.lock.show();
  }

  loggedIn() {
    return !!this.getToken();
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }
}
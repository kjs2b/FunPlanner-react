import { Component } from 'react';
import { setIdToken, setAccessToken } from '../utils/AuthService';

export default class Callback extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/";
  }

  render() {
    return null;
  }
}

import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../utils/AuthService'

export class Login extends React.Component {
  render() {
    const { auth } = this.props
    return (
      <div>
        <h2>Login</h2>
      </div>
    )
  }
}

export default Login;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';

const Nav = () => (
  <div style={styles.navBarStyle}>
    <h2 style={styles.headerStyle}>Fun Planner</h2>
    <div>
       { 
         (isLoggedIn()) ? ( <button style={styles.buttonStyle} onClick={() => logout()}>Log out </button> ) : ( <button style={styles.buttonStyle} onClick={() => login()}>Log In</button> )
       }
    </div>
  </div>
);

export default Nav;

const styles = {
  navBarStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0'
  },
  buttonStyle: {
    fontSize: '16px',
    marginTop: '15px'
  },
  headerStyle: {
    fontSize: '44px',
    fontFamily: 'Calibri'
  }
}
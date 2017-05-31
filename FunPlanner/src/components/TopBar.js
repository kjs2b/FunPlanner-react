import React from 'react';
import { NavLink } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';

const TopBar = () => (
  <div style={styles.navBarStyle}>
    <div style={styles.headerContainer}>
      <h2 style={styles.headerStyle}>Fun Planner</h2>
    </div>
    <div style={styles.logButtonContainer}>
       { 
         (isLoggedIn()) ? ( <button style={styles.buttonStyle} onClick={() => logout()}>Log out </button> ) : ( <button style={styles.buttonStyle} onClick={() => login()}>Log In</button> )
       }
    </div>
  </div>
);

export default TopBar;

const styles = {
  navBarStyle: {
    display: 'flex',
  },
  buttonStyle: {
    fontSize: '16px',
    marginTop: '15px'
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '50%'
  },
  headerStyle: {
    fontSize: '44px',
    fontFamily: 'Calibri'
  },
  logButtonContainer: {
    width: '50%',
    height: '40px',
    display: 'flex',
    justifyContent: 'flex-end',
  }
}
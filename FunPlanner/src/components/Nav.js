import React from 'react';
import { NavLink } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';

const Nav = () => (
  <ul className='nav'>
    <li>
      <NavLink activeClassName='active' to='/list'>
        View Adventures
      </NavLink>
    </li>
    <li>
     { 
       (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
     }
    </li>
  </ul>
);

export default Nav;
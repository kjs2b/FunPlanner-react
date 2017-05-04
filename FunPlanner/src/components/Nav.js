import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul className='nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>
        Add Adventure
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/list'>
        List
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/map'>
        Map
      </NavLink>
    </li>
  </ul>
);

export default Nav;
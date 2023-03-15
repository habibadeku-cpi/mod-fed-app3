import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <ul>
         <li className='active'>
          <Link to='/'>Remote Home</Link>
        </li>
        <li className='active'>
          <Link to='/spaces'>Spaces</Link>
        </li>
        <li>
        <Link to='/people'>People</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
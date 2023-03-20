import React from 'react';
import { Link } from 'react-router-dom';
import ExternalAppLink from './ExternalAppLink';

const NavBar = () => {
  return (
    <div className='nav'>
      <ul>
         <li className='active'>
          <Link to='/remote2/'>Remote Home</Link>
        </li>
        <li className='active'>
          <Link to='/remote2/spaces'>Spaces</Link>
        </li>
        <li>
        <Link to='/remote2/people'>People</Link>
        </li>
      </ul>
      <p></p>
      <ExternalAppLink to='/remote1/spaces' name="Remote1 Spaces" />
    </div>
  );
};

export default NavBar;
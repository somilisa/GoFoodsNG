import React from 'react';
import { NavLink } from 'react-router-dom';
import GoFoodsNG from '../GoFoodsNG.svg';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          <img src={GoFoodsNG} alt='GoFoodsNG logo' className='logo'></img>
        </NavLink>
        <ul className='nav-links'>
          
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to='/cocktail:id'
              className={({ isActive }) => (isActive ? 'active' : 'link')}
            >
              Products
            </NavLink> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

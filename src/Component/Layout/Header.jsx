import React, { useState } from 'react';
import SDRUploader from '../ViewLayout/SDRUploader'; // Import the SDRUploader component
import {Link, NavLink} from 'react-router-dom';
import TowerUploade from '../ViewLayout/TowerUploade';

const Header = ({ logo, setting = false, route, sdrUploader }) => {
console.log("-------------h----------");
  return (
    <section>
    <div className='header pb-4 pt-4' >
    <img alt="logo" className="navbar-brand-img" src={logo} />
      <nav>
      {route.map((item,key)=>(
        
        <Link to={item.layout+item.path} key={key}>
          <li>{item.name}</li>
          </Link>
      ))
    }
      <Link to='/'><li>Setting</li></Link>
      </nav>
    </div>
    </section>
  );
};

export default Header;

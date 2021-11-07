import React from 'react';
import logo from '../../img/logo2.png';
import { NavigationStyled } from './styles.js';


const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <ul className="nav-items">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">FAQs</a>
        </li>
        <li>
          <a href="#">Activity</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
          <div className="primary-btn">GET CONNECTED</div>
      </ul>
    </NavigationStyled>
  )
}

export default Navigation

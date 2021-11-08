import React from 'react';
import logo from '../../img/logo2.png';
import { NavigationStyled } from './styles.js';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <NavigationStyled>
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <ul className="nav-items">
        <li>
         <a href="/home">Home</a>
        </li>
        <li>
         <a href="about">About</a>
        </li>
        <li>
         <a href="prices">Ofertas</a>
        </li>
        <li>
         <a href="contact">Contact</a>
        </li>
          <div className="primary-btn">Conecte-se</div>
      </ul>
    </NavigationStyled>
  )
}

export default Navigation

import * as React from 'react';
import logo from './logo.png';
import './Header.scss';

export const Header: React.FC<any> = () => (
  <div className='header'>
    <div className='header__logo'>
      <img src={logo} className='header__logo__img' />
    </div>
    <div className='header__menu'>
      <ul>
        <li>Purchase</li>
        <li>My Orders</li>
        <li>Sell</li>
      </ul>
    </div>
  </div>
);

import React from 'react';
import './Header.css';
import Logo from '../../src/images/Logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/About">About</a>
                <a href="/Order">Order</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;
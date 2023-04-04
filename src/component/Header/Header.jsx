import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;
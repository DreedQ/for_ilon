import React from 'react';
import logo from '../images/logo.png'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='logo_box'>
                <div className="logo">
                    <img src={logo} alt="Logo" className='logo_img' />
                </div>
            </div>
            <ul className='nav__links'>
                <li>Главная</li>
                <li>Технология</li>
                <li>График полётов</li>
                <li>Гарантии</li>
                <li>О компании</li>
                <li>Контакты</li>
            </ul>
        </div>
    );
}

export default NavBar;

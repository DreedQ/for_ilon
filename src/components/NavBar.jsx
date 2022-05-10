// import { isVisible } from '@testing-library/user-event/dist/utils';
import React from 'react';
import logo from '../images/logo.png'
import { useState } from 'react';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(true);
    const changeShows = () => { setShowMenu(!showMenu) }
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
            <div className="menu__btn" onClick={changeShows}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z" fill='#fff' /></svg>
                <ul className={`nav__links_menu ${showMenu ? 'hiden' : ''}`} >
                    <li>Главная</li>
                    <li>Технология</li>
                    <li>График полётов</li>
                    <li>Гарантии</li>
                    <li>О компании</li>
                    <li>Контакты</li>
                </ul>
            </div>

        </div >
    );
}

export default NavBar;

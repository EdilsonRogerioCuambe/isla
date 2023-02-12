import React from 'react';
import './BarraLateral.css';

import {
    logo,
} from '../../assets';

const BarraLateral = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={logo} alt="logo" />
            </a>
            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        <li className='natv__item'>
                            <a href="#home" className='nav__link'>
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className='natv__item'>
                            <a href="#sobre" className='nav__link'>
                                <i className="icon-user"></i>
                            </a>
                        </li>
                        <li className='natv__item'>
                            <a href="#servicos" className='nav__link'>
                                <i className="icon-briefcase">

                                </i>
                            </a>
                        </li>
                        <li className='natv__item'>
                            <a href="#curriculo" className='nav__link'>
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className='natv__item'>
                            <a href="#portfolio" className='nav__link'>
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                        <li className='natv__item'>
                            <a href="#blog" className='nav__link'>
                                <i className="icon-note"></i>
                            </a>
                        </li>
                        <li className='natv__item'>
                            <a href="#contato" className='nav__link'>
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="nav__footer">
                <span className='copyright'>&copy; 2023.</span>
            </div>
        </aside>
    )
}

export default BarraLateral;
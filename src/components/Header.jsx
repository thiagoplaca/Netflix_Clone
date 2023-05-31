import React from "react";
import './Header.css'

import Logo from '../images/logo.png'
import User from '../images/user.png'

const Header = ({black}) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className="header_logo">
                <a href="/">
                    <img src={Logo} alt="Logo Netflix" />
                </a>
            </div>
            <div className="header_user">
                <a href="/">
                    <img src={User} alt="Logo Usuário" />
                </a>
            </div>
        </header>
    )
}

export default Header
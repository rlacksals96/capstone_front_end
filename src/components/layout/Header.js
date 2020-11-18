import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/Header.css';

const Header = ({ onLogout }) => (
    <div className="header">
        <Link to={"/"}>
            <div className="logo">LOGO</div>
        </Link>
        {/*<div className="logout">*/}
        {/*    logout..?*/}
        {/*</div>*/}
    </div>
);

export default Header;
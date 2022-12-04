import React, {useState} from 'react'

import "./Header.scss";
import Logo from '../../assets/Logo/BrainFlix-logo.svg'
import UploadIcon from '../../assets/Icons/upload.svg'
import User from '../../assets/Images/Mohan-muruge.jpg'

import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="header">
                {/* link is breaking logo automargin */}
                <Link to='/'>
                    <img className="header__logo " src={Logo} alt="BrainFlix-logo"></img>
                </Link>
                <form className="header__search-form ">
                    <button className="header__search-icon" type="submit">Search</button>
                    <input className="header__search-entry" type="text" placeholder="Search..." name="search"/>
                </form>
                <Link to='/upload'>
                    <button className="header__upload-button " type="file">
                        <img className="header__upload-icon" src={UploadIcon}></img>
                        <p className="header__upload-text">UPLOAD</p>
                    </button>
                </Link>
                <img className="header__user-avatar " src={User} alt="userAvatar"/>
            </header>
        </>
    );
}
export default Header;

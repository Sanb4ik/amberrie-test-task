import React from 'react';
import logo from "../../images/Header/Amberrie_logo.svg";
import '../../styles/Header/Header.css'
import Input from "./Input";
import SocialNetworks from "./SocialNetworks";
import HeaderButtons from "./HeaderButtons";

const Header = () => {

    return (

        <header className='header'>
            <img className='header__logo' src={logo} />
            <SocialNetworks/>
            <Input/>
            <HeaderButtons/>
        </header>
    );
};

export default Header;

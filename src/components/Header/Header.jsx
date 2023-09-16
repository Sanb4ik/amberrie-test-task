import React, {useEffect, useRef, useState} from 'react';
import logo from "../../images/Header/Amberrie_logo.svg";
import '../../styles/Header/Header.css'
import Input from "./Input";
import SocialNetworks from "./SocialNetworks";
import HeaderButtons from "./HeaderButtons";
import useSticky from "../../hooks/useSticky";

const Header = () => {
    const isHeaderSticky = useSticky()

    return (

        <header id='header' className='header' style={{backgroundColor: `${isHeaderSticky ? 'white' : ''}`}} >
            <img className='header__logo' src={logo} />
            <SocialNetworks/>
            <Input/>
            <HeaderButtons/>
        </header>
    );
};

export default Header;

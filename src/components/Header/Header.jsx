import React from 'react';
import logo from "../../images/Header/Amberrie_logo.svg";
import bell from "../../images/Header/bell.svg";
import basket from "../../images/Header/basket.svg";
import profile from "../../images/Header/profile.svg";
import '../../styles/Header.css'
import Input from "./Input";
import SocialNetworks from "./SocialNetworks";

const Header = () => {

    return (

        <header className='header'>
            <img className='header__logo' src={logo} />
            <SocialNetworks/>
            <Input/>
            <div className='header_buttons'>
                <div className="header_button">
                    <p>3</p>
                    <img src={bell}/>
                </div>
                <div className="header_button">
                    <p>3</p>
                    <img src={basket}/>
                </div>
                <div >
                    <img src={profile}/>
                </div>
            </div>
        </header>
    );
};

export default Header;

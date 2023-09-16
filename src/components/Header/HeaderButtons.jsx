import React from 'react';
import bell from "../../images/Header/bell.svg";
import basket from "../../images/Header/basket.svg";
import profile from "../../images/Header/profile.svg";
import '../../styles/Header/HeaderButtons.css'

const HeaderButtons = () => {
    return (
        <div className='header_buttons'>
            <div className="header_button">
                <p>3</p>
                <img src={bell} className='header_button_img'/>
            </div>
            <div className="header_button">
                <p>3</p>
                <img src={basket} className='header_button_img'/>
            </div>
            <div className="header_button">
                <img src={profile} className='header_button_profile_img'/>
            </div>
        </div>
    );
};

export default HeaderButtons;

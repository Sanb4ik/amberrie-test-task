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
    );
};

export default HeaderButtons;

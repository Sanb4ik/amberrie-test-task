import React, {useState} from 'react';
import logo from "../images/Amberrie_logo.svg";
import vk from "../images/vk.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import telegram from "../images/telegram.svg";
import twitch from "../images/twitch.svg";
import tiktok from "../images/tik-tok.svg";
import like from "../images/like.svg";
import ok from "../images/ok.svg";
import avito from "../images/avito.svg";
import yamap from "../images/yamap.svg";
import discord from "../images/discord.svg";
import twitter from "../images/twitter.svg";
import facebook from "../images/facebook.svg";
import twogis from "../images/twogis.svg";
import soundCloud from "../images/soundClound.svg";
import steam from "../images/steam.svg"
import arrow_down from "../images/down_arrow.svg";
import whiteArrowUp from "../images/whiteArrowUp.svg";
import search from "../images/search.svg";
import bell from "../images/bell.svg";
import basket from "../images/basket.svg";
import profile from "../images/profile.svg";
import '../styles/Header.css'
import Input from "./Input";

const Header = () => {
    const [showBlock, setShowBlock] = useState(false);

    const handleButtonClick = () => {
        setShowBlock(!showBlock); // Переключаем состояние блока при клике
    };

    return (
        <>
        <header>
            <img className='header__logo' src={logo} alt={'afsd'}/>
            <div className="header_menu">
                <div className='logos'>
                    <img src={vk} className={'logo'} alt={'afsd'}/>
                    <img src={instagram} className={'logo'} alt={'afsd'}/>
                    <img src={youtube} className={'logo'} alt={'afsd'}/>
                    <img src={telegram} className={'logo'} alt={'afsd'}/>
                    <img src={twitch} className={'logo'} alt={'afsd'}/>
                    <img src={tiktok} className={'logo'} alt={'afsd'}/>
                    <img src={like} className={'logo'} alt={'afsd'}/>
                    <img src={ok} className={'logo'} alt={'afsd'}/>
                    {
                        showBlock
                            ?
                            <button className='header__button button_orange' onClick={handleButtonClick}>
                                <img src={whiteArrowUp}  />
                            </button>
                            :
                            <button className='header__button button_grey' onClick={handleButtonClick}>
                                <img src={arrow_down} />
                            </button>
                    }
                </div>
                {
                    showBlock &&
                        <div className='logos'>
                            <img src={avito} className={'logo'} alt={'afsd'}/>
                            <img src={yamap} className={'logo'} alt={'afsd'}/>
                            <img src={discord} className={'logo'} alt={'afsd'}/>
                            <img src={twitter} className={'logo'} alt={'afsd'}/>
                            <img src={facebook} className={'logo'} alt={'afsd'}/>
                            <img src={twogis} className={'logo'} alt={'afsd'}/>
                            <img src={soundCloud} className={'logo'} alt={'afsd'}/>
                            <img src={steam} className={'logo'} alt={'afsd'}/>
                            <button className='header__button _hidden' onClick={handleButtonClick}>
                                <img src={arrow_down} className={ 'arrow_down'} alt={'afsd'}/>
                            </button>
                        </div>
                }
                <div className='logos_name'>
                    <div>ВКонта</div>
                    <div>Instagr*</div>
                    <div>Youtube</div>
                    <div>Telegra</div>
                    <div>Twitch</div>
                    <div>Tik-Tok</div>
                    <div>Likee</div>
                    <div>Однокл</div>
                    <div>Еще...</div>
                </div>
            </div>
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
        <div className={''}>

        </div>
    </>
    );
};

export default Header;

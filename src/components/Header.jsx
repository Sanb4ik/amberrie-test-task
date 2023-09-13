import React from 'react';
import logo from "../images/Amberrie_logo.svg";
import vk from "../images/vk.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import telegram from "../images/telegram.svg";
import twitch from "../images/twitch.svg";
import tiktok from "../images/tik-tok.svg";
import like from "../images/like.svg";
import ok from "../images/ok.svg";
import arrow_down from "../images/down_arrow.svg";
import search from "../images/search.svg";
import bell from "../images/bell.svg";
import basket from "../images/basket.svg";
import profile from "../images/profile.svg";
import '../styles/Header.css'

const Header = () => {
    return (
        <>
        <header>
            <img src={logo} alt={'afsd'}/>
            <div className='logos'>
                <img src={vk} className={'logo'} alt={'afsd'}/>
                <img src={instagram} className={'logo'} alt={'afsd'}/>
                <img src={youtube} className={'logo'} alt={'afsd'}/>
                <img src={telegram} className={'logo'} alt={'afsd'}/>
                <img src={twitch} className={'logo'} alt={'afsd'}/>
                <img src={tiktok} className={'logo'} alt={'afsd'}/>
                <img src={like} className={'logo'} alt={'afsd'}/>
                <img src={ok} className={'logo'} alt={'afsd'}/>
                <button className='header__button'>
                    <img src={arrow_down} className={ 'arrow_down'} alt={'afsd'}/>
                </button>
            </div>
            {/*плагин фигмы создал этот усток с инпутом*/}
            <div style={{width: 431, height: 44, paddingRight: 10.50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                <div style={{width: 420.50, height: 44, paddingTop: 3, paddingBottom: 3, paddingRight: 4, background: 'white', boxShadow: '4px 6px 18px rgba(75.44, 60.66, 68.75, 0.20)', borderRadius: 22, border: 'none', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{paddingLeft: 15, paddingRight: 15, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex'}}>
                        <div style={{width: 22, height: 36, position: 'relative', borderRadius: 8, overflow: 'hidden'}}>
                            <div style={{width: 21.32, height: 21.36, position: 'absolute'}}>
                                <img src={search}/>
                            </div>
                        </div>
                        <input style={{color: 'rgba(0, 0, 0, 0.40)', height: 44, border: 'none', fontSize: 16, fontFamily: 'Roboto', fontWeight: '300', lineHeight: 16, wordWrap: 'break-word'}} placeholder={'Что накручиваем?'}></input>
                    </div>
                    <div style={{justifyContent: 'flex-end', alignItems: 'center', gap: 15, display: 'flex'}}>
                        <div style={{paddingLeft: 14, paddingRight: 14, paddingTop: 10, paddingBottom: 10, background: '#F1EAEE', borderRadius: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex', height: 36}}>
                            <div style={{color: 'white', fontSize: 16, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Найти</div>
                        </div>
                    </div>
                </div>
            </div>
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

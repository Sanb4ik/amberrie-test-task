import React, {useState} from 'react';
import vk from "../../images/Header/vk.svg";
import instagram from "../../images/Header/instagram.svg";
import youtube from "../../images/Header/youtube.svg";
import telegram from "../../images/Header/telegram.svg";
import twitch from "../../images/Header/twitch.svg";
import tiktok from "../../images/Header/tik-tok.svg";
import like from "../../images/Header/like.svg";
import ok from "../../images/Header/ok.svg";
import NetworkMenu from "./NetworkMenu";
import useSticky from "../../hooks/useSticky";


function IconItem({logo, index}){
    const isHeaderSticky = useSticky()


    return (
        <div className='dropdown'>
            <img src={logo}
                 className={'logo_img'}
                 style={{backgroundColor: `${isHeaderSticky ? '#F0F1F2' : ''}`}} />
             <NetworkMenu left={`${44*index+ 9*index}rem`}/>
        </div>
    )
}

const IconsList = () => {
    const icons = [vk, instagram, youtube, telegram, twitch, tiktok, like, ok]

    return (
        <>
            {icons.map((item, index) => (
                <IconItem key={index} logo={item} index={index}/>
            ))}
        </>
    );
};

export default IconsList;

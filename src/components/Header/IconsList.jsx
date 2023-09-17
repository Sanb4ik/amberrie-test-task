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


function IconItem({img, name, index}){
    const isHeaderSticky = useSticky()


    return (
        <div className='dropdown' key={name}>
            <img src={img}
                 className={'logo_img'}

                 style={{backgroundColor: `${isHeaderSticky ? '#F0F1F2' : ''}`}} />
             <NetworkMenu left={`${44*index+ 9*index}rem`} name={name}/>
        </div>
    )
}

const IconsList = () => {
    const icons = [
        {img:vk, name: 'ВКонтакте'},
        {img: instagram, name: 'Instagram*'},
        {img: youtube, name: 'Youtube'},
        {img: telegram, name: 'Telegram'},
        {img: twitch, name: 'Twitch'},
        {img: tiktok, name: 'Tik-Tok'},
        {img: like, name: 'Likee'},
        {img: ok, name: 'Однноклассники'},
    ]

    return (
        <>
            {icons.map((icon, index) => (
                <IconItem key={index} img={icon.img} name={icon.name} index={index} />
            ))}
        </>
    );
};

export default IconsList;

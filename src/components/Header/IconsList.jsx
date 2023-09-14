import React from 'react';
import vk from "../../images/Header/vk.svg";
import instagram from "../../images/Header/instagram.svg";
import youtube from "../../images/Header/youtube.svg";
import telegram from "../../images/Header/telegram.svg";
import twitch from "../../images/Header/twitch.svg";
import tiktok from "../../images/Header/tik-tok.svg";
import like from "../../images/Header/like.svg";
import ok from "../../images/Header/ok.svg";

const IconsList = () => {
    return (
        <>
            <img src={vk} className={'logo_img'} />
            <img src={instagram} className={'logo_img'}/>
            <img src={youtube} className={'logo_img'} />
            <img src={telegram} className={'logo_img'} />
            <img src={twitch} className={'logo_img'} />
            <img src={tiktok} className={'logo_img'} />
            <img src={like} className={'logo_img'} />
            <img src={ok} className={'logo_img'} />
        </>
    );
};

export default IconsList;

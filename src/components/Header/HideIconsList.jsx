import React from 'react';
import avito from "../../images/Header/avito.svg";
import yamap from "../../images/Header/yamap.svg";
import discord from "../../images/Header/discord.svg";
import twitter from "../../images/Header/twitter.svg";
import facebook from "../../images/Header/facebook.svg";
import twogis from "../../images/Header/twogis.svg";
import soundCloud from "../../images/Header/soundClound.svg";
import steam from "../../images/Header/steam.svg";

const HideIconsList = () => {
    return (
        <>
            <img src={avito} className={'logo_img'} />
            <img src={yamap} className={'logo_img'} />
            <img src={discord} className={'logo_img'} />
            <img src={twitter} className={'logo_img'} />
            <img src={facebook} className={'logo_img'} />
            <img src={twogis} className={'logo_img'} />
            <img src={soundCloud} className={'logo_img'} />
            <img src={steam} className={'logo_img'} />
        </>
    );
};

export default HideIconsList;

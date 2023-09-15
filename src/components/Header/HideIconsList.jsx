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

    const elements = [avito, yamap, discord, twitter, facebook, twogis, soundCloud, steam]

    const logos = elements.map(el=> {return <img src ={el} className={"logo_img"} />})


    return (
        <>
            {logos}
        </>
    );
};

export default HideIconsList;

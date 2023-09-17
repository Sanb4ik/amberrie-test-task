import React from 'react';
import avito from "../../images/Header/avito.svg";
import yamap from "../../images/Header/yamap.svg";
import discord from "../../images/Header/discord.svg";
import twitter from "../../images/Header/twitter.svg";
import facebook from "../../images/Header/facebook.svg";
import twogis from "../../images/Header/twogis.svg";
import soundCloud from "../../images/Header/soundClound.svg";
import steam from "../../images/Header/steam.svg";
import useSticky from "../../hooks/useSticky";
import NetworkMenu from "./NetworkMenu";


function IconItem({img, index, name}){
    const isHeaderSticky = useSticky()


    return (
        <div className='dropdown'>
            <img src={img}
                 className={'logo_img'}
                 style={{backgroundColor: `${isHeaderSticky ? '#F0F1F2' : ''}`}} />
            <NetworkMenu left={`${44*index+ 9*index}rem`} name={name}/>
        </div>
    )
}

const HideIconsList = () => {

    const icons = [
        {img: avito, name: 'Авито'},
        {img: yamap, name: 'Яндекс.Карты'},
        {img: discord, name: 'Discord'},
        {img: twitter, name: 'Twitter'},
        {img: facebook, name: 'Facebook*'},
        {img: twogis, name: '2Гис'},
        {img: soundCloud, name: 'SoundCloud'},
        {img:steam, name: 'Steam'}
    ]

    // const logos = elements.map(el=> {
    //     return <img src ={el} className={"logo_img __down"} />}
    // )


    return (
        <>
            {icons.map((item, index) => (
                <IconItem key={index} img={item.img} index={index} name={item.name}/>
            ))}
        </>
    );
};

export default HideIconsList;

import React from 'react';
import avito from "../../images/Header/avito.svg";
import yamap from "../../images/Header/yamap.svg";
import discord from "../../images/Header/discord.svg";
import twitter from "../../images/Header/twitter.svg";
import facebook from "../../images/Header/facebook.svg";
import twogis from "../../images/Header/twogis.svg";
import soundCloud from "../../images/Header/soundClound.svg";
import steam from "../../images/Header/steam.svg";
import rightArrow from "../../images/Header/rightArrow.svg";

import '../../styles/Header/NetworkMenu.css'
import SecondNetworkMenu from "./SecondNetworkMenu";
import NetworkMenu from "./NetworkMenu";
import like from "../../images/Header/unfillLike.svg";
import voice from "../../images/Header/voice.svg";
import subscribers from "../../images/Header/subscriber.svg";
import view from "../../images/view.svg";
import repost from "../../images/Header/repost.svg";

function NetworkAction(){
    return(
        <div className='dropdown_content_second'>
            <div className='network_menu'>

                <div className="network_menu_item__container">
                    <div className='network_menu__item'>
                        <img src={like} className='network_menu_item_img'/>
                        <p>Лайки</p>
                    </div>
                    <div className='second_menu_button'>
                        <img src={rightArrow} className='right_arrow_img' />
                        <SecondNetworkMenu/>
                    </div>


                </div>
                <div className="network_menu_item__container">
                    <div className='network_menu__item'>
                        <img src={voice} className='network_menu_item_img'/>
                        <p>Голоса</p>
                    </div>
                </div>
                <div className="network_menu_item__container">
                    <div className='network_menu__item'>
                        <img src={subscribers} className='network_menu_item_img'/>
                        <p>Подписчики</p>
                    </div>
                </div>
                <div className='network_menu_item__container'>
                    <div className='network_menu__item'>
                        <img src={view} className='network_menu_item_img'/>
                        <p>Просмотры</p>
                    </div>
                    <div className='second_menu_button'>
                        <img src={rightArrow} className='right_arrow_img' />
                        <SecondNetworkMenu/>
                    </div>
                </div>
                <div className="network_menu_item__container">
                    <div className='network_menu__item'>
                        <img src={repost} className='network_menu_item_img'/>
                        <p>Репосты</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

function NetworkMenuItem({item}){
    console.log(item.text)
    return(
    <div className="network_menu_item_container">
        <div className='network_menu_item'>
            <img src={item.img} className='network_menu_item_img'/>
            <p>{item.text}</p>
        </div>
        <div className='second_menu_button_more'>
            <img src={rightArrow} className='right_arrow_img' />
            <NetworkAction/>
        </div>
    </div>
    )
}

const MoreNetworks = () => {
    const networks = [
        {img: yamap, text: 'Яндекс.Карты'},
        {img: avito, text: 'Авито'},
        {img: discord, text: 'Discord'},
        {img: twitter, text: 'Twitter'},
        {img: twogis, text: '2Гис'},
        {img: facebook, text: 'Facebook*'},
        {img: soundCloud, text: 'SoundCloud'},
        {img: steam, text: 'Steam'},
    ]
    return (
        <div className='dropdown-content'>
            <div className='network_menu'>
                {
                    networks.map((item, index) => (
                        <NetworkMenuItem key={index} item={item}/>
                    ))
                }
            </div>
        </div>
    );
};

export default MoreNetworks;

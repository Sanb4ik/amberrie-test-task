import React, {useEffect, useState} from 'react';
import '../../styles/Input.css'
import search from "../../images/Header/search.svg";
import vk from '../../images/Header/vk.svg'
import ok from '../../images/Header/ok.svg'
import instagram from '../../images/Header/instagram.svg'
import youtube from '../../images/Header/youtube.svg'
import likee from '../../images/Header/like.svg'
import tiktok from '../../images/Header/tik-tok.svg'
import telegram from '../../images/Header/telegram.svg'
import round_cross from '../../images/round_cross.svg'
import {useBlur, useRemoveBlur, useSetBLur} from "../../store/BlurContext";
import useSticky from "../../hooks/useSticky";
import useInput from "../../hooks/useInput";


function SearchResultItem({item}){
    return (
        <div className='search_result_card'>
            <img src={item.img} className='search_result_card_img'></img>
            <div className='search_card_info'>
                <div className='search_card_info_text'>
                    {item.name} {item.text}
                </div>
                <div className='search_card_info_price'>
                    11,30 - 14,24 ₽ / 100 шт
                </div>
            </div>
            <img src={round_cross} className='card_close'></img>
        </div>
    )
}

function SearchResults(){
    const results = [
        {img: vk, text: 'Лайки', name: 'ВКонтакте'},
        {img: ok, text: 'Лайки на комментарии', name: 'Одноклассники'},
        {img: instagram, text: 'Подписчики', name: 'Instagram*'},
        {img: youtube, text: 'Просмотры', name: 'Youtube'},
        {img: telegram, text: 'Реакции', name: 'Telegram'},
        {img: likee, text: 'Лайки', name: 'Likee'},
        {img: tiktok, text: 'Лайки', name: 'Tik-Tok'},
        {img: tiktok, text: 'Просмотры', name: 'Tik-Tok'},
        {img: tiktok, text: 'Подписчики', name: 'Tik-Tok'},
        {img: tiktok, text: 'Комментари', name: 'Tik-Tok'},
        {img: tiktok, text: 'Репосты', name: 'Tik-Tok'},

    ]

    return(
        <div className='search_result_container'>
            {results.map((item, index) => (
                <SearchResultItem key={index} item={item}/>
            ))}
        </div>
    )
}

const Input = () => {
    const query = useInput("");
    const blur = useBlur()
    const isHeaderSticky = useSticky()
    const handleBlur = useSetBLur()
    const removeBlur = useRemoveBlur()

    return (
        <div className='search_container' style={{backgroundColor: `${isHeaderSticky ? '#F7F8FA' : ''}`}}>
            <img className='search_icon' src={search}/>
            <input className='header_input' type='search' onFocus={handleBlur}  onBlur={removeBlur} placeholder='Что накручиваем?' {...query}/>
            {blur && <SearchResults/>}
            <button style={{backgroundColor: `${isHeaderSticky ? '#F0F1F2' : ''}`}}>Найти</button>
        </div>
    );
};

export default Input;

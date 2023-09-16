import React, {useContext, useState} from 'react';
import '../../styles/Input.css'
import search from "../../images/Header/search.svg";
import {BlurContext} from "../../App";
import {useBlur, useRemoveBlur, useSetBLur} from "../../store/BlurContext";
import useSticky from "../../hooks/useSticky";

const Input = () => {
    const blur = useBlur()
    const isHeaderSticky = useSticky()
    const handleBlur = useSetBLur()
    const removeBlur = useRemoveBlur()

    return (
        <div className='search_container' style={{backgroundColor: `${isHeaderSticky ? '#F7F8FA' : ''}`}}>
            <img className='search_icon' src={search}/>
            <input className='header_input' type='search' onFocus={handleBlur} onBlur={removeBlur}/>
            <button style={{backgroundColor: `${isHeaderSticky ? '#F0F1F2' : ''}`}}>Найти</button>
            <div className='blur'></div>
        </div>
    );
};

export default Input;

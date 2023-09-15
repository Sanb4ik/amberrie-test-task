import React from 'react';
import '../../styles/Input.css'
import search from "../../images/Header/search.svg";

const Input = () => {
    return (
        <div className='search_container'>
            <img className='search_icon' src={search}/>
            <input className='header_input' type='search' />
            <button>Найти</button>
            <div className='blur'></div>
        </div>
    );
};

export default Input;

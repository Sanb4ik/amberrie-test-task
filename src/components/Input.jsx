import React from 'react';
import '../styles/Input.css'
import search from "../images/search.svg";

const Input = () => {
    return (
        <div className='search_container'>
            <img className='search_icon' src={search}/>
            <input type='search' />
            <button>Найти</button>
        </div>
    );
};

export default Input;

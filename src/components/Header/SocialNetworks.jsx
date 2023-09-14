import React, {useState} from 'react';
import whiteArrowUp from "../../images/Header/whiteArrowUp.svg";
import arrow_down from "../../images/Header/down_arrow.svg";
import NameList from "./NameList";
import IconsList from "./IconsList";
import HideIconsList from "./HideIconsList";

const SocialNetworks = () => {
    const [showBlock, setShowBlock] = useState(false);
    const handleButtonClick = () => {
        setShowBlock(!showBlock); // Переключаем состояние блока при клике
    };

    const upIconNames = ['ВКонта', 'Instagr*', 'Youtube', 'Telegra', 'Twitch', 'Tik-Tok', 'Likee', 'Однокл', 'Еще...']
    const downIconNames = ['Авито', 'Я.Карты', 'Discord', 'Twitter', 'Facebo*', '2ГИС', 'SoundCl', 'Steam']

    return (
        <div className="header_menu">
            <div className='logos'>
                <IconsList/>
                {
                    showBlock
                        ?
                        <button className='header__button button_orange' onClick={handleButtonClick}>
                            <img src={whiteArrowUp}  />
                        </button>
                        :
                        <button className='header__button button_grey' onClick={handleButtonClick}>
                            <img src={arrow_down} />
                        </button>
                }
            </div>
            {
                showBlock &&
                <div className='logos logos_down'>
                    <HideIconsList/>
                    <button className='header__button _hidden'/>
                </div>
            }
            <NameList iconNames={upIconNames} className={'logos_name up'}/>
            <NameList iconNames={downIconNames} className={'logos_name down'}/>
        </div>
    );
};

export default SocialNetworks;

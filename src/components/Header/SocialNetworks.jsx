import React, {useState} from 'react';
import whiteArrowUp from "../../images/Header/whiteArrowUp.svg";
import arrow_down from "../../images/Header/down_arrow.svg";
import '../../styles/Header/SocialIcons.css'
import NameList from "./NameList";
import IconsList from "./IconsList";
import HideIconsList from "./HideIconsList";
import NetworkMenu from "./NetworkMenu";
import MoreNetworks from "./MoreNetworks";
import useSticky from "../../hooks/useSticky";

const SocialNetworks = () => {
    const [showBlock, setShowBlock] = useState(false);
    const isSticky =useSticky()
    const handleButtonClick = () => {
        setShowBlock(!showBlock);
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
                        <button className='header__button_more button_orange' onClick={handleButtonClick}>
                            <img src={whiteArrowUp} className='header__button_more_img'/>
                            {isSticky && <div className='for_sticky'></div>}
                        </button>
                        :
                        <button className='header__button_more button_grey ' onClick={handleButtonClick}>
                            <img src={arrow_down}  className='header__button_more_img'/>
                            <MoreNetworks/>
                        </button>
                }
            </div>
            {
                showBlock &&
                <div className='logos logos_down'>
                    <HideIconsList/>
                    <NetworkMenu/>
                    <button className='header__button _hidden'/>
                </div>
            }

            <NameList iconNames={upIconNames} className={'logos_name up'} showBlock={showBlock} up={true}/>
            <NameList iconNames={downIconNames} className={'logos_name down'} showBlock={showBlock} up={false}/>
        </div>
    );
};

export default SocialNetworks;

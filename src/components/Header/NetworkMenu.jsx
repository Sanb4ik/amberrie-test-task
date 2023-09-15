import React, {useState} from 'react';
import '../../styles/Header/NetworkMenu.css'
import like from '../../images/Header/unfillLike.svg'
import rightArrow from '../../images/Header/rightArrow.svg'
import voice from '../../images/Header/voice.svg'
import subscribers from '../../images/Header/subscriber.svg'
import repost from '../../images/Header/repost.svg'
import view from '../../images/view.svg'
import SecondNetworkMenu from "./SecondNetworkMenu";

const NetworkMenu = () => {

    const [showBlock, setShowBlock] = useState()
    const handleButtonClick = () => {
        setShowBlock(!showBlock);
    };
    return (
        <div className='network_menu'>
            <div className="network_menu_hat">
                ВКонтакте
            </div>
            <div className="network_menu_item">
                <div className='text_img'>
                    <img src={like}/>
                    <p>Лайки</p>
                </div>
                <img src={rightArrow} className='right_arrow_img' />
            </div>
            <div className="network_menu_item">
                <div className='text_img'>
                    <img src={voice}/>
                    <p>Голоса</p>
                </div>
            </div>
            <div className="network_menu_item">
                <div className='text_img'>
                    <img src={subscribers}/>
                    <p>Подписчики</p>
                </div>
            </div>
            <div className={`network_menu_item ${showBlock ? '_hover': ''}`}>
                <div className='text_img'>
                    <img src={view}/>
                    <p>Просмотры</p>
                </div>
                <img src={rightArrow} className='right_arrow_img' onClick={handleButtonClick}/>
                {showBlock && <SecondNetworkMenu/>}
            </div>
            <div className="network_menu_item">
                <div className='text_img'>
                    <img src={repost}/>
                    <p>Репосты</p>
                </div>
            </div>

        </div>
    );
};

export default NetworkMenu;

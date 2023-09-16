import React, {useState} from 'react';
import '../../styles/Header/NetworkMenu.css'
import like from '../../images/Header/unfillLike.svg'
import rightArrow from '../../images/Header/rightArrow.svg'
import voice from '../../images/Header/voice.svg'
import subscribers from '../../images/Header/subscriber.svg'
import repost from '../../images/Header/repost.svg'
import view from '../../images/view.svg'
import SecondNetworkMenu from "./SecondNetworkMenu";

const NetworkMenu = (left, show, setShow) => {

    return (
        <div className='dropdown-content'>
            <div className='network_menu' style={{left: `${left.left}`}}>
                <div className="network_menu_hat"  >
                    ВКонтакте
                </div>
                <div className="network_menu_item_container">
                    <div className='network_menu_item'>
                        <img src={like} className='network_menu_item_img'/>
                        <p>Лайки</p>
                    </div>
                    <div className='second_menu_button'>
                        <img src={rightArrow} className='right_arrow_img' />
                        <SecondNetworkMenu/>
                    </div>


                </div>
                <div className="network_menu_item_container">
                    <div className='network_menu_item'>
                        <img src={voice} className='network_menu_item_img'/>
                        <p>Голоса</p>
                    </div>
                </div>
                <div className="network_menu_item_container">
                    <div className='network_menu_item'>
                        <img src={subscribers} className='network_menu_item_img'/>
                        <p>Подписчики</p>
                    </div>
                </div>
                <div className='network_menu_item_container'>
                    <div className='network_menu_item'>
                        <img src={view} className='network_menu_item_img'/>
                        <p>Просмотры</p>
                    </div>
                    <div className='second_menu_button'>
                    <img src={rightArrow} className='right_arrow_img' />
                    <SecondNetworkMenu/>
                </div>
                </div>
                <div className="network_menu_item_container">
                    <div className='network_menu_item'>
                        <img src={repost} className='network_menu_item_img'/>
                        <p>Репосты</p>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default NetworkMenu;

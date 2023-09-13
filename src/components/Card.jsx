import React from 'react';
import vk from "../images/vk.svg";
import view from "../images/view.svg";
import comments from "../images/comments.svg";
import button_arrow from "../images/button_arrow.svg";
import '../styles/Card.css'

const Card = () => {
    return (
        <div className='card'>
            <div className='card_cap'>
                <img className='grid__item_logo' src={vk}/>
                <p className='grid__item_p'>ВКонтакте</p>
            </div>
            <div className='views'>
                <div className='view_hat'>
                    <div className='view_hat_logo'>
                        <img src={view}/>
                        <p>Просмотры</p>
                    </div>
                    <p>750 - 1421 ₽ / 100 шт</p>
                </div>
                <div className="price_container">
                    <div className="price_item">
                        <div className='price_item_amount'>5000 шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-21%</div>
                            <div className='price_item_cost'>97 ₽</div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>10 000 шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-28%</div>
                            <div className='price_item_cost effect'>
                                <p className='cost_rotate'>176 ₽</p>
                            </div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>30 000 шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-34%</div>
                            <div className='price_item_cost'>485 ₽</div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>100к шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-40%</div>
                            <div className='price_item_cost'>1 470 ₽</div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>1м шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-28%</div>
                            <div className='price_item_cost effect'>
                                <p className='cost_rotate'>10 045 ₽</p>
                            </div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>10м шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-73%</div>
                            <div className='price_item_cost'>66 150 ₽</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='views'>
                <div className='view_hat'>
                    <div className='view_hat_logo'>
                        <img src={comments}/>
                        <p>Лайки на<br/>
                            комментарии
                        </p>
                    </div>
                    <p>750 - 1421 ₽ / 100 шт</p>
                </div>
                <div className="price_container">
                    <div className="price_item">
                        <div className='price_item_amount'>5000 шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-21%</div>
                            <div className='price_item_cost'>97 ₽</div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>10 000 шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-28%</div>
                            <div className='price_item_cost effect'>
                                <p className='cost_rotate'>176 ₽</p>
                            </div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>30 000 шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-34%</div>
                            <div className='price_item_cost'>485 ₽</div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>100к шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-40%</div>
                            <div className='price_item_cost'>1 470 ₽</div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>1м шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-28%</div>
                            <div className='price_item_cost effect'>
                                <p className='cost_rotate'>10 045 ₽</p>
                            </div>
                        </div>
                    </div>
                    <div className="price_item">
                        <div className='price_item_amount'>10м шт</div>
                        <div className='price_item_spec'>
                            <div className='price_item_sale'>-73%</div>
                            <div className='price_item_cost'>66 150 ₽</div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='card_button_container'>
                <button className='card_button'>Ещё услуги
                    <img src={button_arrow}/>
                </button>
            </div>

        </div>
    );
};

export default Card;

import main from './images/main_image.svg'
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header/Header";
import Card from "./components/Card";
import React, {useEffect} from "react";
import {BlurProvider, useBlur} from "./store/BlurContext";
import {SearchResult} from "./components/Header/Input";



function Container(){
    const blur = useBlur()

    useEffect(()=>{
        console.log('blur added', blur)
    }, [blur])
    return(
        <div className='container' style={{ filter: `${blur}`}}>
            <div className="content">
                <main>
                    <h1>Накрутка и продвижение в социальных сетях</h1>
                    <p>
                        СММ накрутка подписчиков, лайков, просмотров<br/>
                        по приятной цене. В продвижении задействуется<br/>
                        реалистичная аудитория. Здесь качество, гарантия<br/>
                        и безопасность на всех этапах!
                    </p>
                    <div className='sale'>
                        {/*<img src={sale}/>*/}
                        <div className= 'sale_info'>
                            <p className='sale_info p'>Ваш <br/>примиум <br/>промокод</p>
                            <h3>001</h3>
                        </div>
                        <button>Начать<br/> накрутку</button>
                    </div>
                </main>
                <img src={main}/>
            </div>
            <section className='sales__section'>
                <div className='sales__hits'>
                    <p>Хиты продаж</p>
                    <div className='price_switch'>
                        <p>Цена за</p>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round">
                                        <p style={{color:'#FF5C00'}}>1 шт</p><p> 100 шт</p>
                                    </span>
                        </label>
                    </div>
                </div>
                <div className='grid_container'>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
        </div>
    )
}

function App() {
    const handleScroll = (event) => {
        // You can access scroll-related information from the event object

        console.log('Scroll position:');
    }

    return (
        <BlurProvider>
        <div className="App" onScroll={handleScroll}>
            <Nav/>
            <Header />
            <Container/>
        </div>
        </BlurProvider>
    );
}



export default App;

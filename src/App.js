import main from './images/main_image.svg'
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";


function App() {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <div className='container'>

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
                        <div className='price_swith'>
                            <p>Цена за</p>
                            <label className="switch">
                                <input type="checkbox"/>
                                    <span className="slider round"></span>
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
        </div>
    );
}

export default App;

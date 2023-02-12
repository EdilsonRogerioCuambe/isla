import React from 'react';
import './Home.css';
import CabecalhoSociais from './CabecalhoSociais';
import { blackwoman } from '../../assets';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className='intro'>
                <img src={blackwoman} alt="isla" className='home__img' />
                <h1 className='home__name'>Isla Isaque</h1>
                <span className="home__education">Eu sou uma Cientista Biologa</span>
                <CabecalhoSociais />
                <a href="#contato" className="btn">Contrate-me</a>
                <ScrollDown />
            </div>
            <Shapes />
        </section>
    )
}

export default Home;
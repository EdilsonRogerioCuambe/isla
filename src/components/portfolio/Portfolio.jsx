import React, { useState } from 'react';
import "./Portfolio.css";
import Menu from './Menu';

const Portfolio = () => {

    const [items, setItems] = useState(Menu);

    const filterItem = (categoria) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.categoria === categoria;
        });
        setItems(updatedItems);
    }

    return (
        <section id='portfolio' className='trabalho container section'>
            <h2 className='section__title'>Trabalhos recentes</h2>
            <div className='trabalho__filters'>
                <span className="trabalho__item" onClick={() => setItems(Menu)}>Tudo</span>
                <span className="trabalho__item" onClick={() => filterItem('application')}>Preenchimento</span>
                <span className="trabalho__item" onClick={() => filterItem('criacao')}>Criação/Edição</span>
                <span className="trabalho__item" onClick={() => filterItem('treinamento')}>Treinamentos</span>
            </div>

            <div className="trabalho__container grid">
                {items.map((item) => {
                    const { id, imagem, titulo, categoria } = item;
                    return (
                        <div className="trabalho__card" key={id}>
                            <div className='trabalho__thumbnail'>
                                <img src={imagem} alt="trabalho" className='trabalho__img' />
                                <div className="trabalho__mask"></div>
                            </div>

                            <span className='trabalho__categoria'>{categoria}</span>
                            <h3 className='trabalho__title'>{titulo}</h3>
                            <a href="#" className='trabalho__button'>
                                <i className='icon-link trabalho__button-icon'></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio;

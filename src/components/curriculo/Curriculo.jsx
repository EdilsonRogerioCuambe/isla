import React from 'react';
import './Curriculo.css';
import Data from './Data';
import Card from './Card';

const Curriculo = () => {
    return (
        <section id='curriculo' className="curriculo section container">
            <h2 className="section__title">Experiencia profissional</h2>
            <div className="curriculo__container grid">
                <div className="timeline grid">
                    {Data.map((item, id) => {
                        if (item.categoria === 'educacao') {
                            return (
                                <Card
                                    key={id}
                                    icone={item.icone}
                                    ano={item.ano}
                                    titulo={item.titulo}
                                    desc={item.desc}
                                />
                            )
                        }
                    })}
                </div>

                <div className="timeline grid">
                    {Data.map((item, idx) => {
                        if (item.categoria === 'experiencia') {
                            return (
                                <Card
                                    key={idx}
                                    icone={item.icone}
                                    ano={item.ano}
                                    titulo={item.titulo}
                                    desc={item.desc}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default Curriculo;
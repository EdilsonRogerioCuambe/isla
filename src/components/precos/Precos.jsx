import React from 'react';
import './Precos.css';
import {
    price1,
    price2,
    price3,
} from '../../assets';

const Precos = () => {
    return (
        <section id='precos' className='precos container section'>
            <h2 className='section__title'>Preços</h2>

            <div className="precos__container grid">
                <div className='precos__item'>
                    <img src={price1} alt="precos" />
                    <h3 className='precos__plan'>Basico</h3>
                    <p className='precos__title'>
                        Preenchimento do application destacando as suas principais qualidades.
                    </p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>30 <span>Mes</span>
                    </h3>
                    <a href="" className='btn'>Iniciar</a>
                </div>

                <div className='precos__item'>
                    <img src={price2} alt="precos" />
                    <h3 className='precos__plan'>Avançado</h3>
                    <p className='precos__title'>Suporte na produção do video para o application.</p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>55 <span>Mes</span>
                    </h3>
                    <a href="" className='btn'>Iniciar</a>
                </div>

                <div className='precos__item best'>
                    <span className='badge'>Recomendado</span>
                    <img src={price3} alt="precos" />
                    <h3 className='precos__plan'>Premium</h3>
                    <p className='precos__title'>Simulações da entrevista com agencia, familia e consulado.</p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>75 <span>Mes</span>
                    </h3>
                    <a href="" className='btn'>Iniciar</a>
                </div>
            </div>
        </section>
    )
}

export default Precos;
import React from 'react';
import './Precos.css';
import {
    servico,
    computer,
    online,
} from '../../assets';

const ServicosAvulsos = () => {
    return (
        <section id='precos' className='precos container section'>
            <h2 className='section__title'>Serviços avulsos</h2>

            <div className="precos__container grid">
                <div className='precos__item'>
                    <img
                        src={servico}
                        alt="precos"
                        style={{
                            width: '60%',
                            height: '60%',
                            objectFit: 'cover',
                        }}
                    />
                    <h3 className='precos__plan'>Serviço</h3>
                    <p className='precos__title'>
                        Curso intensivo de Inglês
                    </p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>100,00 <span>Mês</span>
                    </h3>
                    <a href="https://wa.me/+558597399427?text=Olá" className='btn'>Iniciar</a>
                </div>

                <div className='precos__item best'>
                    <img
                        src={computer}
                        alt="precos"
                        style={{
                            width: '60%',
                            height: '60%',
                            objectFit: 'cover',
                        }}
                    />
                    <h3 className='precos__plan'>Serviço</h3>
                    <p className='precos__title'>
                        Roteiro do vídeo em inglês e Edição do vídeo
                    </p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>75,00 <span>Mês</span>
                    </h3>
                    <a href="https://wa.me/+558597399427?text=Olá" className='btn'>Iniciar</a>
                </div>

                <div className='precos__item'>
                    <img 
                        src={online} 
                        alt="precos"
                        style={{
                            width: '60%',
                            height: '60%',
                            objectFit: 'cover',
                        }} 
                    />
                    <h3 className='precos__plan'>Serviço</h3>
                    <p className='precos__title'>
                        Revisão de application (brevemente)
                    </p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>70,00 <span>Mês</span>
                    </h3>
                    <a href="https://wa.me/+558597399427?text=Olá" className='btn'>Iniciar</a>
                </div>
            </div>
        </section>
    )
}

export default ServicosAvulsos;
import React from 'react';
import './Precos.css';
import {
    price1,
    price2,
    price3,
    bonus,
    servico
} from '../../assets';

const Precos = () => {
    return (
        <section id='precos' className='precos container section'>
            <h2 className='section__title'>Preços</h2>

            <div className="precos__container grid">
                <div className='precos__item'>
                    <img src={price1} alt="precos" />
                    <h3 className='precos__plan'>Básico</h3>
                    <p className='precos__title'>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0',
                            }}
                        >
                            <li>Preenchimento de application;</li>
                            <li>Preenchimento de informações pessoais;</li>
                            <li>Destaque dos seus pontos fortes;</li>
                            <li>Escolha da foto de perfil;</li>
                            <li>Correção e preenchimento das referências;</li>
                            <li>Correção do application gramatical em inglês;</li>
                            <li>Checklist de cada etapa do processo;</li>
                        </ul>
                    </p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>130,00 <span>Mês</span>
                    </h3>
                    <a href="https://wa.me/+558597399427?text=Olá" className='btn'>Iniciar</a>
                </div>

                <div className='precos__item best'>
                    <span className='badge'>Recomendado</span>
                    <img src={price3} alt="precos" />
                    <h3 className='precos__plan'>Premium</h3>
                    <p className='precos__title'>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0',
                            }}
                        >
                            <li>Orientação para todo o processo: Inscrição até o embarque;</li>
                            <li>Curso intensivo de inglês;</li>
                            <li>Escolha da agência e inscrição no programa;</li>
                            <li>Preenchimento do application em inglês;</li>
                            <li>Criação do roteiro do vídeo em inglês;</li>
                            <li>Edição do vídeo;</li>
                            <li>Criação da carta em inglês;</li>
                            <li>Criação da colagem de fotos;</li>
                            <li>Treinamento para entrevista com a agência;</li>
                            <li>Treinamento para entrevista com a host family;</li>
                            <li>Treinamento para entrevista no consulado;</li>
                            <li>Orientações para o embarque;</li>
                            <li>Checklist de cada etapa do processo.</li>
                        </ul>
                    </p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>499,00 <span>Mês</span>
                    </h3>
                    <a href="https://wa.me/+558597399427?text=Olá" className='btn'>Iniciar</a>
                </div>

                <div className='precos__item'>
                    <img src={price2} alt="precos" />
                    <h3 className='precos__plan'>Avançado</h3>
                    <p className='precos__title'>
                        <ul
                            style={{
                                listStyle: 'none',
                                padding: '0',
                                margin: '0',
                            }}
                        >
                            <li>Preenchimento do application em inglês;</li>
                            <li>Criação do roteiro do vídeo em inglês;</li>
                            <li>Edição do vídeo;</li>
                            <li>Criação da carta em inglês;</li>
                            <li>Criação da colagem de fotos;</li>
                            <li>Checklist de cada etapa do processo.</li>
                        </ul>
                    </p>
                    <p className='precos__support'>Suporte pelo whatsapp</p>
                    <h3 className='preco'>
                        <em>R$</em>199,00 <span>Mês</span>
                    </h3>
                    <a href="https://wa.me/+558597399427?text=Olá" className='btn'>Iniciar</a>
                </div>
            </div>
        </section>
    )
}

export default Precos;
import React from 'react';
import './Sobre.css';
import { isla } from '../../assets';

const Sobre = () => {
    return (
        <section id='sobre' className="sobre container section">
            <h2 className="section__title">Idealizadora</h2>

            <div className="sobre__container grid">
                <img src={isla} alt="sobre" className="sobre__img" />

                <div className='sobre__data grid'>
                    <div className="sobre__info">
                        <p className="sobre__description">
                            Isla Teasse, atual Au Pair nos Estados Unidos, licenciada em Ciências Biológicas. Nascida em Moçambique, poliglota, empreendedora. Participa do programa desde 2022 cuidando de uma menina em New Jersey. Ela é uma pessoa calorosa, sempre pronta para ajudar ao próximo e tem um sorriso contagiante. Muito optimista e aventureira por natureza, sempre buscando por novas descobertas e desafios. Além disso, é extremamente dedicada e sempre dá seu melhor em tudo o que faz.
                            Criou a consultoria para divulgar o programa e ajudar a todas as meninas que desejam participar, já que é uma oportunidade única que pode transformar a vida de muitas meninas, já que para algumas o programa é um divertimento enquanto para outras é o início da mudança da vida de muitas famílias.
                        </p>
                    </div>

                    <div className="sobre__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className='skills__name'>Design</h3>
                                <span className='skills__number'>100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className='skills__name'>Informatica</h3>
                                <span className='skills__number'>100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage informatica"></span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className='skills__name'>Marketing Digital</h3>
                                <span className='skills__number'>75%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage marketing__digital"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Sobre;
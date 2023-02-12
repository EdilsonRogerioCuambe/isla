import React from 'react';
import './Sobre.css';
import { woman } from '../../assets';
import SobreCaixa from './SobreCaixa';

const Sobre = () => {
    return (
        <section id='sobre' className="sobre container section">
            <h2 className="section__title">Sobre mim</h2>

            <div className="sobre__container grid">
                <img src={woman} alt="sobre" className="sobre__img" />

                <div className='sobre__data grid'>
                    <div className="sobre__info">
                        <p className="sobre__description">
                            Eu sou uma jovem altamente capacitada, com uma licenciatura em Ciências Biológicas.
                            Atualmente, estou vivendo uma experiência única como Au Pair nos Estados Unidos, onde estou aprimorando suas habilidades interpessoais e linguísticas.
                            Eu sou uma pessoa calorosa, sempre pronta para ajudar ao próximo e tem um sorriso contagiante.
                            Eu sou otimista e aventureira por natureza, sempre buscando novas descobertas e desafios.
                            Além disso, eu sou extremamente dedicada e sempre dou o meu melhor em tudo o que faço.
                        </p>
                        <a href="" className="btn">Baixar CV</a>
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

            <SobreCaixa />
        </section>
    )
}

export default Sobre;
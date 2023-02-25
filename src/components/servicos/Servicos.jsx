import React from 'react';
import './Servicos.css';
import {
    application,
    video,
    treinamento,
} from '../../assets';

import SobreCaixa from '../sobre/SobreCaixa';
import "../sobre/Sobre.css";

const data = [
    {
        id: 1,
        imagem: application,
        titulo: 'Preenchimento de Application',
        descricao: 'Preenchimento de application destacando suas principais qualidades. Construimos um perfil personalizado que passe a essencia e personalidade da candidatura.',
    },
    {
        id: 2,
        imagem: video,
        titulo: 'Criação e edição de video application',
        descricao: 'O video application é de longe uma das etapas mais importantes de todo o application, na maioria das agencias, bem antes da familia explorar o application, ela assiste o video. Nossa principal preocupação é todos elementos do video (A roupa, cenario, pronuncia e edição) transmitam para o host family quem é a candidata.',
    },
    {
        id: 3,
        imagem: treinamento,
        titulo: 'Treinamento',
        descricao: 'Oferecemos simulações de entrevista com a agencia, entrevista com a famila e a entrevista no consulado.',
    }
]

const Servicos = () => {
    return (
        <section id='servicos' className='servicos container section'>
            <h2 className='section__title'>Pacotes</h2>

            <div className="servicos__container grid">
                {data.map(({ id, imagem, titulo, descricao }) => {
                    return (
                        <div key={id} className="servicos__card">
                            <img src={imagem} alt="servico" className='servicos__img'/>
                            <h3 className='servicos__title'>{titulo}</h3>
                            <p className='servicos__description'>{descricao}</p>
                        </div>
                    );
                })}
            </div>
            <SobreCaixa />
        </section>
    )
}

export default Servicos;
import React from 'react';
import './PerguntasFrequentes.css';

const PerguntasFrequentes = () => {
    return (
        <section
            className="perguntas container section" id='perguntas'
        >
            <h2 className="section-title">Perguntas Frequentes</h2>
            <div className="perguntas__container grid">
                <div className="perguntas__card">
                    <h3 className="perguntas__title">Como funciona o processo de candidatura?</h3>
                    <p className="perguntas__description">
                        O processo de candidatura é dividido em 3 etapas: Application, Entrevista e Consulado. A primeira etapa é o preenchimento do application, que é um documento que contem todas as informações sobre a candidata. A segunda etapa é a entrevista com a agencia, onde a candidata ira conversar com um representante da agencia e responder algumas perguntas. A terceira etapa é a entrevista no consulado, onde a candidata ira conversar com um representante do consulado e responder algumas perguntas.
                    </p>
                </div>
                <div className="perguntas__card">
                    <h3 className="perguntas__title">Quanto tempo demora para ser aprovada?</h3>
                    <p className="perguntas__description">
                        O tempo de espera para ser aprovada varia de agencia para agencia, mas em geral demora de 2 a 3 meses.
                    </p>
                </div>
                <div className="perguntas__card">
                    <h3 className="perguntas__title">Quanto tempo dura o programa?</h3>
                    <p className="perguntas__description">
                        O programa dura de 12 a 24 meses.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default PerguntasFrequentes;
import React from 'react';
import './Home.css';
import CabecalhoSociais from './CabecalhoSociais';
import { aupair } from '../../assets';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className='intro'>
                <img src={aupair} alt="isla" className='home__img' />
                <h1 className='home__name'>Consultoria Au Pair de Sucesso</h1>
                <span className="home__education">Na consultoria Au Pair de Sucesso, te ajudamos a construir um application forte que destaque suas qualidades para que você tenha um perfil de encher sua caixa de mensagens de host families te procurando.
                    Nos especializamos em sugestões e orientações personalizadas para chamar atenção das famílias certas  e te destacar dentre os candidatos da competição para morar nos Estados Unidos.
                    Durante o processo para participar do programa surgem inúmeras dúvidas com relação ao application, ao video application, ás entrevistas, dentre outras, a consultoria te ajuda a resolver todas essas questoes de forma simples e com menos stress.</span>
                <CabecalhoSociais />
                <a href="#contato" className="btn">Contrate nos</a>
                <ScrollDown />
            </div>
            {/**<Shapes /> */}
        </section>
    )
}

export default Home;
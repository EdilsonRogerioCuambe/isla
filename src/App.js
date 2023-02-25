import React from 'react';
import "./App.css";
import {
    Home,
    Sobre,
    Servicos,
    Portfolio,
    Curriculo,
    BarraLateral,
    Contato,
    Blog,
    Testemunhos,
    Precos,
    PerguntasFrequentes,
    ServicosAvulsos
} from './components';

const App = () => {
    return (
        <>
            <BarraLateral />
            <main className='main'>
                <Home />
                <Servicos />
                <Sobre />
                {/* <Curriculo /> */}
                <Portfolio />
                <Precos />
                <ServicosAvulsos />
                <Testemunhos />
                <Blog />
                <PerguntasFrequentes />
                <Contato />
            </main>
        </>
    )
}

export default App;
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
    Precos
} from './components';

const App = () => {
    return (
        <>
            <BarraLateral />
            <main className='main'>
                <Home />
                <Sobre />
                <Servicos />
                <Curriculo />
                <Portfolio />
                <Precos />
                <Testemunhos />
                <Blog />
                <Contato />
            </main>
        </>
    )
}

export default App;
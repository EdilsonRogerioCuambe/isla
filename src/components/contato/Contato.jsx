import React, { useRef } from 'react';
import './Contato.css';
import emailjs from '@emailjs/browser';




const Contato = () => {

    const form = useRef();

    const sendEmail = (e) => {

        emailjs.sendForm('service_dzex9jr', 'template_lucdh68',
            form.current, 'g4PmQBt4j6-tYfmxl')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section className='contato container section' id='contato'>
            <h2 className='section-title'>Entre em Contato</h2>
            <div className='contato__container grid'>
                <div className='contato__info'>
                    <h3 className='contato__title'>Vamos tomar um café</h3>
                    <p className='contato__details'>Não gosta de formularios? Me envie um email.</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className='contato__form'>
                    <div className='contato__form-group'>
                        <div className='contato__form-div'>
                            <input type='text' name='name' id='name' placeholder='Nome' className='contato__form-input' />
                        </div>

                        <div className='contato__form-div'>
                            <input type='email' name='email' id='email' placeholder='Email' className='contato__form-input' />
                        </div>
                    </div>
                    <div className='contato__form-div'>
                        <input type='text' name='assunto' id='assunto' placeholder='Assunto' className='contato__form-input' />
                    </div>
                    <div className='contato__form-div contato__form-area'>
                        <textarea placeholder='Sua mensagem' name='' id='' cols="30" rows="10" className='contato__form-input'>

                        </textarea>
                    </div>
                    <button 
                        className='btn'
                        type='submit'
                        >
                            Enviar mensagem
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contato;
import React from 'react';
import './Testemunhos.css';
import {
    testemunho1,
    testemunho2,
} from '../../assets';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const data = [
    {
        id: 1,
        imagem: testemunho1,
        titulo: "Maria",
        subtitulo: "Au pair na Australia",
        comentario:
            "Eu gostei muito do serviço prestado pela empresa, o atendimento foi muito bom e o resultado foi muito satisfatório. Recomendo a todos que estão em busca de uma oportunidade de trabalho no exterior.",
    },
    {
        id: 2,
        imagem: testemunho2,
        titulo: "Joana",
        subtitulo: "Au pair na França",
        comentario:
            "Eu gostei muito do serviço prestado pela empresa, o atendimento foi muito bom e o resultado foi muito satisfatório. Recomendo a todos que estão em busca de uma oportunidade de trabalho no exterior.👍",
    },
];

const Testemunhos = () => {
    return (
        <section id='testemunhos' className='testemunhos container section'>
            <h2 className='section__title'>Clientes & Comentarios</h2>
            <Swiper 
                className="testemunhos__container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                grabCursor={true}
                >
                {data.map(({ id, imagem, titulo, subtitulo, comentario }) => {
                    return (
                        <SwiperSlide className='testemunhos__item' key={id}>
                            <div className='thumb'>
                                <img src={imagem} alt="testemunhos" className='testemunhos__img' />
                            </div>
                            <h3 className='testemunhos__title'>{titulo}</h3>
                            <span className='testemunhos__subtitle'>{subtitulo}</span>
                            <p className='testemunhos__comment'>{comentario}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testemunhos;
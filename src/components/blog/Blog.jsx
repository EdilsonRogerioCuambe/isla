import React from 'react';
import './Blog.css';

import {
    blog1,
    blog2,
    blog3,
} from '../../assets';

const Blog = () => {
    return (
        <section className='blog container section' id='blog'>
            <h3 className='section__title'>Ultimos posts</h3>
            <div className="blog__container grid">
                <div className='blog__card'>
                    <div className="blog__thumb">
                        <a href="#"><span className='blog__category'>Comentarios</span></a>
                        <a href="#"><img src={blog1} alt="blog" className='blog__img' /></a>
                    </div>
                    <div className='blog__details'>
                        <h3 className='blog__title'>Au pair de sucesso</h3>
                        <div className='blog__meta'>
                            <span>2 de fevereiro</span>
                            <span className='blog__dot'></span>
                            <span>Isla</span>
                        </div>
                    </div>
                </div>

                <div className='blog__card'>
                    <div className="blog__thumb">
                        <a href="#"><span className='blog__category'>Tutorial</span></a>
                        <a href="#"><img src={blog2} alt="blog" className='blog__img' /></a>
                    </div>
                    <div className='blog__details'>
                        <h3 className='blog__title'>Video application</h3>
                        <div className='blog__meta'>
                            <span></span>
                            <span className='blog__dot'>10 de fevereiro de 2022</span>
                            <span>Isla</span>
                        </div>
                    </div>
                </div>

                <div className='blog__card'>
                    <div className="blog__thumb">
                        <a href="#"><span className='blog__category'>Negocios</span></a>
                        <a href="#"><img src={blog3} alt="blog" className='blog__img' /></a>
                    </div>
                    <div className='blog__details'>
                        <h3 className='blog__title'>3 coisas para saber sobre au pair</h3>
                        <div className='blog__meta'>
                            <span></span>
                            <span className='blog__dot'>5 de fevereiro</span>
                            <span>Isla</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;
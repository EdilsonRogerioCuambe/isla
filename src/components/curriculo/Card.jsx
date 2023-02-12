import React from 'react';

const Card = (props) => {
    return (
        <div className="timeline__item">
            <i className={props.icone}></i>
            <span className='timeline__date'>{props.ano}</span>
            <h3 className='timeline__title'>{props.titulo}</h3>
            <p className='timeline__description'>{props.desc}</p>
        </div>
    )
}

export default Card;
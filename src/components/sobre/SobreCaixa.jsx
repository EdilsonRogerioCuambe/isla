import React from 'react';

const SobreCaixa = () => {
  return (
    <div className="sobre__caixas grid">
        <div className="sobre__caixa">
            <i className="sobre__icon icon-fire"></i>
            <div>
                <h3 className="sobre__title">3</h3>
                <span className="sobre__subtitle">Projetos Completos</span>
            </div>
        </div>

        <div className="sobre__caixa">
            <i className="sobre__icon icon-cup"></i>
            <div>
                <h3 className="sobre__title">10</h3>
                <span className="sobre__subtitle">Cafés</span>
            </div>
        </div>

        <div className="sobre__caixa">
            <i className="sobre__icon icon-people"></i>
            <div>
                <h3 className="sobre__title">5</h3>
                <span className="sobre__subtitle">Clientes satisfeitos</span>
            </div>
        </div>
    </div>
  )
}

export default SobreCaixa;
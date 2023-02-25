import React from 'react';

const CabecalhoSociais = () => {
  return (
    <div className="home__socials">
        <a target='_blank' href="https://www.instagram.com/eulaislabonita/" className="home__social-link">
            <i className="fa-brands fa-instagram"></i>
        </a>
        <a target='_blank' href="https://wa.me/+558597399427?text=Olá" className="home__social-link">
            <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a target='_blank' href="https://www.youtube.com/@laislabonitaaupair" className="home__social-link">
            <i className="fa-brands fa-youtube"></i>
        </a>
    </div>
  )
}

export default CabecalhoSociais;
import React from 'react';

import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../../images/logo.svg';
import './styles.css'

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div className="content">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Barra Bonita</strong>
          <span>Sāo Paulo</span>
        </div>

        <a href="!#" className="enter-app">
          <FiArrowRight size={34} color="rgba(0,0,0,0.6)" />
        </a>
      </div>
    </div>
  );
}

export default Landing;
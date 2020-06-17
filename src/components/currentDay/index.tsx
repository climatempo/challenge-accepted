import React from 'react';

import { Container, Info } from './styles';

import logo from '../../images/pouco-nublado.png';

const CurrentDay: React.FC = () => {
  return (
    <Container>
      <h3>Hoje</h3>
      <div className="temperature">
        <img src={logo} alt="icon" />
        <div className="temperature__info">
          <span className="temperature__info__max">20</span>
          <span className="temperature__info__min">/ 17</span>
          <span className="temperature__info__celsius">°C</span>
        </div>
      </div>
      <div className="others">
        <p>
          Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a
          qualquer hora.
        </p>
        <div className="others__probability">
          <Info bgColor="#F5EAEE">
            <div>
              <img
                src="https://img.icons8.com/carbon-copy/100/D784A0/keep-dry.png"
                alt=""
              />
            </div>
            <span>10mm</span>
          </Info>
          <Info bgColor="#D2EEFC">
            <div>
              <img
                src="https://img.icons8.com/ultraviolet/100/000000/wet.png"
                alt=""
              />
            </div>
            <span>70%</span>
          </Info>
        </div>
      </div>
    </Container>
  );
};

export default CurrentDay;

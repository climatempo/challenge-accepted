import React from 'react';

import { Img, Div, Div2, Div3} from './styles';

import logo from '../../images/logo.png';
import instaLogo from '../../images/instaLogo.png';
import faceLogo from '../../images/faceLogo.png';


function Main() {
    return(
        <>
        <Img src={logo} alt="ClimaTempo logo" />
        <Div3>
        <h2>Bem vindo(a) à Climatempo!</h2>
      
        <a
          href="/localidades" 
        >
          Descubra a previsão do tempo
        </a>
        </Div3>
        <Div>
        <h3>Sobre:</h3>
        <p>Climatempo é uma empresa brasileira que oferece serviços de Meteorologia,<br/> sediada na Vila Mariana, em São Paulo, SP.
           O embrião do que viria a ser o<br /> Climatempo surgiu na década de 1980 pelos meteorologistas Carlos Magno<br /> e Ana Lúcia 
           Frony, recém-chegados do Rio de Janeiro.</p>
        </Div>

        <Div2>
          <h5>Redes sociais</h5>
          <a href="https://www.instagram.com/climatempo/?hl=pt-br">
          <img src={instaLogo} alt="Instagram Logo" />
          </a>
          <a href="https://www.facebook.com/Climatempo.Meteorologia">
          <img src={faceLogo} alt="Facebook Logo" />
          </a>
        </Div2>
        </>
    );
}

export default Main;
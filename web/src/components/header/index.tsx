import logoImg from '~/assets/logo-white.png';

import { HeaderContainer } from './styles';

export const Header = () => {
   return (
      <HeaderContainer>
         <img src={logoImg} alt='' />
      </HeaderContainer>
   );
};

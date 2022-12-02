import { Banner } from '~/components/banner';
import { Header } from '~/components/header';
import { Content } from '~/pages/home/components/content';
import { HomeContainer } from './styles';

export const Home = () => {
   return (
      <HomeContainer>
         <Header />

         <Banner />

         <Content />
      </HomeContainer>
   );
};

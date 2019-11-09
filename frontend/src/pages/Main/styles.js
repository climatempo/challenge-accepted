import styled from 'styled-components';

export const Container = styled.header`
  display: flex; 
  justify-content: center; 
  align-items: center;
  flex-direction: column; 
  max-width: 700px; 
  margin: 0 auto;
`;

export const Header = styled.header`
  background: #004983;  
  display: flex; 
  justify-content: center; 
  align-items: center;
  width:100%;
  flex-direction: column; 

  img { 
    height:46px;
    padding: 10px 0;
    align-self: center;
  }

  Search{
    width: 100%;    
  }
`; 

export const Content = styled.main`
  display: flex; 
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  margin: 15px 0; 
  padding: 15px 0;  
`;
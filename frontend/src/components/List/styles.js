import styled from 'styled-components';

export const Weather = styled.ul`
  display: flex; 
  justify-content: center; 
  align-items: center;  
  flex-direction: column; 
  list-style: none;  
  border: 0;   
  margin: 20px auto;
  flex-grow: 1;
  padding: 0 15px;
  

  li {
    margin-top: 20px;
    padding:10px; 
    background: #fff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
    width: 100%;
    border-radius: 5px;
    
    span {     
      padding: 10px;
    }

    p {
      padding: 10px;
    }

    div {
      background: #ccc;
      display: flex; 
      justify-content: space-around; 
      align-items: center;
      padding: 10px 0; 
    }
  }
`;
import React from "react";
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;

const InputText = styled.input`
	padding: 10px;
  width: 100%;
  border: none !important;
  border-bottom: 2px solid #ccc !important;
  border-radius: 3px;
  &:focus {
    outline: 0;
  }
`;

const IncoSearch = styled.button`
		background-color: white;
    border: none;
    padding: 10px;
    text-decoration: none !important;
    margin: 4px 2px;
`;



const Input = (props) =>  {
		return (
      <form onSubmit={props.getCity}>
			<InputContainer>
				<InputText type="text" name="cityName" placeholder="Digite a cidade..."  />
				<IncoSearch>
          <img src={require('../img/search.png')}/>
        </IncoSearch>
			</InputContainer>
      </form>
		);
	}

export default Input;
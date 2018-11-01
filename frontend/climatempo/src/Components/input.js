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
		padding: 10px;
    color: white;
    min-width: 40px;
    text-align: center;
    background-image: url("../img/search.png'");
`;



const Input = (props) =>  {
		return (
      <form onSubmit={props.getCity}>
			<InputContainer>
				<InputText type="text" name="cityName" placeholder="Digite a cidade..."  />
				<IncoSearch />
			</InputContainer>
      </form>
		);
	}

export default Input;
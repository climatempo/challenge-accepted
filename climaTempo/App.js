import React, { Component } from 'react';
import styled from 'styled-components'
import Main from './app/scenes/Main'

export default class App extends Component {
  render() {
    return (
      <MainWrapper>
        <Main />
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.View `
  flex: 1;
`
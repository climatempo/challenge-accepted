import React from 'react'
import styled from 'styled-components'
import theme from '../../utils/theme'
import Search from './search'

const Logo = require('../../../assets/images/logo-white.png')

export default (props) => (
  <Wrapper>
    <ContainerLogo>
      <LogoImage source={Logo} />
    </ContainerLogo>    
    <Search loadData={props.loadData} functionEmptyResult={props.functionEmptyResult} firstSearch={props.firstSearch}/>
  </Wrapper>
)

const Wrapper = styled.View `
  flex: 0.8;
`
const ContainerLogo = styled.View `
  backgroundColor: ${theme.blueLight};
  flex: 0.5;
  alignItems: center;
  justifyContent: center;
`

const LogoImage = styled.Image `
  width: 150;
  height: 21;
`
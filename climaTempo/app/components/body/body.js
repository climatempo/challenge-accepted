import React, { createContext } from 'react'
import styled from 'styled-components'
import theme from '../../utils/theme'

const ImageSunRain = require('../../../assets/images/sun-rain.png')

export default class Body extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  async componentWillReceiveProps(newProps) {
    await this.setState({ data: newProps.data })
  }
  _renderItems() {
    if(!this.props.emptyResult && this.state.data.weather !== undefined) {
      return this.state.data.weather.map((item, index) => (
        <ContainerThumb key={index}>
          <Thumb>
            <FirstRow>
              <Image source={ImageSunRain}/>
              <Data>{item.dataFormat}</Data>
            </FirstRow>
            <SecondRow>
              <ColumnTemp>
                <TempTextMax>MAX</TempTextMax>
                <TempMaxValue>{item.temperature.max}</TempMaxValue>
              </ColumnTemp>
              <ColumnTemp>
                <TempTextMax>MIN</TempTextMax>
                <TempMinValue>{item.temperature.min}</TempMinValue>
              </ColumnTemp>
            </SecondRow>
            <ThirdRow>
              <WeatherDescription>
                {item.text}
              </WeatherDescription>
            </ThirdRow>
          </Thumb>          
        </ContainerThumb>
      ))
    } else {
      return (
        <ContainerTextEmpty>
          { this._renderMessage() }
        </ContainerTextEmpty>        
      )
    }
  }

  _renderMessage() {
    if (this.props.firstSearch) {
      return (
        <TextEmptyResult>Digite o nome da cidade</TextEmptyResult>
      ) 
    } else {
      return (
        <TextEmptyResult>Cidade não encontrada</TextEmptyResult>
      )
    }
  }
  render() {
    return (
      <Wrapper>
      { (this.state.data.locale !== undefined && !this.props.emptyResult) && 
        <CityState>Resultado para {this.state.data.locale.name} - {this.state.data.locale.state} </CityState>
      }        
        <WrapperHorizontal horizontal showsHorizontalScrollIndicator={false}>
          { this._renderItems() }
        </WrapperHorizontal>
      </Wrapper>
    )
  }
}


const Wrapper = styled.View `
  flex: 4;
  width: ${theme.width};
  backgroundColor: #e0e0e0;
`
const WrapperHorizontal = styled.ScrollView `
  flexDirection: row;
  flex: 1;
`

const ContainerThumb = styled.View `
  flex: 1;
`

const ContainerTextEmpty = styled.View `
  flex: 1;
  width: ${theme.width};
  justifyContent: center;
  alignItems: center;
`

const Thumb = styled.View `
  backgroundColor: white;
  width: ${theme.width - 80};
  height: ${theme.height / 1.8};
  borderRadius: 3;
  marginTop: 10;
  marginRight: 10;
  marginLeft: 10;
  marginBottom: 10;
`

const FirstRow = styled.View `
  alignItems: center;
  flexDirection: row;
  justifyContent: space-between;
  paddingHorizontal: 15;
  paddingVertical: 10;
  borderStyle: solid;
  borderBottomWidth: 0.5;
  borderBottomColor: ${theme.grayLight};
`

const Image = styled.Image `
  width: 87;
  height: 100;
`

const Data = styled.Text `
  fontSize: 28;
`

const SecondRow = styled.View `
  flexDirection: row;
  alignItems: center;
  justifyContent: space-evenly;
`


const ColumnTemp = styled.View `
  marginTop: 20;
  justifyContent: center;
  alignItems: center;
`

const TempValue = styled.Text `
  fontSize: 60;
`

const TempMaxValue = styled(TempValue) `
  color: #f96c6c;
`

const TempMinValue = styled(TempValue) `
  color: #196cb9;
`

const TempTextMax = styled.Text `
  fontSize: 38;
`

const ThirdRow = styled.View `

`

const WeatherDescription = styled.Text `
  borderStyle: solid;
  borderTopWidth: 0.5;
  borderTopColor: ${theme.grayLight};
  paddingHorizontal: 10;
  paddingTop: 10;
  fontSize: 12;
`

const TextEmptyResult = styled.Text `
  fontSize: 16;
`

const CityState = styled.Text `
  paddingLeft: 10;
  marginTop: 20;
  fontSize: 16;
`
import React from 'react'
import styled from 'styled-components'
import theme from '../../utils/theme'
import MainService from '../../actions/main'


export default class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      textSearch: '',
      data: {},
      cities: [],
    }
  }
  

  onChangeText(textSearch) {
    this.setState({ textSearch })
  }

  componentWillMount() {
    this.loadCity()
  }

  async loadCity() {
    const newData = await MainService.get()
    this.setState({ cities: newData })
  }

  async findCity() {
    const _cities = this.state.cities
    const city = _cities.find(item => item.name === this.state.textSearch)

    this.props.firstSearch()
    if (city === undefined) {
      this.props.functionEmptyResult(true)
      return
    }
    this.props.functionEmptyResult(false)
    const listWeather = await MainService.getWeather(city.id)
    this.props.loadData(listWeather)
  }

  render() {
    return (
    <Wrapper>
      <SearchInput
        value={this.state.textSearch} 
        underlineColorAndroid={theme.grayLight}
        onChangeText={(city) => this.onChangeText(city)}
        autoFocusef />
        <SearchButton onPress={() => this.findCity()}>
          <TextButtonSearch>Pesquisar</TextButtonSearch>
        </SearchButton>
    </Wrapper>
    )
  }
}

const Wrapper = styled.View `
  flex: 0.5;
  width: ${theme.width};
  backgroundColor: white;
  flexDirection: row;
  borderStyle: solid;
  borderWidth: 0.5;
  borderBottomColor: ${theme.grayLight};
`

const SearchInput = styled.TextInput `
  width: ${theme.width - 90} ;
  borderBottomWidth: 0;
  color: #000000;
`

const SearchButton = styled.TouchableOpacity `
  width: 70;
  height: 40;
  backgroundColor: ${theme.blueLight};
  borderStyle: solid;
  borderWidth: 0.5;
  borderTopColor: ${theme.grayLight};
  borderRightColor: ${theme.grayLight};
  borderBottomColor: ${theme.grayLight};
  borderLeftColor: ${theme.grayLight};
  borderRadius: 3;
  justifyContent: center;
  alignItems: center;
  marginLeft: 10;
  marginTop: 5;
`

const TextButtonSearch = styled.Text `
  color: white;
`

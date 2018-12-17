import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/header'
import Body from '../components/body/body'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      weather: {},
      emptyResult: false,
      firstSearch: true,
    }
  }

  async firstSearch() {
    await this.setState({ firstSearch: false })
  }

  async changeEmptyResult(bool) {
    await this.setState({ emptyResult: bool })
  }

  async loadData(listWeather) {
    if (listWeather !== undefined) {
      await this.setState({ weather: listWeather })
    } 
  }


  render() {
    return(
      <Wrapper>
        <Header loadData={this.loadData.bind(this)} functionEmptyResult={this.changeEmptyResult.bind(this)} firstSearch={this.firstSearch.bind(this)}/>
        <Body data={this.state.weather} emptyResult={this.state.emptyResult} firstSearch={this.state.firstSearch}/>
      </Wrapper>
    )
  }
}

const Wrapper = styled.View `
  flex: 1;
`

const Text = styled.Text `

`
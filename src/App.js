import React, { Component } from 'react'
import NavBar from './containers/forecast/components/navbar/NavBar'
import { BrowserRouter } from 'react-router-dom'
import './styles/css/style.css'
import Forecast from './containers/forecast/Forecast';
  
class App extends Component {
  render() {
    return (
        <div>
          <Forecast />
        </div>
    )
  }
}
export default App
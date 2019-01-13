import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import './App.css'
import Header from '../components/template/Header'
import Routes from './Routes'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app" id="wrapper">
            <Header />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>


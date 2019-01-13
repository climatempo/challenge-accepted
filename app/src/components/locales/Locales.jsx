import React, { Component } from 'react'
import axios from 'axios'
import Weather from '../weather/Weather'

const baseUrl = 'http://localhost:5000/locales?id='
const initialState = {
    locale: [],
    id: null
}

export default class Locales extends Component {

    constructor(props) {
        super(props)
        this.state = { ...initialState }
        this.updateField = this.updateField.bind(this)
    }

    componentWillMount() {
        axios.post(`${baseUrl}`).then(resp => {
            this.setState({ locale: resp.data })
        })
    }

    optionsSelect(){
        const optionsSelect = this.state.locale.map(locale => <option key={locale.id} value={locale.id}>{locale.name}</option>)
        return (
            optionsSelect
        )
    }

    updateField(locale) {
        return this.state.locale.map(s => {
            if(locale.toLowerCase() === s.name.toLowerCase()){
                this.setState({ id: s.id })
                return true
            } else if(locale === ''){
                this.setState({ id: null })
                return true
            } else {
                return false
            }
        })
    }

    getLocale(locale){
        const div = document.getElementById("erro")
        const update = this.updateField(locale).includes(true)
        if(!update){
            div.innerHTML = `Localização não encontrada: ${locale}`
        } else {
            div.innerHTML = ''
        }
    }

    renderForm() {
        return (
            <div id="search" className="col-12 search-line">
            <input id="locale" type="text" 
                onChange={ e => this.getLocale(document.getElementById("locale").value) }
                placeholder='Busque aqui uma cidade, Ex: São Paulo'/>
               <button className="search-lente"><i className="fa fa-search"></i></button>
               <span id="erro"></span>
            </div>
        )
    }

    render() {
        return (
            <React.Fragment>
                { this.renderForm() }
                <Weather localeId={this.state.id} />
            </React.Fragment>
        )
    }
}
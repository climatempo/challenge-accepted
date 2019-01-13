import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

const baseUrl = 'http://localhost:5000/weather'
const initialState = {
    localeWeather: [],
    id: null
}

export default class Weather extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ...initialState
        }
    }

    componentDidMount() {
        axios.post(`${baseUrl}?id=`).then(resp => {
            this.setState({ localeWeather: resp.data })
        })
    }


    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.id !== this.props.localeId && this.state.id !== this.props.localeId){
            this.setState({ id: this.props.localeId })
            if (this.props.localeId && this.props.localeId !== null) {
                axios.post(`${baseUrl}?id=${this.props.localeId}`).then(resp => {
                    this.setState({ localeWeather: [resp.data] })
                })
            } else {
                axios.post(`${baseUrl}?id=`).then(resp => {
                    this.setState({ localeWeather: resp.data })
                })
            }
        }
    }

    renderWeather() {
        return this.state.localeWeather.map(city => {
            return (
                <div className="city" key={city.locale.id}>
                    <h2 className="align-center"><i className="fa fa-map-marker"></i> Previsão para {city.locale.name} - {city.locale.state}</h2>
                    <section className="tiles">

                        {city.weather.map(day => {
                            let data = moment(day.date, "YYYY-MM-DD")
                            return <article className="style1" key={Date.parse(day.date)}>
                                <div className="dayCard">
                                    <div className="dayDateText">
                                        <strong className="dayDate">{data.format("DD/MM/YYYY")}</strong>
                                        <p className="dayText">{day.text}</p>
                                    </div>
                                    <div className="infos">
                                        <span className="tempMax"><i className="icon fa fa-thermometer-full" /> 
                                            {day.temperature.max}ºC</span>
                                        <span className="tempMin"><i className="icon fa fa-thermometer-1" /> 
                                            {day.temperature.min}ºC</span>
                                        <span className="rainPrep"><i className="icon fa fa-tint" /> 
                                            {day.rain.precipitation}mm</span>
                                        <span className="rainProb"><i className="icon fa fa-umbrella" /> 
                                            {day.rain.probability}%</span>
                                    </div>
                                </div>
                            </article>
                        })
                        }
                    </section>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.renderWeather()}
            </React.Fragment>

        )
    }
}
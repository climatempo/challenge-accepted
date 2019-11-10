import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap';
import logo from '../logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { config } from '../_configs/config';
import dateFormat from '../_helpers/date.helper';
import swal from 'sweetalert';

import min from '../icons/download.png';
import max from '../icons/upload.png';
import porChuva from '../icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';
import umidade from '../icons/raindrop-close-up.png';

export default class Wheater extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherData: [],
            location: '',
            loading: false
        };
    }

    componentDidMount() {
        try {
            /**Verifica se já existe salvo no Cache uma busca a ser exibida */
            if (localStorage.getItem('city')) {
                swal({
                    title: `Continuar com ${localStorage.getItem('city')}`,
                    text: `Você buscou anteriormente pela cidade  de ${localStorage.getItem('city')} deseja continuar para esta cidade?`,
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            this.locationOnchangeHandler(localStorage.getItem('city'));
                            this.searchOnclickHandler();
                        }
                    });
            }
        }
        catch (error) {
            console.error(error.message);
        }
    }

    locationOnchangeHandler = async (value) => {
        try {
            this.setState({ location: value });
        }
        catch (error) {
            console.error('Ocorreu um erro durante a renderização')
        }
    }

    searchOnclickHandler = async () => {
        try {
            this.setState({ loading: true })
            let weather = await axios.get(`${config.url}/weather/${this.state.location}`);
            this.setState({ weatherData: weather.data, loading: false });
            localStorage.setItem('city', this.state.location);
        }
        catch (error) {
            console.error('Ocorreu um erro durante a renderização', error);
        }
    }


    render() {
        return (
            this.state.weatherData ?
                <>
                    <Navbar bg="dark" variant="dark" className="bar-center">
                        <Navbar.Brand href="#home"><img src={logo} className="logo-climatempo" alt="Clima Tempo" /></Navbar.Brand>
                    </Navbar>

                    <div className="input-group form-inline-search">
                        <input type="text" className="form-control" placeholder="Cidade" aria-label="Cidade" aria-describedby="button-addon4" onChange={(event) => this.locationOnchangeHandler(event.target.value)} />
                        <div className="input-group-append" id="button-addon4">
                            <button className="btn btn-outline-secondary" type="button" onClick={() => this.searchOnclickHandler()} >
                                {
                                    this.state.loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <FontAwesomeIcon icon={faSearch} />
                                }
                            </button>
                        </div>
                    </div>
                    {
                        this.state.weatherData && this.state.weatherData.map((item, i) => {
                            return (
                                <div key={i} >
                                    <p className="city-label">{`Previsão do tempo para ${item.locale.name} - ${item.locale.state}`}</p>
                                    {
                                        item.weather && item.weather.map((previsao, index) => {
                                            return (
                                                <div className="card card-style" key={index} >
                                                    <div className="card-body">
                                                        <h5 className="card-title">{dateFormat(previsao.date)}</h5>
                                                        <h5 className="card-text-desc">{previsao.text}</h5>

                                                        <div className="container">
                                                            <div className="row row-card-item">
                                                                <div className="col-sm">
                                                                    <img src={max} className="mini-icon" alt="Máxima" />{previsao.temperature.max}°C
                                                            </div>
                                                                <div className="col-sm">
                                                                    <img src={min} className="mini-icon" alt="Mínima" /> {previsao.temperature.min}°C
                                                            </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-sm">
                                                                    <img src={umidade} className="mini-icon" alt="Umidade" /> {previsao.rain.precipitation}mm
                                                            </div>
                                                                <div className="col-sm">
                                                                    <img src={porChuva} className="mini-icon" alt="Probabilidade de Chuva" /> {previsao.rain.probability}%
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </>
                :
                <>
                    <p style={{ textAlign: 'center' }}>Não encontramos dados para {this.state.location}.</p>
                </>
        )
    }
}



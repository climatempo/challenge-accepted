import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import CardItem from './CardItem';
import { Container, Grid } from '@material-ui/core';
import api from '../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class BodyApp extends Component {

    constructor(){
        super();

        this.state = {
            search: "",
            city: "",
            forcast: []
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.requestSearch = this.requestSearch.bind(this);
    }

    handleSearch(cityName){
        
        this.setState({
            search: event.target.value
        });
    };

    async requestSearch(){

        if (this.state.search === "") {
            toast.error("Ops.. esse campo não pode ser vazio", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        await api.get("/api/city/" + this.state.search)
            .then(r => {
                if (r.data[0].error == 1) {
                    
                    toast.error("Essa cidade não está cadastrada em nossos sitemas, por favor pesquise somente por Osasco ou São Paulo", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    return;
                } else if (r.data[0].error == 2) {
                    toast.error("Ops.. esse campo não pode ser vazio", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }else {
                    this.setState({city: r.data[0][0] });
                    this.setState({ forcast: r.data[0][1] });
                }
                
            });

    };

    render() {
        return (
            <div>
                <ToastContainer autoClose={5000} />
                <Container maxWidth="xs">
                    <SearchBar 
                        style= {{marginTop: 80, marginBottom: 30}}
                        placeholder="Perquisar" 
                        value={this.state.search}
                        onChange={this.handleSearch}
                        onRequestSearch={this.requestSearch}
                    />
                    <CardItem temp={this.state.forcast} city={this.state.city}/>
                </Container>
            </div>
        );
    }
}

export default BodyApp;

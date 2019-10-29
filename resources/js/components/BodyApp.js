import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import CardItem from './CardItem';
import { Container, Grid } from '@material-ui/core';

class BodyApp extends Component {

    constructor(){
        super();

        this.state = {
            search: "",
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.requestSearch = this.requestSearch.bind(this);
    }

    handleSearch(cityName){
        
        this.setState({
            search: event.target.value
        });
    };

    requestSearch(){
        alert(this.state.search);
    };

    render() {
        return (
            <div>
                <Container maxWidth="xs">
                    <SearchBar 
                        style= {{marginTop: 20, marginBottom: 30}}
                        placeholder="Perquisar" 
                        value={this.state.search}
                        onChange={this.handleSearch}
                        onRequestSearch={this.requestSearch}
                    />
                
             
                    <CardItem />
                    <CardItem />
                </Container>
            </div>
        );
    }
}

export default BodyApp;

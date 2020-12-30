import React , {Component} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import WeatherData from "../base/weather.json";
import CardWeather from "./CardWeather";

export default class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state = {rows:[]};
    }

    performSearch(cityName){
        var cards_list = [];
        const result = WeatherData;
        var city = result.find( city => city.locale.name === cityName);

        if (city !== undefined){
            const card = <CardWeather key={city.locale.id} weather={city}/>;
            cards_list.push(card);
        }
        return cards_list;
    }

    searchHandler(event){
        var searchValue = event.target.value;
        this.setState({rows:this.performSearch(searchValue)});
    }

    render(){
        return(
            <div>
                <form className="Search-Bar">
                    <input type="text" placeholder="Pesquisa.." name="search" onChange={this.searchHandler.bind(this)}></input>
                    <div><i><FontAwesomeIcon icon={faSearch} /></i></div>
                </form>
                {this.state.rows}
            </div>
            
        )
    }
}
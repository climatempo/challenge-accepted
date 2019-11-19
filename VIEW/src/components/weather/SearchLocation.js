import React, { Component } from 'react';
import { Input, Row } from 'antd';
import ConditionWeatherList from './ConditionWeatherList'
import Loading from '../utils/Loading'
import MapComponent from '../utils/MapComponent'
import '../../../public/css/listWeather.css';

import { observer } from 'mobx-react';

const { Search } = Input;
/**
 * Container de listagem
 */
class SearchLocationPage extends Component {
    constructor(props) {
        super(props);
        this.store = props.searchLocationStore;
    }

    handleSubmit = locale => {
        this.store.searchLocale(locale);
    };

    render() {
        return (
            <Row>
                <Row className="bgColorGray">
                    <Row className="searchBox">
                        <Search
                            placeholder="Pesquisar Local"
                            enterButton="Pesquisar"
                            size="large"
                            onSearch={this.handleSubmit}
                        />
                    </Row>
                    <Loading show={this.store.loading} message="Procurando local" />
                    {
                        this.store.conditionWeather ?
                            <Row>
                                <Row className="cardTitle">
                                    <span >Previsão para </span>
                                    <span >{this.store.locale.name}-{this.store.locale.state}</span>
                                </Row>
                                <Row type="flex" justify="center" align="middle">
                                    <MapComponent data={this.store.conditionWeather.weather}>
                                        <ConditionWeatherList />
                                    </MapComponent>
                                </Row>
                            </Row>
                            : null}
                </Row>
            </Row>
        );
    }
}

export default observer(SearchLocationPage);
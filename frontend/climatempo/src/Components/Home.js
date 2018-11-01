import React, { Component } from "react";
import styled from 'styled-components';
import axios from "axios";

import Input from './input';

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
`;

const Header = styled.div`
	display:flex;
	width: 100%;
	height:10%;
	justify-content: center;
  align-items: center;
	background-color: #4169E1;	
`;

const Logo = styled.img`
	display: inline-block;
	width: 40%;
	
`;

const CityTitle = styled.p`
	text-align:center;
	display: block;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
`;

class Home extends Component {

	state = {
		arr: []
	}

	getCity = (e) => {
		e.preventDefault();
		const city = e.target.elements.cityName.value;
		if (city) {
			axios.post(`http://localhost:4000/locales`, { search: city })
				.then((res) => {
					this.setState({ arr: res.data.data[0] });
					this.getWeatherCity(this.state.arr.id)
				})
		} else return;

	}

	getWeatherCity = (cityid) => {

		axios.get(`http://localhost:4000/weather/${cityid}`)
			.then((res) => {
				this.setState({ weathers: res.data });
			})


	}


	render() {
		console.log(this.state)
		return (
			<Container>
				<Header>
					<Logo src={require('../img/logo-white.png')} />
				</Header>
				<Input getCity={this.getCity} />
				{this.state.arr.id ? <CityTitle>Previsão Para: {this.state.arr.name}-{this.state.arr.state}   </CityTitle> : <p> </p>}
				{this.state.weathers && this.state.weathers.map(e => 
					(
						<div>
							<div>
								<p>{e.period.begin}</p>
							</div>
							{e.weather && e.weather.map(p => 
								(
									<div>
										<div>
											<p>{p.text}</p>
											<span>{p.temperature.min}</span>
											<br/>
											<span>{p.temperature.max}</span>
										</div>
										<div>
											<span>{p.temperature.probability}</span>
											<br/>
											<span>{p.temperature.precipitation}</span>
										</div>
									</div>
								)
							)}

						</div>
					)
				)}
			</Container>
		);
	}
}

export default Home;
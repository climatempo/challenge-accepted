import React, { Component } from "react";
import styled from 'styled-components';
import axios from "axios";
import moment from 'moment';


import Input from './input';


const Container = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
		background-color: #DCDCDC;
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
	width: 60%;
	
`;

const CityTitle = styled.p`
	text-align:center;
	display: block;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
`;


const Card = styled.div`
    width: 85%;
		height: auto;
    margin: 0px 20px;	
		display: inline-block;
    position: relative;
		border-radius: 19px;
`;
const TopCard = styled.div`
	background-color: white;
	border-radius: 10px 10px 0 0;
`;

const CardBody = styled.div`
	background-color: white;
`;

const DateTitle = styled.p`
  font-family: inherit;
  font-weight: 500;
  font-size: 16px;
  text-align: left;
  color: rgb(84, 110, 122);
	padding: 5px;
	text-align:center;
`;

const TextCard = styled.p`
	font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  text-align: center;
  color: rgb(84, 110, 122);
  margin-bottom: 0px;
	word-wrap: break-word;
	padding: 10px;
`;

const Grade = styled.div`
    display: flex;
    grid-template-columns: 70px 70px;
    grid-gap: 10px;
    background-color: #F5F5F5;
    color: #444;
    text-align: center;
    justify-content: space-around;
		padding-bottom: 10px;
		border-radius: ${props => props.border};
`;

const Itens = styled.div`
	color: ${props => props.color};
  border-radius: 5px;
  padding: 20px;
  font-size: 100%;
	display:flex;

`;

const Icon = styled.img`
	  width:25px;
		height:25px;
		padding-right:25px;
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
					if (this.state.arr) {
						this.getWeatherCity(this.state.arr.id)
					}
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
				{this.state.arr && this.state.arr.id ? <CityTitle>Previsão Para: {this.state.arr.name}-{this.state.arr.state}   </CityTitle> : <p> </p>}
				{this.state.weathers && this.state.weathers.map(e =>
					(
						<Card>
							{e.weather && e.weather.map(p =>
								(
									<div>
										<TopCard>
											<div>
												<DateTitle>
												Dia: {p.date}
												</DateTitle>
												<TextCard> {p.text} </TextCard>
											</div>
										</TopCard>
										<CardBody>
											<div>
												<Grade>
													<Itens  color={'#1E90FF'}>
													<Icon src={require('../img/upload.png')} />
													{p.temperature.max}°
													</Itens>
													<Itens color={'#FF0000'}>
													<Icon src={require('../img/download.png')} />
													{p.temperature.min}°
													</Itens>
												</Grade>
												<Grade border={'0 0 10px 10px'}>
													<Itens color={'#000000'}>
													<Icon src={require('../img/raindrop-close-up.png')} />
													{p.rain.precipitation}mm
													</Itens>
													<Itens color={'#000000'}>
													<Icon src={require('../img/umbrella.png')} />
													{p.rain.probability}%
													</Itens>
												</Grade>
											</div>
										</CardBody>
									</div>
								)
							)}

						</Card>
					)
				)}
			</Container>
		);
	}
}

export default Home;
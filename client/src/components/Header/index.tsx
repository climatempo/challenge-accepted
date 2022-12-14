import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo-white.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import Autosuggest from 'react-autosuggest';
import device from '../../styles/device';
import { getLocales, getWeatherByLocaleName } from '../../store/actions/weather';
import { connect } from 'react-redux';
import './index.css';
import { LocationOnRounded } from '@mui/icons-material';
import { LocaleInterface, WeatherDetailsInterface } from '../../store/types';

const sugg = [{ text: 'São Paulo', }, { text: 'Osasco', }, { text: 'Sao jose', }, { text: 'soa', }];

class Header extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
		this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
		this.onChange = this.onChange.bind(this);

		this.state = {
			inputSearchValue: '',
			suggestions: [],
		};
	}

	async submitForm(e) {
		e.preventDefault();
		await this.props.getWeatherByLocaleName(this.state.inputSearchValue);
		console.log(this.props.weatherDetails);
	}

	async getSuggestions (value) {
		await this.props.getLocales(value);
		const { locales, } = this.props;

		return locales;
	}

	getSuggestionValue(suggestion) {
		console.log('s', suggestion);
		return suggestion.name;
	}

	async onSuggestionsFetchRequested ({ value, }) {
		this.setState({
			suggestions: await this.getSuggestions(value),
		});
	}

	onSuggestionsClearRequested () {
		this.setState({
			suggestions: [],
		});
	}

	renderSuggestion(suggestion) {
		return <SuggestItem><PlaceRoundedIcon/>{suggestion.name}</SuggestItem>;
	}

	onChange(event, { newValue, }) {
		this.setState({
			inputSearchValue: newValue,
		});
	}

	render() {
		const { inputSearchValue, suggestions, } = this.state;

		return (
			<form onSubmit={this.submitForm}>
				<DivHeader>
					<ImgContainer>
						<ImgLogo src={logo} alt='Logo' />
					</ImgContainer>
					<DivInputIcon>
						<Autosuggest
							suggestions={suggestions}
							onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
							onSuggestionsClearRequested={this.onSuggestionsClearRequested}
							getSuggestionValue={this.getSuggestionValue}
							renderSuggestion={this.renderSuggestion}
							inputProps={{
								value: inputSearchValue,
								onChange: this.onChange,
								placeholder: 'Procure por cidades...',
								className: 'input-search',
							}}
							theme={autoSuggestTheme}
						/>
						<SearchIcon onClick={this.submitForm} />
					</DivInputIcon>
					
				</DivHeader>
			</form>
		);
	}
}

const DivHeader = styled.div`
	width: 100%;
	height: auto;
	padding: 1em 2.5em 1em 2.5em;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 1em;
	background-color: ${props => props.theme.glassBackground};
	backdrop-filter: blur(7px);
	box-shadow: ${props => props.theme.glassBoxShadow};

	@media (max-width: ${device.extraSmall}) {
		justify-content: center;
	}
`;

const ImgContainer = styled.div`
`;

const ImgLogo = styled.img`
	width: 8em;
	height: auto;
`;

const DivInputIcon = styled.div`
	background-color: rgba(255, 255, 255, 0.3);
	outline: none;
	border: none;
	transition: .3s;
	width: 250px;
	padding: .55em .7em .55em 0;
	border-radius: ${props => props.theme.glassRadius};
	display: flex;
	align-items: center;

	&:hover, &:focus, &:focus-within {
		background-color: #EEEEEE !important;
	}
`;

const autoSuggestTheme = {
	input: {
		backgroundColor: 'transparent',
		color: 'black',
		border: 'none',
		outline: 'none',
		width: '100%',
		marginLeft: '.7em',

		'&::placeholder': {
			color: 'white',
			transition: '.15s',
		},

		'&:hover::placeholder': {
			color: 'white',
			transition: '.15s',
		},
	},
	container: {
		position: 'relative',
		flexGrow: '1',
	},
	suggestionsContainer: {
		position: 'absolute',
		backgroundColor: '#EEEEEE',
		width: '100%',
		borderRadius: '.3em',
		top: '31px',
		overflowY: 'auto',
		boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
	},
	suggestionsContainerOpen: {
		padding: '.05em',
	},
	suggestionHighlighted: {
		color: 'blue !important',
		backgroundColor: 'blue !important',
	},
};

const SearchIcon = styled(SearchRoundedIcon)`
	color: #2b2b2b;
	cursor: pointer;
	transition: .15s;

	&:hover {
		color: black;
		transition: .15s;
	}
`;

const SuggestItem = styled.span`
	cursor: pointer;
	display: flex;
	gap: .5em;
	align-items: center;
	padding: .4em .5em;
	border-radius: ${props => props.theme.glassRadius};
	color: #2b2b2b;
	font-size: .95em;

	&:hover {
		background-color: #d2d2d2;
		transition: .3s;
	}
`;

const PlaceRoundedIcon = styled(LocationOnRounded)`
	font-size: 1.5em !important;
`;

type State = {
	inputSearchValue: string;
	suggestions: LocaleInterface[];
};

type Props = {
	locales: LocaleInterface[];
	weatherDetails: WeatherDetailsInterface;
	getLocales: (name?: string) => void;
	getWeatherByLocaleName: (localeName: string) => void;
}

const mapStateToProps = (state) => ({
	locales: state.weather.locales,
	weatherDetails: state.weather.weatherDetails,
});

const mapDispatchToProps = { getLocales, getWeatherByLocaleName, };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
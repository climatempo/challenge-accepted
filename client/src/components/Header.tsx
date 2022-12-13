import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo-white.png';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import device from '../styles/device';
import { getLocales } from '../store/actions/weather';
import { connect } from 'react-redux';

class Header extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
	}

	async submitForm(e) {
		e.preventDefault();
		await this.props.getLocales();
		console.log(this.props.locales);
	}

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<DivHeader>
					<ImgContainer>
						<ImgLogo src={logo} alt='Logo' />
					</ImgContainer>
					<DivInputIcon>
						<InputSearch type='text' placeholder='Procure por cidades...' />
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
	background-color: rgba(0, 0, 0, 0.2);
	backdrop-filter: blur(7px);

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
	color: ${props => props.theme.white};
	width: 250px;
	padding: .55em .7em;
	border-radius: .3em;
	display: flex;
	align-items: center;
`;

const InputSearch = styled.input`
	background-color: transparent;
	color: ${props => props.theme.white};
	border: none;
	outline: none;
	width: auto;
	flex-grow: 1;

	&::placeholder {
		color: ${props => props.theme.white};
		transition: .15s;
	}

	&:hover::placeholder {
		color: ${props => props.theme.darkWhite};
		transition: .15s;
	}
`;

const SearchIcon = styled(SearchRoundedIcon)`
	color: ${props => props.theme.white};
	cursor: pointer;
	transition: .15s;

	&:hover {
		color: ${props => props.theme.darkWhite};
		transition: .15s;
	}
`;

type State = object;

type Props = {
	locales: [],
	getLocales: () => void;
}

const mapStateToProps = (state) => ({
	locales: state.weather.locales,
});

const mapDispatchToProps = { getLocales, };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
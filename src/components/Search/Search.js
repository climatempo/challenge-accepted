import React, { Component } from 'react';
import { connect } from 'react-redux'
import icone from '../../images/icons/search.png';
import { searchWeather } from '../../actions/actions'


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: ""
    }

    this.searchWeather = this.searchWeather.bind(this);
  }

  searchWeather = e => {
    e.preventDefault();
    this.props.searchWeather(this.state.locale);
  }

  render() {
    const { weathers } = this.props;
    return (
      <div className="container-fluid no-pading">
        <form className="row" onSubmit={e => this.searchWeather(e)}>
          <div className="input-group">
            <input type="text" className="form-control no-border font" placeholder="Digite o local" value={this.state.locale} onChange={e => this.setState({ locale: e.target.value })} aria-label="Digite o local" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary no-border button-search" type="button" onClick={this.searchWeather}><img className="img-fluid" src={icone} /></button>
            </div>
          </div>
        </form>
        {weathers.locale ? <div>
          <h4 className="text-title">Previsão para {weathers.locale.name} - {weathers.locale.state}</h4>
        </div> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weathers: state.weathers
  }
}


export default connect(mapStateToProps, {searchWeather})(Search);

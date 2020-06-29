import React from 'react';
import './styles.scss';
import up from '../../assets/images/icons/upload.png';
import down from '../../assets/images/icons/download.png';
import rain from '../../assets/images/icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png';
import temp from '../../assets/images/icons/raindrop-close-up.png';

import Search from '../Search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchWeather } from '../../store/actions';

const Card = (props) => {
  return (
    <>
      <Search onSearch={(v) => props.searchWeather(v)} />
      {props.search.map((elem) => (
        <h1>Previsão para {`${elem.locale.name} - ${elem.locale.state}`}</h1>
      ))}
      {props.search.map((item) =>
        item.weather.map((elem) => (
          <section className="bgCard" key={elem.date}>
            <section className="bgCard-header">
              <h2>{elem.date}</h2>
              <p>{elem.text}</p>
            </section>
            <section className="bgCard-content">
              <section className="bgCard-content_temp">
                <table>
                  <tr>
                    <td>
                      <img src={up} title="" alt="" />
                    </td>
                    <td className="colorTemp">{elem.temperature.max}°C</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={temp} title="" alt="" />
                    </td>
                    <td>{elem.rain.probability}mm</td>
                  </tr>
                </table>
              </section>
              <section className="bgCard-content_rain">
                <table>
                  <tr>
                    <td>
                      <img src={down} title="" alt="" />
                    </td>
                    <td className="colorRain">{elem.temperature.min}°C</td>
                  </tr>
                  <tr>
                    <td>
                      <img src={rain} title="" alt="" />
                    </td>
                    <td>{elem.rain.precipitation}%</td>
                  </tr>
                </table>
              </section>
            </section>
          </section>
        )),
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  app: state.app,
  search: state.weather.search,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      searchWeather,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Card);

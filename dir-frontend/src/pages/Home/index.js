import React from 'react';
import { useQuery, gql } from '@apollo/client';
import path from 'path';

import './Home.scss';

import { AutoComplete } from 'antd';

import Results from '../../components/Results';
import Notification from '../../components/Notification';

const GET_LOCALES = gql`
  query getLocales {
    locales {
      id
      name
      state
    }
  }
`;

export default function Home() {
  const [citysToShow, setCitysToShow] = React.useState();
  const [currentCity, setCurrentCity] = React.useState();

  const { loading, error, data } = useQuery(GET_LOCALES, {
    onCompleted: () => {
      setCitysToShow(data.locales);
    },
  });

  const onSearch = (value) => {
    const filteredCitys = data.locales.filter(
      (city) =>
        city.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
        city.state.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    setCitysToShow(filteredCitys);
  };

  const onSelect = (value, option) => {
    const selectedCity = data.locales.find(
      (city) => city.id === parseInt(option.key, 10)
    );

    setCurrentCity(selectedCity);
  };

  if (loading) {
    return <h1>Carregando...</h1>;
  }
  if (error) {
    Notification(
      'error',
      'Ops! Algo Aconteceu!',
      'Houve um problema em nosso sistema, tente novamente em alguns istantes!'
    );
    return null;
  }

  return (
    <div className="weather-content">
      <div className="weather-content__header">
        <img
          src={path.join(__dirname, './images/logo-white.png')}
          alt="Logo ClimaTempo"
        />
      </div>
      <div className="weather-content__input">
        <AutoComplete
          style={{ width: '100%' }}
          placeholder="Busque por uma cidade..."
          onSelect={onSelect}
          onSearch={onSearch}
        >
          {citysToShow && citysToShow.length > 0 ? (
            <>
              {citysToShow.map(({ id, name, state }) => (
                <AutoComplete.Option key={id} value={`${name} - ${state}`} />
              ))}
            </>
          ) : (
            ''
          )}
        </AutoComplete>
      </div>
      {currentCity ? (
        <Results currentCity={currentCity} />
      ) : (
        <div className="msg-inicio">
          <h1>
            Olá, seja bem vindo! Para consultar a previsão do tempo na sua
            cidade é só pesquisar por ela. Obrigada!
          </h1>
        </div>
      )}
    </div>
  );
}

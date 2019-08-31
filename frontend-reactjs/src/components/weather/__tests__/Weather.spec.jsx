import React from 'react';
import toJson from 'enzyme-to-json';

import { mount } from '../../../tests-setup';

import Weather from '../Weather';

const props = {
  weather: {
    period: {
      begin: '2017-02-01',
      end: '2017-02-07',
    },
    locale: {
      id: 3735,
      name: 'Osasco',
      state: 'SP',
      latitude: -23.532,
      longitude: -46.792
    },
    weather: [
      {
        date: '2017-02-01',
        text: 'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.',
        temperature: {
          min: 20,
          max: 28
        },
        rain: {
          probability: 60,
          precipitation: 20
        }
      }
    ]
  },
};

describe('Weather Component', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(<Weather {...props} />);
  });

  it('should correctly render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should exists', () => {
    expect(wrapper.find('WeatherCard')).toBeTruthy();
    expect(wrapper.find('InfoWithIcon')).toBeTruthy();
  });

  it('Should have one WeatherCard', () => {
    expect(wrapper.find('WeatherCard')).toHaveLength(props.weather.weather.length);
  });

});

import React from 'react';
import toJson from 'enzyme-to-json';

import { shallow } from '../../tests-setup';

jest.mock('../../services/region-search', () => ({
  searchByName: jest.fn().mockImplementation(() => Promise.resolve({
    data: { regions: [{ id: 1, name: 'foo' }] },
  })),
}));

const weatherResp = {
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
};

jest.mock('../../services/weather', () => ({
  getByLocaleId: jest.fn().mockImplementation(() => Promise.resolve({
    data: {
      // TODO: babel-plugin-jest-hoist: The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.
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
    },
  })),
}));

import Weather from '../Weather';

jest.mock('axios');

const regions = [{ id: 1, name: 'foo' }];

describe('Weather Container', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Weather />);
  });

  it('should correctly render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should search region names', async () => {
    await wrapper.instance().search('foo');
    expect(wrapper.state().text).toEqual('foo');
    expect(wrapper.state().regions).toEqual(expect.arrayContaining(regions));
  });

  it('Should get weather', async () => {
    wrapper.setState({ text: 'foo', regions });
    await wrapper.instance().getWeather();
    expect(wrapper.state().text).toEqual('foo');
    expect(wrapper.state().weather).toMatchObject(weatherResp);
  });

});

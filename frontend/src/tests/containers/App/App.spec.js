import React from 'react';
import { create } from 'react-test-renderer';
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitForElement,
} from '@testing-library/react';
import moxios from 'moxios';

import App from '../../../containers/App/App';
import axios from '../../../api/base';
import { okResponse, notFoundResponse } from '../../fixtures/weatherResponses';

describe('App', () => {
  describe('Snapshot testing', () => {
    it('match snapshot', () => {
      const root = create(<App />);

      expect(root.toJSON()).toMatchSnapshot();
    });
  });

  describe('App functionalities', () => {
    beforeEach(() => {
      moxios.install(axios);
    });
    afterEach(() => {
      cleanup();
      moxios.uninstall(axios);
    });

    it('render error with empty city', () => {
      render(<App />);

      // Click on submit button
      fireEvent.click(screen.getByTestId('btn-submit'));

      expect(
        screen.getByText('Informe a cidade para continuar!')
      ).toBeInTheDocument();
    });

    it('render error with not found city', async () => {
      const cityName = 'Joinville';
      moxios.stubRequest(`/weather?city=${cityName}`, {
        status: 404,
        responseText: JSON.stringify(notFoundResponse),
      });

      const { getByTestId, getByPlaceholderText } = render(<App />);

      fireEvent.change(getByPlaceholderText('Digite a cidade...'), {
        target: { value: cityName },
      });

      fireEvent.click(getByTestId('btn-submit'));

      const resolvedSpan = await waitForElement(() =>
        getByTestId('error-message')
      );
      expect(resolvedSpan).toHaveTextContent('Cidade não encontrada');
    });

    it('render weather for valid city', async () => {
      const cityName = 'Osasco';
      moxios.stubRequest(`/weather?city=${cityName}`, {
        status: 200,
        responseText: JSON.stringify(okResponse),
      });

      const {
        getByTestId,
        getByText,
        getAllByText,
        getByPlaceholderText,
      } = render(<App />);

      fireEvent.change(getByPlaceholderText('Digite a cidade...'), {
        target: { value: cityName },
      });

      fireEvent.click(getByTestId('btn-submit'));
      const resolvedHeaderName = await waitForElement(() =>
        getByTestId('h4-city')
      );

      expect(resolvedHeaderName).toHaveTextContent('Previsão para Osasco-SP');
      expect(getByText('2017-02-01')).toBeDefined();
      expect(
        getAllByText(
          'Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.'
        )
      ).toBeDefined();
      expect(getByText('28ºC')).toBeDefined();
      expect(getByText('20ºC')).toBeDefined();
      expect(getByText('20mm')).toBeDefined();
      expect(getAllByText('60%')).toBeDefined();
    });
  });
});

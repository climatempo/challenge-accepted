import React from 'react';
import { create } from 'react-test-renderer';
import App from '../../../containers/App/App';

describe('App', () => {
  describe('Snapshot testing', () => {
    it('match snapshot', () => {
      const root = create(<App />);

      expect(root.toJSON()).toMatchSnapshot();
    });
  });
});

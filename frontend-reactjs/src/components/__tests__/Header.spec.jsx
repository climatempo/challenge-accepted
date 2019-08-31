import React from 'react';
import toJson from 'enzyme-to-json';

import { mount } from '../../tests-setup';

import Header from '../Header';

describe('Header Component', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  it('should correctly render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});

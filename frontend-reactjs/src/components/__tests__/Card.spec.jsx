import React from 'react';
import toJson from 'enzyme-to-json';

import { mount } from '../../tests-setup';

import Card from '../Card';

describe('Card Component', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(
    <Card><h1>foo</h1></Card>,
    );
  });

  it('should correctly render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should exists element h1', () => {
    expect(wrapper.find('h1').exists()).toBeTruthy();
  });

  it('Should must contain the text "foo"', () => {
    expect(wrapper.find('h1').text()).toBe('foo');
  });
});

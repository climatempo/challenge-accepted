import React from 'react';
import toJson from 'enzyme-to-json';

import { mount } from '../../tests-setup';

import Autocomplete, { INPUT_ID } from '../Autocomplete';

const props = {
  list: [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }],
  value: 'foo',
  onChange: jest.fn(),
  onSearch: jest.fn(),
};

describe('Autocomplete Component', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(<Autocomplete {...props} />);
  });

  it('Should correctly render', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('Should exists', () => {
    expect(wrapper.find('input').exists()).toBeTruthy();
    expect(wrapper.find('datalist').exists()).toBeTruthy();
    expect(wrapper.find('SearchButton').exists()).toBeTruthy();
  });

  it('Should input and datalist is connected', () => {
    expect(wrapper.find('input').prop('list')).toBe(INPUT_ID);
    expect(wrapper.find('datalist').prop('id')).toBe(INPUT_ID);
  });

  it('Should showing datalist when inputting data', () => {
    wrapper.find('input').simulate('change', { target: { value: 'foo' } });
    expect(props.onChange).toHaveBeenCalled();
    expect(props.onChange.mock.calls[0][0].target.value).toBe('foo');
    expect(wrapper.find('datalist').children()).toHaveLength(2);
  });

});

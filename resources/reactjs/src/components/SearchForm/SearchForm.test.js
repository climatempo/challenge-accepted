import React from 'react';
import { shallow, configure } from "enzyme";
import SearchForm from './SearchForm';
import Adapter from 'enzyme-adapter-react-16';

// Configure enzyme
beforeAll(() => {
  configure({adapter: new Adapter()});
});

// Global wrapper
let wrapper = null;

// Builds stuff
beforeEach(() => {
   wrapper = shallow(<SearchForm />);
});

// Unmount stuff
afterEach(() => {
  wrapper.unmount();
});

// Test Cases
it("Should renders form correctly", () => {
  expect(wrapper.find("form").length).toBe(1);
});

it("Should change trigger event and change state", () => {

  // Mock method
  let func = jest.fn();

  // Set starting props
  wrapper.setProps({ data : "MOCK", onSelect: func });  

  // Get List Item
  const formInput = wrapper.find(".form-element").first();    
    
  // Generate fack click event
  const mockedEvent = { target: { value : "MOCK"} }
  formInput.simulate('change', mockedEvent);
    
  // Updates component
  wrapper.update();   
  
  // Expect a lot of things      
  expect(wrapper.state().searchData).toEqual("MOCK");
  expect(wrapper.state().searchText).toEqual("MOCK");
});


it("Should change state from method call", () => {

  // Get instance
  const instance = wrapper.instance(),

  // Mock method
  func = jest.fn();

  // Set starting props
  wrapper.setProps({getSelection: func });  

  // Fire component changes
  instance.handleSelection(10, "MOCK", "MK");  

  // Updates component
  wrapper.update();   

  // Expect a lot of things      
  expect(wrapper.state().searchText).toEqual("MOCK");    
  expect(func).toHaveBeenCalledTimes(1);
});

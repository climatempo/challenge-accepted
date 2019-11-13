import React from 'react';
import { shallow, configure } from "enzyme";
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

// Configure enzyme
beforeAll(() => {
  configure({adapter: new Adapter()});
});

// Global wrapper
let wrapper = null;

// Builds stuff
beforeEach(() => {
   wrapper = shallow(<App />);
});

// Unmount stuff
afterEach(() => {
  wrapper.unmount();
});

// Test Cases
it("Should renders container correctly", () => {
  expect(wrapper.find(".container-full").length).toBe(1);
});

it("Should change state from method call", () => {

  // Get instance
  const instance = wrapper.instance();

  // Fire component changes
  instance.getSelection(10, "MOCK", "MK");  

  // Updates component
  wrapper.update();   

  // Expect a lot of things    
  expect(wrapper.state().localeID).toEqual(10);
  expect(wrapper.state().cidade).toEqual("MOCK");
  expect(wrapper.state().uf).toEqual("MK");
});

import React from 'react';
import { shallow, configure } from "enzyme";
import Header from './Header';
import Adapter from 'enzyme-adapter-react-16';

// Configure enzyme
beforeAll(() => {
  configure({adapter: new Adapter()});
});

// Global wrapper
let wrapper = null;

// Builds stuff
beforeEach(() => {
   wrapper = shallow(<Header />);
});

// Unmount stuff
afterEach(() => {
  wrapper.unmount();
});

// Test Cases
it("Should renders list correctly", () => {
  expect(wrapper.find("header").length).toBe(1);
});

import React from 'react';
import { shallow, configure } from "enzyme";
import OptionList from './OptionList';
import Adapter from 'enzyme-adapter-react-16';

// Mocks API and setTimeout
jest.mock("../../services/Api");
jest.useFakeTimers();

// Configure enzyme
beforeAll(() => {
  configure({adapter: new Adapter()});
});

// Global wrapper
let wrapper = null;

// Builds stuff
beforeEach(() => {
   wrapper = shallow(<OptionList />);
});

// Unmount stuff
afterEach(() => {
  wrapper.unmount();
});

// Test Cases
it("Should renders list correctly", () => {
  expect(wrapper.find("ul li").length).toBe(0);
});

it("Should load two itens from mock data", (done) => {

  // Fire component changes
  wrapper.setProps({ data : "MOCK" });

  // Force timeout to run
  jest.advanceTimersByTime(400);

  // Wait for next tick
  process.nextTick(() => {
    
    // Updates component
    wrapper.update();   

    // Get state 
    const state = wrapper.instance().state,

    // Get component list itens
    ListItemArray = wrapper.find("li"),
    ListItem = ListItemArray.first();

    // Expect a lot of things    
    expect(state.isHidden).toBeFalsy();
    expect(ListItemArray.length).toEqual(2);
    expect(ListItem.text()).toEqual("MOCK1");
    expect(ListItem.props()["data-id"]).toEqual(1);
    expect(ListItem.props()["data-uf"]).toEqual("MK1");

    // Tell jest we done
    done();
  });
});

it("Should listen do click event", (done) => {

  // Mock method
  let func = jest.fn();

  // Set starting props
  wrapper.setProps({ data : "MOCK", onSelect: func });  

  // Force timeout to run
  jest.advanceTimersByTime(300);

  // Wait for next tick
  process.nextTick(() => {
    
    // Updates component
    wrapper.update();   

    // Get List Item
    const ListItem = wrapper.find("li").first();    
    
    // Generate fack click event
    const mockedEvent = { target: { dataset : ""} }
    ListItem.simulate('click', mockedEvent);

    // Expect stuff
    expect(func).toHaveBeenCalledTimes(1);
    
    // Tell jest we done
    done();
  });
});


it("Should have an friendly message for user if data state is empty", (done) => {

  // Force timeout to run
  jest.advanceTimersByTime(300);

  // Since we are mocking the API, we manipulate state a little
  wrapper.setState({ dataList : [] }); 

  // Wait for next tick
  process.nextTick(() => {
  
    // Updates component
    wrapper.update();   

    // Get component list itens
    const ListItemArray = wrapper.find("li"),
    ListItem = ListItemArray.first();

    // Expect stuff
    expect(ListItemArray.length).toEqual(1);
    expect(ListItem.text()).toEqual("Nenhuma cidade encontrada");

    // Tell jest we done
    done();
  });
});
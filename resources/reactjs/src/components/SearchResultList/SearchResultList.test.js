import React from 'react';
import { shallow, configure } from "enzyme";
import SearchResultList from './SearchResultList';
import Adapter from 'enzyme-adapter-react-16';

// Mocks API and setTimeout
jest.mock("../../services/Api");

// Configure enzyme
beforeAll(() => {
  configure({adapter: new Adapter()});
});

// Global wrapper
let wrapper = null;

// Builds stuff
beforeEach(() => {
   wrapper = shallow(<SearchResultList />);
});

// Unmount stuff
afterEach(() => {
  wrapper.unmount();
});

// Test Cases
it("Should renders list correctly", () => {
  expect(wrapper.find(".list-container").length).toBe(0);
});

it("Should show the correct title", (done) => {
  
    // Fire component changes
    wrapper.setProps({ localeID: 1, cidade : "MOCK", uf: "MK" });
  
    // Wait for next tick
    process.nextTick(() => {
    
      // Updates component
      wrapper.update();   

      // Get title
      const mainTitle = wrapper.find("h1").first();    

      // Expect stuff
      expect(mainTitle.text()).toEqual("Previsão para MOCK - MK");    
      expect(wrapper.state().dataList).toBeTruthy();    

      // Tell jest we done
      done();
    });
});

it("Should load two itens from mock data", (done) => {

  // Fire component changes
  wrapper.setProps({ localeID: 1});

  // Wait for next tick
  process.nextTick(() => {
      
    // Updates component
    wrapper.update();   

    // Get component list itens
    const SearchResultItemArray = wrapper.find("SearchResultItem"),
    SearchResultItem = SearchResultItemArray.first();

    // Expect a lot of things      
    expect(SearchResultItemArray.length).toEqual(2);

    // Tell jest we done
    done();
  });
});


it("Should show the loader if the API takes to much time", (done) => {
  
  // Fire component changes
  wrapper.setProps({ localeID: 1});

  // Wait for next tick
  process.nextTick(() => {
  
    // Since we are mocking the API, we manipulate state a little
    wrapper.setState({ dataList : null }); 

    // Updates component
    wrapper.update();   

    // Get title
    const loader = wrapper.find(".loader").first();    

    // Expect stuff
    expect(loader.length).toEqual(1);    

    // Tell jest we done
    done();
  });
});

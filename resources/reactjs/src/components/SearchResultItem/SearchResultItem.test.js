import React from 'react';
import { shallow, configure } from "enzyme";
import SearchResultItem from './SearchResultItem';
import Adapter from 'enzyme-adapter-react-16';

// Configure enzyme
beforeAll(() => {
  configure({adapter: new Adapter()});
});

// Global wrapper
let wrapper;

// Builds stuff
beforeEach(() => {
   wrapper = shallow(<SearchResultItem />);
});

// Unmount stuff
afterEach(() => {
  wrapper.unmount();
});


it("Must render data correctly", () => {

  // Se some props
  wrapper.setProps({ data:     
    {
      id: 1,
      description: "MOCK",
      rain_precipitation: "MOCK_precipitation",
      rain_probability: "MOCK_probability",
      temperature_max: "MOCK_max",
      temperature_min: "MOCK_min",
      weather_date: "MOCK_data"
    }
  });

  // Updates
  wrapper.update();

  // Get a lot of elements
  const paragraph = wrapper.find("p").first(),
  temperatureMax = wrapper.find(".temperature-max").first(),
  temperatureMin = wrapper.find(".temperature-min").first(),
  rainPrecipitation  = wrapper.find(".rain-precipitation").first(),
  rainProbability  = wrapper.find(".rain-probability").first();
  

  // Expect a lot of stuff to happen
  expect(paragraph.text()).toBe("MOCK_dataMOCK");
  expect(temperatureMax.find("span").text()).toBe("MOCK_maxºC");
  expect(temperatureMin.find("span").text()).toBe("MOCK_minºC");
  expect(rainPrecipitation.find("span").text()).toBe("MOCK_precipitationmm");
  expect(rainProbability.find("span").text()).toBe("MOCK_probability%");
});
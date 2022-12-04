import renderer from 'react-test-renderer';
import './../../Tests/watchMedia.mock';
import { Provider } from 'react-redux';
import store from '../../store';
import { SnackbarProvider } from 'notistack';
import InstantWeather from './index';

test("Instant WeatherController component", () => {
  const reduxStore = store;

  const weather = renderer.create(
      <Provider store={reduxStore}>
        <SnackbarProvider maxSnack={4}>
          <InstantWeather/>
        </SnackbarProvider>
      </Provider>
  );

  expect(weather.toJSON()).toMatchSnapshot();
});
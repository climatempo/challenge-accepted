import renderer from 'react-test-renderer';
import './../../Tests/watchMedia.mock';
import DailyWeathers from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import { SnackbarProvider } from 'notistack';

test("Daily Weather component", () => {
  const reduxStore = store;

  const weathers = renderer.create(
      <Provider store={reduxStore}>
        <SnackbarProvider maxSnack={4}>
          <DailyWeathers/>
        </SnackbarProvider>
      </Provider>
  );

  expect(weathers.toJSON()).toMatchSnapshot();
});
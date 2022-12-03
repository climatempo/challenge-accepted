import renderer from 'react-test-renderer';
import '../../Tests/watchMedia.mock';
import store from '../../store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import Header from './index';
import { switchTemperature } from '../../Reducers/Temperature.reducer';
import { switchPrecipitation } from '../../Reducers/Precipitation.reducer';
import { switchTheme } from '../../Reducers/Theme.reducer';

const createHeader = (reduxStore: ToolkitStore) => renderer.create(
  <Provider store={reduxStore}>
      <SnackbarProvider maxSnack={4}>
          <Header/>
      </SnackbarProvider>
  </Provider>
);

test('Header component', () => {
    const reduxStore = store;

    const header = createHeader(reduxStore);
    expect(header.toJSON()).toMatchSnapshot();

    reduxStore.dispatch(switchTheme);
    const headerTheme = createHeader(reduxStore);
    expect(headerTheme.toJSON()).toMatchSnapshot();

    reduxStore.dispatch(switchTemperature);
    const headerTemperature = createHeader(reduxStore);
    expect(headerTemperature.toJSON()).toMatchSnapshot();

    reduxStore.dispatch(switchPrecipitation);
    const headerPrecipitation = createHeader(reduxStore);
    expect(headerPrecipitation.toJSON()).toMatchSnapshot();
});
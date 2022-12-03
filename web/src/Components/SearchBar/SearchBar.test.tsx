import renderer from 'react-test-renderer';
import '../../Tests/watchMedia.mock';
import store from '../../store';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import SearchBar from './index';

test('Search Bar component', () => {
    const bar = renderer.create(
      <Provider store={store}>
          <SnackbarProvider maxSnack={4}>
              <SearchBar/>
          </SnackbarProvider>
      </Provider>
    );
    expect(bar.toJSON()).toMatchSnapshot();
});
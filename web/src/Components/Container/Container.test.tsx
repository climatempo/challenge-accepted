import renderer from 'react-test-renderer';
import './../../Tests/watchMedia.mock';
import Container from './index';
import { DetailedLocale, setLocale } from '../../Reducers/Locale.reducer';
import { Provider } from 'react-redux';
import store from '../../store';
import { SnackbarProvider } from 'notistack';

test("Container", () => {
    const dummyLocale = {
        "idlocale": 8600,
        "idcity": 3664,
        "capital": false,
        "idcountry": 7,
        "ac": "BR",
        "country": "Brasil",
        "uf": "MG",
        "city": "Chácara",
        "region": "SE",
        "seaside": false,
        "latitude": -21.672,
        "longitude": -43.222,
        "tourist": false,
        "agricultural": false,
        "base": "cities",
        "searchPoints": 200
    } as DetailedLocale;

    const reduxStore = store;

    const container = renderer.create(
      <Provider store={reduxStore}>
          <SnackbarProvider maxSnack={4}>
              <Container/>
          </SnackbarProvider>
      </Provider>
    );

    expect(container.toJSON()).toMatchSnapshot();

    // Added dummy city info
    reduxStore.dispatch(setLocale(dummyLocale));
    const containerPopulated = renderer.create(
      <Provider store={reduxStore}>
          <SnackbarProvider maxSnack={4}>
            <Container/>
          </SnackbarProvider>
      </Provider>
    );

    expect(containerPopulated.toJSON()).toMatchSnapshot();
});

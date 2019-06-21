import { Locale } from '@climatempo/api-interface';
import { of } from 'rxjs';

import { WeatherListComponent } from './weather-list.component';

describe('WeatherListComponent', () => {
    const testLocale: Locale = {
        id: 1234,
        latitude: 1,
        longitude: 2,
        name: 'Test',
        state: 'TS'
    };

    let component: WeatherListComponent;

    test('should create', () => {
        component = new WeatherListComponent(null);
        expect(component).toBeTruthy();
    });

    describe('updateCards', () => {
        test('it should update selectedLocale', () => {
            component = new WeatherListComponent(<any>{
                getWeatherByLocale: jest.fn()
            });

            component.updateCards(testLocale);

            expect(component.selectedLocale).toEqual(testLocale);
        });

        test('it should set weather$ from service', () => {
            const getWeatherByLocaleMock = jest.fn(() => of('test'));

            component = new WeatherListComponent(<any>{
                getWeatherByLocale: getWeatherByLocaleMock
            });

            component.updateCards(testLocale);

            expect(component.weather$).toBeDefined();
            expect(component.weather$.subscribe).toBeDefined();
        });
    });
});

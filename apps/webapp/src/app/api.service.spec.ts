import { Locale } from '@climatempo/api-interface';
import { of } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    const testLocale: Locale = {
        id: 1234,
        latitude: 1,
        longitude: 2,
        name: 'Test',
        state: 'TS'
    };

    test('it should create', () => {
        service = new ApiService(null);
        expect(service).toBeTruthy();
    });

    describe('filterLocales', () => {
        test('it should call http .get', () => {
            const getMock = jest.fn(() => of());

            service = new ApiService(<any>{
                get: getMock
            });

            const result = service.filterLocales('test');

            expect(getMock).toBeCalledWith(expect.stringContaining(`/locale/filter/test`));
            expect(result.subscribe).toBeDefined();
        });
    });

    describe('getWeatherByLocale', () => {
        test('it should call http .get', () => {
            const getMock = jest.fn(() => of());

            service = new ApiService(<any>{
                get: getMock
            });

            const result = service.getWeatherByLocale(testLocale);
            expect(getMock).toBeCalledWith(expect.stringContaining(`/weather/locale/1234`));
            expect(result.subscribe).toBeDefined();
        });
    });
});

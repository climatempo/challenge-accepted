import { WeatherService } from './weather.service';

describe('LocaleService', () => {
    let service: WeatherService;

    beforeEach(() => {
        service = new WeatherService();
    });
    test('it should exist', () => {
        expect(service).toBeTruthy();
    });

    describe('getByLocaleId', () => {
        test('it should be defined', () => {
            expect(service.getByLocaleId).toBeTruthy();
        });

        test('it should return weather for matching localeId', async () => {
            const results = await service.getByLocaleId(3477);

            expect(results.length).toBe(7);
        });

        test('it should return null for localeId not found', async () => {
            const results = await service.getByLocaleId(3433);

            expect(results).toBeNull();
        });
    });
});

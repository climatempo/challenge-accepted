import { LocaleService } from './locale.service';

describe('LocaleService', () => {
    let service: LocaleService;

    beforeEach(() => {
        service = new LocaleService();
    });
    test('it should exist', () => {
        expect(service).toBeTruthy();
    });

    describe('filterLocales', () => {
        test('it should be defined', () => {
            expect(service.filterLocales).toBeTruthy();
        });

        test('it should return locales with name matching text', async () => {
            const results = await service.filterLocales('sao');

            expect(results[0].name).toBe('São Paulo');
            expect(results).toHaveLength(1);
        });
    });
});

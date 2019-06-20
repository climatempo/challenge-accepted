import { LocaleController } from './locale.controller';

describe('LocaleController', () => {
    let filterLocalesMock: jest.Mock;
    let controller: LocaleController;

    beforeEach(() => {
        filterLocalesMock = jest.fn(x => 'test');

        controller = new LocaleController(<any>{
            filterLocales: filterLocalesMock,
        });
    });

    test('it should exist', () => {
        expect(controller).toBeTruthy();
    });

    describe('filter', () => {
        test('it should be defined', () => {
            expect(controller.filter).toBeTruthy();
        });

        test('it should throw if search text is too short', async () => {
            await expect(controller.filter('os')).rejects.toThrow();
        });

        test('it should return LocaleService.filterLocales', async () => {
            const results = await controller.filter('osasco');

            expect(filterLocalesMock.mock.calls.length).toBe(1);
            expect(results).toBe('test');
        });
    });
});

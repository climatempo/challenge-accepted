import { NotFoundException } from '@nestjs/common';

import { WeatherController } from './weather.controller';

describe('WeatherController', () => {
    let controller: WeatherController;

    test('it should exist', () => {
        controller = new WeatherController(null);
        expect(controller).toBeTruthy();
    });

    describe('getByLocaleId', () => {
        test('it should be defined', () => {
            expect(controller.getByLocaleId).toBeTruthy();
        });

        test('it should throw (404) if not found', async () => {
            const getByLocaleIdMock = jest.fn(x => null);

            controller = new WeatherController(<any>{
                getByLocaleId: getByLocaleIdMock,
            });

            await expect(controller.getByLocaleId('1234')).rejects.toThrow(NotFoundException);
        });

        test('it should return WeatherService.getByLocaleId', async () => {
            const getByLocaleIdMock = jest.fn(x => 'test');
            controller = new WeatherController(<any>{
                getByLocaleId: getByLocaleIdMock,
            });

            const result = await controller.getByLocaleId('3477');

            expect(getByLocaleIdMock.mock.calls.length).toBe(1);
            expect(result).toBe('test');
        });
    });
});

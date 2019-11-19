import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './sw.service';
import { LocaleDto } from '../dtos/locale.dto';
import { ConditionDto } from '../dtos/condition.dto';
import { SearchLocaleDto } from '../dtos/searchLocale.dto';
import { SearchConditionDto } from '../dtos/searchCondition.dto';
import { LocaleRepository } from '../repositories/locale.repository';
import { WeatherRepository } from '../repositories/weather.repository';

describe('SearchWeatherController', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService, LocaleRepository, WeatherRepository],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('Find Locale By Name "são" ', () => {
      const expectedResult = new LocaleDto().populateDto({
        id: 3477,
        latitude: -23.548,
        longitude: -46.636,
        name: 'São Paulo',
        state: 'SP',
      });

      const locale = new SearchLocaleDto();
      locale.location = 'são';

      jest.spyOn(appService, 'getWeatherLocation');
      expect(appService.getWeatherLocation(locale)).toStrictEqual(
        expectedResult
      );
    });

    it('Function: getWeatherLocation | Find Locale By Name "paulo" ', () => {
      const expectedResult = new LocaleDto().populateDto({
        id: 3477,
        latitude: -23.548,
        longitude: -46.636,
        name: 'São Paulo',
        state: 'SP',
      });

      const locale = new SearchLocaleDto();
      locale.location = 'são';

      jest.spyOn(appService, 'getWeatherLocation');
      expect(appService.getWeatherLocation(locale)).toStrictEqual(
        expectedResult
      );
    });

    it('Function: getWeatherLocation | Find Locale By Name "são paulo" ', () => {
      const expectedResult = new LocaleDto().populateDto({
        id: 3477,
        latitude: -23.548,
        longitude: -46.636,
        name: 'São Paulo',
        state: 'SP',
      });

      const locale = new SearchLocaleDto();
      locale.location = 'são';

      jest.spyOn(appService, 'getWeatherLocation');
      expect(appService.getWeatherLocation(locale)).toStrictEqual(
        expectedResult
      );
    });

    it('Function: getWeatherLocation | should throw NotFoundException if locale not found', () => {
      const locale = new SearchLocaleDto();
      locale.location = 'casa';

      jest.spyOn(appService, 'getWeatherLocation');
      expect(() => {
        appService.getWeatherLocation(locale);
      }).toThrow();
    });

    it('Function: getConditionByLocale | Find condition by locale id "3735"', () => {
      const condition = new SearchConditionDto();
      condition.id = '3735';

      jest.spyOn(appService, 'getConditionByLocale');
      expect(appService.getConditionByLocale(condition)).toBeTruthy();
      expect(appService.getConditionByLocale(condition)).toBeInstanceOf(
        ConditionDto
      );
    });

    it('Function: getConditionByLocale | should throw NotFoundException if locale not found in data conditions', () => {
      const condition = new SearchConditionDto();
      condition.id = '9999';

      jest.spyOn(appService, 'getConditionByLocale');
      expect(() => {
        appService.getConditionByLocale(condition);
      }).toThrow();
    });
  });
});

import { LocaleId } from '../../../domain/valueObject/LocaleId';
import { GenerateForecast } from './generateForecast';

describe('GenerateForecast', () => {
  it('should generate a forecast', async () => {
    const generateForecast = new GenerateForecast();
    const localeID = new LocaleId(3477);

    const forecast = await generateForecast.execute(localeID);

    expect(forecast).toBeDefined();
  });
});

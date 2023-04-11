import { z } from 'zod';
import { Period } from '../valueObject/Period';
import { Weather } from '../valueObject/Weather';
import { Locale } from './Locale';

const forecastSchema = z.object({
  period: z.instanceof(Period),
  locale: z.instanceof(Locale),
  weather: z.array(z.instanceof(Weather)),
});

type ForecastProps = z.infer<typeof forecastSchema>;

export class Forecast {
  private props: ForecastProps;

  constructor(props: ForecastProps) {
    this.props = {
      ...props,
    };
    forecastSchema.parse(this);
  }

  get period(): Period {
    return this.props.period;
  }
  get locale(): Locale {
    return this.props.locale;
  }
  get weather(): Weather[] {
    return this.props.weather;
  }

  get isOutdated(): boolean {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    return this.period.begin < today;
  }
}

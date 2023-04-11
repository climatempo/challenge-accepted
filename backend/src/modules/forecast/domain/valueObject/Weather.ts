import { z } from 'zod';
import { ValueObject } from '../../../../@shared/ValueObject';

const weatherSchema = z.object({
  date: z.date(),
  text: z.string(),
  temperature: z.object({
    min: z.number(),
    max: z.number(),
  }),
  rain: z.object({
    probability: z.number(),
    precipitation: z.number(),
  }),
});

type WeatherProps = z.infer<typeof weatherSchema>;

export class Weather extends ValueObject<WeatherProps> {
  constructor(props: WeatherProps) {
    super(props);
    weatherSchema.parse(this);
  }

  get date(): Date {
    return this.props.date;
  }

  get text(): string {
    return this.props.text;
  }

  get temperature(): { min: number; max: number } {
    return this.props.temperature;
  }

  get rain(): { precipitation: number; probability: number } {
    return this.props.rain;
  }
}

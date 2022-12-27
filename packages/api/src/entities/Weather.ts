import { v4 as uuidv4 } from 'uuid';

export class Weather {
  public readonly id: string;
  localeId: string;
  date: Date;
  text: string;
  temperatureMin: number;
  temperatureMax: number;
  probability: number;
  precipitation: number;

  constructor(props: Omit<Weather, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) this.id = uuidv4();
  }
}

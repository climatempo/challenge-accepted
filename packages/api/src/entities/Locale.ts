import { v4 as uuidv4 } from 'uuid';

export class Locale {
  public readonly id: string;
  name: string;
  state: string;
  latitude: number;
  longitude: number;

  constructor(props: Omit<Locale, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) this.id = uuidv4();
  }
}

import { z } from 'zod';
import { Latitude } from '../valueObject/Latitude';
import { LocaleId } from '../valueObject/LocaleId';
import { LocaleName } from '../valueObject/LocaleName';
import { Longitude } from '../valueObject/Longitude';
import { State } from '../valueObject/State';

const localeSchema = z.object({
  id: z.instanceof(LocaleId),
  name: z.instanceof(LocaleName),
  state: z.instanceof(State),
  latitude: z.instanceof(Latitude).optional().nullable(),
  longitude: z.instanceof(Longitude).optional().nullable(),
});

type LocaleProps = z.infer<typeof localeSchema>;

export class Locale {
  private props: LocaleProps;

  constructor(props: LocaleProps) {
    this.props = {
      ...props,
    };

    localeSchema.parse(this);
  }

  get id(): LocaleId {
    return this.props.id;
  }
  get name(): LocaleName {
    return this.props.name;
  }
  get state(): State {
    return this.props.state;
  }
  get latitude(): Latitude | null {
    return this.props.latitude || null;
  }
  get longitude(): Longitude | null {
    return this.props.longitude || null;
  }

  public toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      state: this.state.value,
      latitude: this.latitude?.value,
      longitude: this.longitude?.value,
    };
  }
}

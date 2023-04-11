import { z } from 'zod';
import { ValueObject } from '../../../../@shared/ValueObject';

const longitudeSchema = z.number().min(-180).max(180);

type LongitudeProps = {
  value: z.infer<typeof longitudeSchema>;
};

export class Longitude extends ValueObject<LongitudeProps> {
  constructor(value: number) {
    super({ value });
    longitudeSchema.parse(value);
  }

  get value(): number {
    return this.props.value;
  }
}

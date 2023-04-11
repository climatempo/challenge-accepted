import { z } from 'zod';
import { ValueObject } from '../../../../@shared/ValueObject';

const latitudeSchema = z.number().min(-90).max(90);

type LatitudeProps = {
  value: z.infer<typeof latitudeSchema>;
};

export class Latitude extends ValueObject<LatitudeProps> {
  constructor(value: number) {
    super({ value });
    latitudeSchema.parse(value);
  }

  get value(): number {
    return this.props.value;
  }
}

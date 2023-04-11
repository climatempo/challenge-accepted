import { z } from 'zod';
import { ValueObject } from '../../../../@shared/ValueObject';

const localeNameSchema = z.string();

type LocaleNameProps = {
  value: z.infer<typeof localeNameSchema>;
};

export class LocaleName extends ValueObject<LocaleNameProps> {
  constructor(value: string) {
    super({ value });
    localeNameSchema.parse(value);
  }

  get value(): string {
    return this.props.value;
  }
}

import { z } from 'zod';
import { ValueObject } from '../../../../@shared/ValueObject';

const localeIdSchema = z.object({
  value: z.number().positive(),
});

type LocaleIdProps = z.infer<typeof localeIdSchema>;

export class LocaleId extends ValueObject<LocaleIdProps> {
  constructor(value: number) {
    super({ value });
    localeIdSchema.parse(this);
  }

  get value(): number {
    return this.props.value;
  }
}

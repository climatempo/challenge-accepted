import { z } from 'zod';
import { ValueObject } from '../../../../@shared/ValueObject';

const periodSchema = z.object({
  begin: z.date(),
  end: z.date(),
});

type PeriodProps = z.infer<typeof periodSchema>;

export class Period extends ValueObject<PeriodProps> {
  constructor(props: PeriodProps) {
    super(props);
    periodSchema.parse(this);
  }

  get begin() {
    return this.props.begin;
  }

  get end() {
    return this.props.end;
  }
}

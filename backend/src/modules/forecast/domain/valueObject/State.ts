import { z } from 'zod';
import { ValueObject } from '../../../../@shared/ValueObject';

const VALID_STATES = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
] as const;

const stateSchema = z.object({
  value: z.enum(VALID_STATES),
});

type StateProps = z.infer<typeof stateSchema>;
export type StateType = StateProps['value'];

export class State extends ValueObject<StateProps> {
  constructor(value: StateType) {
    super({ value });
    stateSchema.parse(this);
  }

  get value(): string {
    return this.props.value;
  }
}

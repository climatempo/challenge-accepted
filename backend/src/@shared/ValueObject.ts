export class ValueObject<Props> {
  protected props: Props;

  constructor(props: Props) {
    this.props = props;
  }

  isEqual(other: ValueObject<Props>): boolean {
    const currentProps = Object.assign({}, {}, { ...this.props });
    const providedProps = Object.assign({}, {}, { ...other.props });
    return JSON.stringify(currentProps) === JSON.stringify(providedProps);
  }
}

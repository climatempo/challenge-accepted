import { Period } from './Period';

describe('Period', () => {
  it('should create a valid period values', () => {
    const begin = new Date('2023-04-08');
    const end = new Date('2023-04-14');

    const period = new Period({ begin, end });

    expect(period).toBeDefined();
    expect(period).toBeInstanceOf(Period);
    expect(period.begin).toBe(begin);
    expect(period.end).toBe(end);
  });
});

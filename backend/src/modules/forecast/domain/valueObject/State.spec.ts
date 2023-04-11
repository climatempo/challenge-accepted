import { State } from './State';

describe('State', () => {
  it('should create a valid state', () => {
    const state = new State('SP');

    expect(state).toBeDefined();
    expect(state).toBeInstanceOf(State);
    expect(state.value).toBe('SP');
  });
});

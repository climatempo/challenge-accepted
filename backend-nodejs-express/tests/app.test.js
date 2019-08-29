import '@babel/polyfill';

import test from './test';

describe('Server', () => {
  it('Should success', () => {
    return test().get('/api')
    .expect('Content-Type', 'text/html; charset=utf-8')
    .expect(200)
    .expect(({ text }) => {
      expect(text).toBe('ok');
    });
  });
});

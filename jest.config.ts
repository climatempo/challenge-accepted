import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: false,
  silent: false,
  setupFilesAfterEnv: ['./jest.setup.ts'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
  testPathIgnorePatterns: ['cypress'],
  coveragePathIgnorePatterns: ['cypress'],
  modulePathIgnorePatterns: ['cypress'],
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverage: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
  },
};

export default config;

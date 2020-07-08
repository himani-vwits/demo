const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.base');
const tsJestPreset = require('jest-preset-angular/jest-preset').globals['ts-jest'];

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
  coverageDirectory: './coverage',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/src/test.ts'],
  coverageReporters: ['text', 'html', 'lcov'],
  reporters: ['default'],
  clearMocks: true,
  collectCoverageFrom: [
    '**/*.ts',
    '!**/src/*.ts',
    '!**/*.module.ts',
    '!**/node_modules/**',
    '!**/environments/**',
    '!**/vendor/**'
  ],
  roots: ['<rootDir>/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  collectCoverage: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  globals: {
    'ts-jest': {
      ...tsJestPreset,
      tsConfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: "\\.html$",
      astTransformers: [
          "<rootDir>/node_modules/jest-preset-angular/InlineHtmlStripStylesTransformer"
      ]
    }
  }
};
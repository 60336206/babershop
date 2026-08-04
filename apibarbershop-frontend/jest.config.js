module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/environments/**'
  ],
  coverageDirectory: 'coverage/barbershop-frontend',
  coverageReporters: ['lcov', 'text', 'html'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^zone.js$': '<rootDir>/node_modules/zone.js/bundles/zone.umd.js',
    '^zone.js/testing$': '<rootDir>/node_modules/zone.js/bundles/zone-testing.umd.js'
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/environments/',
    'src/main.ts',
    'src/polyfills.ts'
  ],
};

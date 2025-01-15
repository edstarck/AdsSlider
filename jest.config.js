export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@domain/(.*)$': '<rootDir>/src/domain/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@ui/(.*)$': '<rootDir>/src/ui/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

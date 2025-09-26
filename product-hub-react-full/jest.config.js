module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@enum/(.*)': '<rootDir>/src/enum/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@lib/(.*)': '<rootDir>/src/lib/$1',
    '@locales/(.*)': '<rootDir>/src/locales/$1',
    '@prisma/(.*)': '<rootDir>/src/prisma/$1',
    '@state/(.*)': '<rootDir>/src/state/$1',
    '@styles/(.*)': '<rootDir>/src/styles/$1',
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    // '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};

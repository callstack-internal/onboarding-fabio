module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|react-native-vector-icons)',
  ],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};

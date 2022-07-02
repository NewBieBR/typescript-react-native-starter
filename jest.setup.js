import nock from 'nock';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

nock.disableNetConnect();

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-i18next', () => ({
  useTranslation: () => ({t: (key) => key}),
}));

jest.mock('react-native-bootsplash', () => {
  return {
    show: jest.fn().mockResolvedValueOnce(),
    hide: jest.fn().mockResolvedValueOnce(),
    getVisibilityStatus: jest.fn().mockResolvedValue('hidden'),
  };
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
  };
});

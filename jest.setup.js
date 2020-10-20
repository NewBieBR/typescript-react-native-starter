import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';
import nock from 'nock';

// for persistor compatibility
jest.useFakeTimers();

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});

nock.disableNetConnect();

import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import nock from 'nock';

// for persistor compatibility
jest.useFakeTimers();

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn(),
    show: jest.fn(),
  };
});

nock.disableNetConnect();

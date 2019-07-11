import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { render } from 'react-native-testing-library';
import { Home, Props } from '../../src/containers/Home';

const createTestProps = (props?: object) => ({
  ...props,
});

jest.mock('NativeModules', () => {
  return {
    ReactLocalization: {
      language: 'en',
    },
  };
});

jest.mock('react-native-version-number', () => {
  return { appVersion: '1.0.0', buildVersion: '1' };
});

Enzyme.configure({ adapter: new Adapter() });
describe('Home', () => {
  const props = createTestProps({
    version: '1.0.0',
    buildVersion: '1',
    fetchUser: jest.fn(),
  });
  const { getByText, toJSON } = render(<Home {...props} />);

  it('should render a welcome', () => {
    expect(getByText(/welcome/i)).toBeDefined();
  });
  it('should render a edit', () => {
    expect(getByText(/edit/i)).toBeDefined();
  });
  it('should match snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});

describe('Home function', () => {
  it('should updateStoreState and setAppVersion', () => {
    const updateStoreState = jest.fn();
    const setAppVersion = jest.fn();
    const fetchUser = jest.fn();
    const props = createTestProps({
      updateStoreState,
      setAppVersion,
      fetchUser,
    });
    const wrapper = shallow<Home>(<Home {...props} />);
    wrapper.instance().checkAppVersion();
    expect(updateStoreState).toBeCalled();
    expect(setAppVersion).toBeCalled();
  });
});

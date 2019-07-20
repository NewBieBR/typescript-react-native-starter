import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { render } from 'react-native-testing-library';
import { Home, Props } from '../../src/containers/Home';

Enzyme.configure({ adapter: new Adapter() });

const createTestProps = (props?: object) => ({
  fetchUser: jest.fn(),
  user: {},
  ...props,
});

jest.mock('NativeModules', () => {
  return {
    ReactLocalization: {
      language: 'en',
    },
  };
});

describe('Home', () => {
  const fetchUser = jest.fn();
  const navigate = jest.fn();
  const props: any = createTestProps({
    fetchUser,
    navigation: {
      navigate,
    },
  });
  const { getByText, toJSON } = render(<Home {...props} />);
  it('should render a welcome', () => {
    expect(getByText(/welcome/i)).toBeDefined();
  });

  it('should call fetchUser', () => {
    expect(fetchUser).toBeCalled();
  });

  it('should match snapshot', () => {
    expect(toJSON()).toMatchSnapshot();
  });
});

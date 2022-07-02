import {render} from '@testing-library/react-native';
import React from 'react';
import {App} from 'src/App';

describe('App', () => {
  it('should renders correctly', () => {
    const page = render(<App />);
    expect(page.toJSON()).toMatchSnapshot();
  });
});

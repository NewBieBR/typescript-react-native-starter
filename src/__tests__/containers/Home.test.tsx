import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Home from 'src/containers/Home';
import {Provider} from 'react-redux';
import {store} from 'src/store';
import nock from 'nock';
import JSONPlacholderAPI from 'src/lib/jsonPlaceholderAPI';

const mockFetchUser = jest.fn();

describe('Home', () => {
  const pageTree = (
    <Provider store={store}>
      <Home />
    </Provider>
  );
  it('should renders correctly', () => {
    const page = render(pageTree);
    expect(page.toJSON()).toMatchSnapshot();
  });

  it('should fetch user on click', async () => {
    nock(`${JSONPlacholderAPI.apiEntry}`)
      .get(`/${JSONPlacholderAPI.usersNamespace}/1`)
      .reply(200, {
        body: {id: '1', email: '1', name: '1', phone: '1'},
      });
    const page = render(pageTree);
    const fetchUserButton = page.getByText('fetchUser');
    fireEvent.press(fetchUserButton);
    await waitFor(() => {
      expect(mockFetchUser).toBeCalledTimes(1);
    });
    page.debug();
  });
});

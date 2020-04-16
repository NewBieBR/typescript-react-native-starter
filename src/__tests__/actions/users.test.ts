import * as types from '../../actions/actionTypes';
import {fetchUser, fetchUserFailure, fetchUserSuccess} from '../../actions/usersActions';

test('should fetchUser', () => {
  const payload = '1';
  expect(fetchUser(payload)).toMatchObject({
    type: types.USER.FETCH,
    payload,
  });
});

test('should fetchUserSuccess', () => {
  const payload = {};
  expect(fetchUserSuccess(payload)).toMatchObject({
    type: types.USER.FETCH_SUCCESS,
    payload,
  });
});

test('should fetchUserFailure', () => {
  const payload = 'error';
  expect(fetchUserFailure(payload)).toMatchObject({
    type: types.USER.FETCH_FAILURE,
    payload,
  });
});

import {expectSaga} from 'redux-saga-test-plan';
import {throwError} from 'redux-saga-test-plan/providers';
import {call} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import {fetchUserAsync} from '../../actions/usersActions';
import JSONPlacholderAPI from '../../lib/jsonPlaceholderAPI';
import usersReducer from '../../reducers/usersReducer';
import usersSaga from '../../sagas/usersSagas';
import {User} from '../../types';

describe('usersSaga', () => {
  const user: User = {id: '1', email: '', phone: '', name: ''};

  it('should fetch a user', () => {
    expectSaga(usersSaga)
      .withReducer(usersReducer)
      .provide([[call(JSONPlacholderAPI.fetchUser, user.id), user]])
      .dispatch({type: getType(fetchUserAsync.request), payload: user.id})
      .put({type: getType(fetchUserAsync.success), payload: user})
      .hasFinalState({user})
      .run();
  });

  it('handles errors', () => {
    const error = new Error('Whoops');
    expectSaga(usersSaga)
      .provide([[call(JSONPlacholderAPI.fetchUser, user.id), throwError(error)]])
      .dispatch({type: getType(fetchUserAsync.request), payload: user.id})
      .put({type: getType(fetchUserAsync.failure), payload: error})
      .run();
  });
});

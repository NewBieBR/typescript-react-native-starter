import { call, put, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { fetchUserFailure, fetchUserSuccess } from '../actions/users';
import JSONPlaceholderAPI from '../lib/jsonPlaceholderAPI';
import { BaseAction } from '../types';

function* fetchUser(action: BaseAction) {
  try {
    const user = yield call(JSONPlaceholderAPI.fetchUser, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFailure(e.message));
  }
}

export default function* root() {
  yield takeEvery(types.USER.FETCH, fetchUser);
}

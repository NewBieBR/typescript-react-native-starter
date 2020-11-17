import {call, delay, put, race, take, takeLatest} from 'redux-saga/effects';
import {fetchUserAsync} from '../actions/usersActions';
import JSONPlaceholderAPI from '../lib/jsonPlaceholderAPI';

export function* fetchUserSaga(action: ReturnType<typeof fetchUserAsync.request>) {
  try {
    const {response} = yield race({
      response: call(JSONPlaceholderAPI.fetchUser, action.payload),
      cancel: take(fetchUserAsync.cancel),
      failed: take(fetchUserAsync.failure),
      timeout: delay(60000),
    });
    yield put(fetchUserAsync.success(response));
  } catch (error) {
    yield put(fetchUserAsync.failure(error));
  }
}

export default function* root() {
  yield takeLatest(fetchUserAsync.request, fetchUserSaga);
}

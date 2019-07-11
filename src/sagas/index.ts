import { all } from 'redux-saga/effects';
import users from './users';

export default function* root() {
  yield all([users()]);
}

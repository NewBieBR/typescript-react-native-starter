import { action } from 'typesafe-actions';
import * as types from '../../src/actions/actionTypes';
import { setAppVersion, updateStoreState } from '../../src/actions/app';

test('should setAppVersion', () => {
  const payload = { version: '1.0.0', buildVersion: '1' };
  expect(setAppVersion(payload)).toEqual(
    action(types.APP.SET_VERSION, payload),
  );
});

test('should updateStoreState', () => {
  expect(updateStoreState()).toEqual(action(types.APP.UPDATE_STORE_STATE));
});

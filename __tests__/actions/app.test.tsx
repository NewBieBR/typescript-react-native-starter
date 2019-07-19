import { action } from 'typesafe-actions';
import * as types from '../../src/actions/actionTypes';
import { updateStoreState } from '../../src/actions/app';

test('should updateStoreState', () => {
  expect(updateStoreState()).toEqual(action(types.APP.UPDATE_STORE_STATE));
});

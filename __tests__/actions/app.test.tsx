import * as types from '../../src/actions/actionTypes';
import { updateStoreState } from '../../src/actions/app';

test('should updateStoreState', () => {
  expect(updateStoreState()).toMatchObject({
    type: types.APP.UPDATE_STORE_STATE,
  });
});

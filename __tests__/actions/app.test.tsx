import * as types from '../../src/actions/actionTypes';
import { setStoreState } from '../../src/actions/appActions';

test('should setStoreState', () => {
  expect(setStoreState()).toMatchObject({
    type: types.APP.SET_STORE_STATE,
  });
});

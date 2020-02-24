import * as types from '../../src/actions/actionTypes';
import { updateStoreState } from '../../src/actions/appActions';

test('should updateStoreState', () => {
  expect(updateStoreState()).toMatchObject({
    type: types.APP.UPDATE_STORE_STATE,
  });
});

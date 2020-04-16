import * as types from '../../actions/actionTypes';
import {setStoreState} from '../../actions/appActions';

test('should setStoreState', () => {
  expect(setStoreState()).toMatchObject({
    type: types.APP.SET_STORE_STATE,
  });
});

'use strict';
import { APP } from '../actions/actionTypes';

const initialState = {
  version: '',
  buildVersion: '',
};

export default function appReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case APP.SET_VERSION:
      return Object.assign({}, state, action.payload);
    case APP.UPDATE_STORE_STATE:
      return Object.assign({}, initialState, state);
    default:
      return state;
  }
}

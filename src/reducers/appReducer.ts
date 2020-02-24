'use strict';
import { APP } from '../actions/actionTypes';

const initialState = {};

export default function appReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case APP.UPDATE_STORE_STATE:
      return Object.assign({}, initialState, state);
    default:
      return state;
  }
}

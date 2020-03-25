'use strict';
import { APP } from '@actions/actionTypes';

export interface AppReducerState {
  version: string;
}

const initialState: AppReducerState = {
  version: '1.0.0',
};

export default function appReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case APP.SET_STORE_STATE:
      return Object.assign({}, initialState, state, action.payload);
    default:
      return state;
  }
}

'use strict';
import { USER } from '@actions/actionTypes';

const initialState = {
  user: null,
};

export default function usersReducer(state = initialState, action: any = {}) {
  switch (action.type) {
    case USER.FETCH_SUCCESS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

import {User} from '../types';
import {action} from 'typesafe-actions';
import * as types from './actionTypes';

export const fetchUserSuccess = (payload: User) => action(types.USER.FETCH_SUCCESS, payload);

export const fetchUserFailure = (payload: string) => action(types.USER.FETCH_FAILURE, payload);

export const fetchUser = (payload: string) => action(types.USER.FETCH, payload);

import { action } from 'typesafe-actions';
import * as types from './actionTypes';

export const updateStoreState = () => action(types.APP.UPDATE_STORE_STATE);

import { action } from 'typesafe-actions';
import * as types from './actionTypes';

export const updateStoreState = () => action(types.APP.UPDATE_STORE_STATE);

export const setAppVersion = (payload: {
  version: string;
  buildVersion: string;
}) => action(types.APP.SET_VERSION, payload);

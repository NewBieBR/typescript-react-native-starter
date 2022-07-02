'use strict';
import {ThemeType} from 'src/theme';
import {AppAction} from 'src/types/actions';
import {createReducer} from 'typesafe-actions';
import {setAppTheme} from './actions';

export interface AppState {
  theme: ThemeType;
}

const initialState: AppState = {
  theme: 'light',
};

export const appReducer = createReducer<AppState, AppAction>(initialState).handleAction(
  setAppTheme,
  (state, {payload: theme}) => ({...state, theme}),
);

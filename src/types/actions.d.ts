import {ActionType} from 'typesafe-actions';
import * as appActions from '../modules/app/actions';
import * as habitsActions from '../modules/habits/actions';

export type AppAction = ActionType<typeof appActions>;
export type HabitsAction = ActionType<typeof habitsActions>;

export type RootAction = AppAction | HabitsAction;

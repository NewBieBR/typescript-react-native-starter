import {ThemeType} from 'src/theme';
import {createAction} from 'typesafe-actions';

export const setAppTheme = createAction('SET_APP_THEME', (value: ThemeType) => value)();

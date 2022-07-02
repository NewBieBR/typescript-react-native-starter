import {RootState} from 'src/store';
import {Themes} from 'src/theme';

export const themeTypeSelector = (state: RootState) => state.app.theme;

export const themeSelector = (state: RootState) => Themes[state.app.theme];

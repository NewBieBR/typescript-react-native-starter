import {NavigationContainer} from '@react-navigation/native';
import React, {memo, ReactNode} from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {AppStack} from 'src/navigators/AppStack';
import {store} from 'src/store';
import {ThemeProvider} from 'styled-components';
import {useSelector} from './hooks/useSelector';
import {themeTypeSelector} from './modules/app/selectors';
import {useColorScheme} from 'react-native';
import {Themes} from './theme';

const AppThemeProvider = ({children}: {children: ReactNode | ReactNode[]}) => {
  const userSelectedThemeType = useSelector(themeTypeSelector);
  const systemThemeType = useColorScheme();
  const themeType =
    userSelectedThemeType === 'system' && systemThemeType ? systemThemeType : userSelectedThemeType;
  const theme = Themes[themeType];

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={theme.barStyle} />
      {children}
    </ThemeProvider>
  );
};

const AppComponent = (): JSX.Element => {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </AppThemeProvider>
    </Provider>
  );
};

export const App = memo(AppComponent);

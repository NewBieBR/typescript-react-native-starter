import React from 'react';
import { View } from 'react-native';
// import { useScreens } from 'react-native-screens';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import NavigationService from './lib/NavigationService';
import { persistor, store } from './store';

// useScreens();

// tslint:disable-next-line: variable-name
const AppContainer = createAppContainer(App);

export default class Root extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<View />} persistor={persistor}>
          <AppContainer
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}

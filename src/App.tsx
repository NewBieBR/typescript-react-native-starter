import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Home from './containers/Home';
import Settings from './containers/Settings';

const Tab = createBottomTabNavigator();

export type AppTabParamList = {
  Home: undefined;
  Settings: { userID?: string };
};

const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default App;

import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {SplashScreen} from 'src/pages/SplashScreen';
import {MainBottomTab} from './MainBottomTab';

const {Screen, Navigator} = createNativeStackNavigator<AppStackParamList>();

export type AppStackParamList = {
  splash: undefined;
  mainBottomTab: undefined;
};

export type AppStackNavigationProp<RouteName extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, RouteName>;

export type AppNavigations = {
  [RouteName in keyof AppStackParamList]: AppStackNavigationProp<RouteName>;
};

export type AppStackRoutes = {
  [RouteName in keyof AppStackParamList]: RouteProp<AppStackParamList, RouteName>;
};

export const AppStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="splash" component={SplashScreen} />
      <Screen name="mainBottomTab" component={MainBottomTab} />
    </Navigator>
  );
};

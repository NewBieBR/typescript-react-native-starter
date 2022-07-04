import {useNavigation} from '@react-navigation/native';
import React, {memo, useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {Navigations} from 'src/navigation';

const SplashScreenComponent = (): JSX.Element => {
  const {reset} = useNavigation<Navigations['splash']>();

  const hideSplash = () => RNBootSplash.hide({fade: true});

  useEffect(() => {
    reset({index: 0, routes: [{name: 'mainBottomTab', params: {screen: 'home'}}]});
    setTimeout(hideSplash, 450);
  }, []);
  return <></>;
};

export const SplashScreen = memo(SplashScreenComponent);

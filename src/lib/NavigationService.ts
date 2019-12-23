import { NavigationActions } from 'react-navigation';

let navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

function navigate(routeName: string, params?: object) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};

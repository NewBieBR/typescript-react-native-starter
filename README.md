[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/NewBieBR/typescript-react-native-starter.svg?style=popout)](https://codecov.io/gh/NewBieBR/typescript-react-native-starter)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

# Typescript React Native Starter

This is an opionated configuration for typescript react native project.

## Features

- **Typescript**
  - [React Native's typescript template](https://github.com/react-native-community/react-native-template-typescript) based

- **Flux State management**
  - [Redux](https://github.com/reduxjs/redux): predictable state container
  - [Redux Persist](https://github.com/rt2zz/redux-persist): offline store
  - [typesafe-actions](https://github.com/piotrwitek/typesafe-actions): create typesafe actions easily

      ```javascript
      import { action } from 'typesafe-actions';
      import * as types from './actionTypes';

      export const myAction = payload => action(types.MY_ACTION_TYPE, payload);
      ```

  - [Redux Saga](https://github.com/redux-saga/redux-saga): side effect model for Redux

- **Navigation**
  - [React Navivation](https://github.com/react-navigation/react-navigation): easy-to-use navigation solution based on Javascript

- **Unit testing**
  - Unit tests with [Jest](https://github.com/facebook/jest), [Enzyme](https://github.com/airbnb/enzyme) and [react-native-testing-library](https://github.com/callstack/react-native-testing-library)
- - [Codecov](https://codecov.io/): coverage report

- **CI/CD**

  - Run linting pre-commit and unit testing pre-push with [husky](https://github.com/typicode/husky)'s hooks

- **Linting**
  - Tslint configured with Airbnb styles
  - Vscode Prettier compatible

- **Internationalization and localization**
  - [react-native-localization](https://github.com/stefalda/ReactNativeLocalization): easy to use package for i18n

- **Others**
  - [Cocoapods](https://github.com/CocoaPods/CocoaPods): iOS dependencies manager
  - [jetifier](https://github.com/mikehardy/jetifier#readme): transition tool for [React Native 0.60 AndroidX migration](https://facebook.github.io/react-native/blog/2019/07/03/version-60#androidx-support)

## Project Structure

```
├── __tests__                            // Unit tests
│   ├── App.test.tsx                     // App component's tests
│   ├── components
│   │   └── MyComponent.test.txs
│   └── ...
├── android
├── app.json
├── assets                               // All assets: images, videos, ...
├── index.js
├── ios
├── publishing                           // Icon, screenshots, preview,... for App Store & Play Store
└── src
    ├── App.tsx
    ├── actions                          // Actions
    │   ├── actionTypes.ts               // Action types
    │   └── app.ts                       // appReducer's actions
    ├── components                       // Components
    │   └── MyComponent.tsx
    ├── constants                        // colors, sizes, routes,...
    │   └── strings.ts                   // i18n
    ├── containers                       // screens, pages,...
    ├── index.tsx                        // Root component
    ├── reducers                         // Reducers
    │   └── app.ts                       // appReducer
    ├── store.ts
    ├── types                            // Type declarations
    │   └── index.d.ts
    └── utils                            // Utilities
```

## Installation

- Clone this repo
  ```
  git clone git@github.com:NewBieBR/typescript-react-native.git <PROJECT_NAME>
  ```
  ```
  cd <PROJECT_NAME>
  ```
- Execute command
  ```
  ./bin/install.sh <PROJECT_NAME>
  ```
- [Link your github repository with Codecov](https://docs.codecov.io/docs)

- Update the token in `package.json` > scripts > codecov

## Manual Installation

- Clone this repo

  ```
  git clone git@github.com:NewBieBR/typescript-react-native.git <PROJECT_NAME>
  ```

  ```
  cd <PROJECT_NAME>
  ```

- Install dependencies
  ```
  yarn
  ```
- Rename the project

  ```
  yarn run rename <PROJECT_NAME>
  ```

- Migrate to AndroidX to [support React Native 0.60](https://facebook.github.io/react-native/blog/2019/07/03/version-60#androidx-support)

  ```
  yarn jetify
  ```

- Update pods

  ```
  cd ios && pod install
  ```

- Remove .git

  ```
  rm -rf .git
  ```

- [Link your github repository with Codecov](https://docs.codecov.io/docs)

- Update the token in `package.json` > scripts > codecov

## Note

### NavigationService

You can [navigate without navigation prop](https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html) by using **NavigationService** from `src/lib/NavigationService.ts`

```typescript
import NavigationService from '../lib/NavigationService';

//...

NavigationService.navigate('ChatScreen', { userName: 'Lucy' });
```

### Cocoapod

When you run `react-native link` and the linked library has podspec file, then the linking will use Podfile. To disable this feature, remove

```ruby
# Add new pods below this line
```

from line 24 in `ios/Podfile`

### Static bundle

The static bundle is built every time you target a physical device, even in Debug. To save time, the bundle generation [is disabled in Debug](https://facebook.github.io/react-native/docs/running-on-device)


### react-native-screens

You can use react-native-screens with react-navigation in order to [improve memory consumption](https://reactnavigation.org/docs/en/community-libraries-and-navigators.html#react-native-screens)

- Install and follow steps in `Usage with react-navigation (without Expo)` from [react-native-screens](https://github.com/kmagiera/react-native-screens)

- Open `./src/index.tsx` and uncomment

```javascript
// import { useScreens } from 'react-native-screens';
// useScreens();
```

## Todo

- **Other**
  - [ ]  [autobind-decorator](https://github.com/andreypopp/autobind-decorator#readme): bind your component's functions easily with a decorator

    Before:
    ```JSX
    <button onClick={ this.handleClick.bind(this) }></button>
    ```
    After:
    ```JSX
    <button onClick={ this.handleClick }></button>
    ```

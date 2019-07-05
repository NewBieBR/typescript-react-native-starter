[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/NewBieBR/typescript-react-native-starter.svg?style=popout)](https://codecov.io/gh/NewBieBR/typescript-react-native-starter)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

# Typescript React Native Starter

This is an opionated configuration for typescript react native project.

## Features

- **Typescript**
	- Initialized with [React Native's typescript template](https://github.com/react-native-community/react-native-template-typescript)

- **Flux State management**
	- [Redux](https://github.com/reduxjs/redux): predictable state container
	- [Redux Persist](https://github.com/rt2zz/redux-persist): offline store
	- [Redux Saga](https://github.com/redux-saga/redux-saga): side effect model for Redux
	- Create typesafe actions easily with [typesafe-actions](https://github.com/piotrwitek/typesafe-actions)

      ```javascript
      import { action } from 'typesafe-actions';
      import * as types from './actionTypes';

      export const myAction = payload => action(types.MY_ACTION_TYPE, payload);
      ```

- **Navigation**
	- [React Navivation](https://github.com/react-navigation/react-navigation): easy-to-use navigation solution based on Javascript

- **Unit testing**
	- Unit tests with [Jest](https://github.com/facebook/jest), [Enzyme](https://github.com/airbnb/enzyme) and [react-native-testing-library](https://github.com/callstack/react-native-testing-library)
	- Coverage report with [Codecov](https://codecov.io/)

- **Linting**
	- Tslint configured with Airbnb styles
	- Run lint pre-commit and unit test pre-push with [husky](https://github.com/typicode/husky)
	- Vscode Prettier compatible

- **Internationalization and localization**
	- i18n with [react-native-localization](https://github.com/stefalda/ReactNativeLocalization)

- **Others**
	- Get app version with [react-native-version-number](https://github.com/APSL/react-native-version-number): useful for updating persist store when you add new properties to your reducers
	- Rename project easily with [react-native-rename](https://github.com/junedomingo/react-native-rename)


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
    │   ├── actionTypes.tsx              // Action types
    │   └── app.tsx                      // appReducer's actions
    ├── components                       // Components
    │   └── MyComponent.tsx
    ├── constants                        // colors, sizes, routes,...
    │   └── strings.tsx                  // i18n
    ├── containers                       // screens, pages,...
    ├── index.tsx                        // Root component
    ├── reducers                         // Reducers
    │   └── app.tsx                      // appReducer
    ├── store.tsx
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

- Rename `displayName` and `name` in `app.json`

- Rename `name`in `package.json`

- [Link your github repository with Codecov](https://docs.codecov.io/docs)

- Update the token in `package.json` > scripts > codecov

- Delete `ios` and `android` directories
  ```
  rm -rf ios android
  ```
- Create new ones
  ```
  react-native eject
  ```
- Install dependencies
  ```
  yarn
  ```
- Link packages
  ```
  react-native link
  ```

## Usage

### react-native-screens

You can use react-native-screens with react-navigation in order to [improve memory consumption](https://reactnavigation.org/docs/en/community-libraries-and-navigators.html#react-native-screens)

- Open `./src/index.tsx` and uncomment

```javascript
// import { useScreens } from 'react-native-screens';
// useScreens();
```

- Follow steps in `Usage with react-navigation (without Expo)` from [react-native-screens](https://github.com/kmagiera/react-native-screens)

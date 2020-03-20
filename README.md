
<div align="center"><h1>Typescript React Native Starter</h1></div>
<br/>
<div align="center">This is a highly scalable foundation with a focus on best pratices to start your React Native project in seconds.</div>
<br/>
<div align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  </a>
  <a href="https://codecov.io/gh/NewBieBR/typescript-react-native-starter">
    <img src="https://img.shields.io/codecov/c/github/NewBieBR/typescript-react-native-starter.svg?style=popout" alt="Codecov Coverage" />
  </a>
  <a href="./CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  </a>
</div>

## Quick Start

```bash
yarn global add trnc
```

```bash
trnc init <ProjectName>
```


## Features

- **Typescript**
  - [Typescript](https://github.com/microsoft/TypeScript) based: enhance code quality, understandability and scability with `Interface oriented development`

- **Flux State management**
  - [Redux](https://github.com/reduxjs/redux): predictable state container
  - [Redux Persist](https://github.com/rt2zz/redux-persist): offline and persistent store
  - [typesafe-actions](https://github.com/piotrwitek/typesafe-actions): create typesafe actions easily

      ```javascript
      import { action } from 'typesafe-actions';
      import * as types from './actionTypes';

      export const myAction = payload => action(types.MY_ACTION_TYPE, payload);
      ```

  - [Redux Saga](https://github.com/redux-saga/redux-saga): side effect model for Redux

- **Navigation**
  - [React Navigation](https://github.com/react-navigation/react-navigation): easy-to-use navigation solution based on Javascript

- **Unit testing**
  - Unit tests with [Jest](https://github.com/facebook/jest), [Enzyme](https://github.com/airbnb/enzyme) and [react-native-testing-library](https://github.com/callstack/react-native-testing-library)
- - [Codecov](https://codecov.io/): coverage report

- **CI/CD**

  - Run linting pre-commit and unit testing pre-push with [husky](https://github.com/typicode/husky)'s hooks
  - Placeholder App Icon: useful for uploading your app to beta quickly with Fastlane
  - [App Icon generator](https://github.com/dwmkerr/app-icon#readme): generate all required sizes, label and annotate icon.
  - Placeholder feature graphic and screenshot to upload beta android app quickly

- **Linting**
  - Tslint configured with Airbnb styles
  - VSCode Prettier compatible

- **Internationalization and localization**
  - [react-native-localization](https://github.com/stefalda/ReactNativeLocalization): easy to use package for i18n

- **Others**
  - [react-native-normalize](https://github.com/NewBieBR/react-native-normalize): make your app responsive easily
  - [react-native-easy-icon](https://github.com/NewBieBR/react-native-easy-icon#readme): wrapper component of [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) for easier usage:

    Before:
    ```JSX
    import AntDesignIcon from 'react-native-vector-icons/AntDesign';

    <AntDesignIcon name="home" color="blue" size={42}/>

    ```

    After:
    ```JSX
    import Icon from 'react-native-easy-icon';

    <Icon type="antdesign" name="home" color="blue" size={42}/>
    ```

  - [Cocoapods](https://github.com/CocoaPods/CocoaPods): iOS dependencies manager
  - [jetifier](https://github.com/mikehardy/jetifier#readme): transition tool for [React Native 0.60 AndroidX migration](https://facebook.github.io/react-native/blog/2019/07/03/version-60#androidx-support)
  - [autobind-decorator](https://github.com/andreypopp/autobind-decorator#readme): bind your component's functions easily with a decorator

    Before:
    ```JSX
    handleClick()  {...}

    <button onClick={ this.handleClick.bind(this) }></button>
    ```
    After:
    ```JSX
    @boundMethod
    handleClick() {...}

    <button onClick={ this.handleClick }></button>
    ```

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
├── credentials                          // Private informations: API keys,...
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
    ├── constants                        // Colors, sizes, routes,...
    │   └── strings.ts                   // i18n
    ├── containers                       // Screens, pages,...
    ├── lib                              // Libraries, services,...
    ├── index.tsx                        // Root component
    ├── reducers                         // Reducers
    │   └── app.ts                       // appReducer
    ├── sagas                            // Redux sagas
    ├── store.ts
    ├── types                            // Type declarations
    │   └── index.d.ts
    └── utils                            // Utilities
```

## Installation without [trnc](https://github.com/NewBieBR/typescript-react-native-starter#quick-start)

- Clone this repo
  ```
  git clone git@github.com:NewBieBR/typescript-react-native-starter.git <PROJECT_NAME>
  ```
  ```
  cd <PROJECT_NAME>
  ```
- Execute the installtion script
  ```
    yarn setup <PROJECT_NAME>
  ```
    > The script will rename, jetify your project, install imagemagick for app-icon generator, change husky pre-push to 'yarn test' instead of 'yarn codecov, delete README, CODE_OF_CONDUCT, CONTRIBUTING and LICENSE'

#### if (you want to use Codecov) {
- [Link your github repository with Codecov](https://docs.codecov.io/docs)

- Update your project's informations and the Codecov token `scripts` > `codecov` in `package.json`

- Change `husky` > `pre-push` to `yarn codecov` in `package.json`

#### }

## Manual Installation

- Clone this repo

  ```
  git clone git@github.com:NewBieBR/typescript-react-native-starter.git <PROJECT_NAME>
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

#### if (you want to use Codecov) {
- [Link your github repository with Codecov](https://docs.codecov.io/docs)

- Update your project's informations and the Codecov token `scripts` > `codecov` in `package.json`

#### } else {
- Change `husky` > `pre-push` to `yarn test` in `package.json`
#### }

## Useful Tips & Notes

### Apple Store Connect's missing compliance
This is added to your `Info.plist` in order to avoid Apple Store Connect's missing compliance warning.

```plist
<key>ITSAppUsesNonExemptEncryption</key>
<false/>
```
So you don't have to *Provide Export Compliance Information* at **every push**,


<img src="https://i.stack.imgur.com/i7ret.png" height="100">

> Note that you might have to set that to `<true/>` if your [app uses encryption](https://developer.apple.com/documentation/bundleresources/information_property_list/itsappusesnonexemptencryption)


### Responsiveness with react-native-normalize

Use the **normalize** functio from react-native-normalize whenever you have to use a *hard value* (100, 200, 1000,...). This function will adapt your value accordingly to different screen sizes

### Without `normalize`

<img src="https://i.imgur.com/bLbnjsC.jpg" height="250"/>

### With `normalize`
<img src="https://i.imgur.com/4IqqAR2.jpg" height="250"/>

### Static bundle

The static bundle is built every time you target a physical device, even in Debug. To save time, the bundle generation [is disabled in Debug](https://facebook.github.io/react-native/docs/running-on-device)


### react-native-screens

You can use react-native-screens with react-navigation in order to [improve memory consumption](https://reactnavigation.org/docs/en/community-libraries-and-navigators.html#react-native-screens)

- Install and follow steps in `Usage with react-navigation (without Expo)` from [react-native-screens](https://github.com/kmagiera/react-native-screens)

- Open `./src/index.tsx` and uncomment

```javascript
// import { enableScreens } from 'react-native-screens';
// enableScreens();
```

### React Native Extended Stylesheet

[react-native-extended-stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) is a drop-in replacement of React Native StyleSheet with media-queries, variables, dynamic themes, relative units, percents, math operations, scaling and other styling stuff.


### Patch Package

When developing with React Native, sometimes I found bugs in the packages that I use so I fix them directly in the *node_modules/package-with-bug*. However, when I install a new package with *npm install*, the changes I made got override.

To prevent this, I use  [patch-package](https://github.com/ds300/patch-package) which allows me to modify and keep the changes I made.

> So no more waiting around for pull requests to be merged and published. No more forking repos just to fix that one tiny thing preventing your app from working.

Example:

```
# fix a bug in one of your dependencies
vim node_modules/some-package/brokenFile.js

# run patch-package to create a .patch file
npx patch-package some-package

# commit the patch file to share the fix with your team
git add patches/some-package+3.14.15.patch
git commit -m "fix brokenFile.js in some-package"
```

### NavigationService

You can [navigate without navigation prop](https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html) by using **NavigationService** from `src/lib/NavigationService.ts`

```typescript
import NavigationService from '../lib/NavigationService';

//...

NavigationService.navigate('ChatScreen', { userName: 'Lucy' });
```


### Beta distribution with Fastlane
- Install [fastlane](https://docs.fastlane.tools/getting-started/ios/setup/)
  ```bash
  # Using RubyGems
  sudo gem install fastlane -NV

  # Alternatively using Homebrew
  brew cask install fastlane
  ```

> If you have issue installing or using fastlane on macos, check this solution: https://github.com/fastlane/fastlane/issues/15467#issuecomment-543093498

#### iOS
- Open your project Xcode workspace and update your app's `Bundle Identifier` and `Team`
- Initialize fastlane
  ```bash
  cd <PROJECT_NAME>/ios
  fastlane init
  ```
- Distribute your app
  ```bash
  fastlane beta
  ```

#### Android
- [Collect your Google Credentials](https://docs.fastlane.tools/getting-started/android/setup/#collect-your-google-credentials)
- Open your project with Android Studio and update your app's `applicationId` in `build.gradle (Module: app)` file
- Select `Generated Signed Bundle / APK...` from the `Build` menu
- `Next` then `Create new...` under `Key store path` then `Next` and `Finish`
- The first time you deploy your application, you MUST upload it into Google Play Console manually. Google don't allow to use theirs APIs for the first upload.
- Create your application in the [Google Play Console](https://play.google.com/apps/publish/) (unlike for iOS Fastlane cannot do that for you)
- Make sure that these 4 checkmark icons are green
    > Recommended order: `Pricing & distribution`, `Content rating`, `Store listing` and `App releases`

    > You can find the required assets for `Store listing` in the `publishing/android` folder


    <img src="https://i.stack.imgur.com/C7vDL.png" height="250"/>

- Initialize fastlane
  ```bash
  cd <PROJECT_NAME>/android
  fastlane init
  ```
- Use the Fastfile from `publishing`
  ```bash
  cp publishing/android/fastlane/Fastfile android/fastlane
  ```

- Distribute your app
  ```bash
  fastlane beta
  ```

    >  There is no official plugin to automatically upgrade android version code (unlike the iOS lane).
Before each deployment, be sure to manually upgrade the `versionCode` value inside `android/app/build.gradle`.

#### More
- Checkout the [Fastlane's beta distribution guide](https://github.com/thecodingmachine/react-native-boilerplate/blob/master/docs/beta%20builds.md) for more details
- [Fastlane's documentation](https://docs.fastlane.tools/getting-started/cross-platform/react-native/) for React Native


### Cocoapod

When you run `react-native link` and the linked library has podspec file, then the linking will use Podfile. To disable this feature, remove

```ruby
# Add new pods below this line
```

from line 24 in `ios/Podfile`

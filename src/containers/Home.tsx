import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import VersionNumber from 'react-native-version-number';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';
import { setAppVersion, updateStoreState } from '../actions/app';
import { fetchUser } from '../actions/users';
import strings from '../constants/strings';
import { User } from '../types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export interface Props {
  updateStoreState: typeof updateStoreState;
  setAppVersion: typeof setAppVersion;
  fetchUser: typeof fetchUser;
  version: string;
  buildVersion: string;
  user: User;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class Home extends Component<Props> {
  componentDidMount() {
    this.checkAppVersion();
    this.props.fetchUser('1');
  }

  checkAppVersion() {
    if (
      this.props.version !== VersionNumber.appVersion ||
      this.props.buildVersion !== VersionNumber.buildVersion
    ) {
      this.props.updateStoreState();
      this.props.setAppVersion({
        version: VersionNumber.appVersion,
        buildVersion: VersionNumber.buildVersion,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {strings.hello}. Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>To get started, edit Home.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  version: state.app.version,
  buildVersion: state.app.buildVersion,
  user: state.users.user,
});

const mapDispatchToProps = {
  updateStoreState,
  setAppVersion,
  fetchUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

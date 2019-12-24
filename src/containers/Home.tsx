import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/users';
import Strings from '../constants/strings';
import { User } from '../types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
export interface Props {
  fetchUser: typeof fetchUser;
  user: User;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export class Home extends Component<Props> {
  componentDidMount() {
    this.props.fetchUser('1');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {Strings.hello}. Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>To get started, edit Home.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  user: state.users.user,
});

const mapDispatchToProps = {
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

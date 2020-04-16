import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Settings extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text> Settings </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

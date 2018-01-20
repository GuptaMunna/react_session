import React from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello World</Text>
        <Text style={styles.shaadi}>Munna  shaadi</Text>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 40,
    color: '#00ff00',
    textAlign: 'center',
    margin: 10,
  },
  shaadi: {
    fontSize: 40,
    color: '#0000ff',
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('Test', () => HelloWorld);

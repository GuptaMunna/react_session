  import React from 'react';
import {AppRegistry, StyleSheet,Image, Text, View} from 'react-native';
import { Card, List,ListItem, Button } from 'react-native-elements'
const profiles = require("./userData");

const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
 ]
class HelloWorld extends React.Component {
  render() {
    return (
    profiles.map((data, i) => {
      return (
        <List>

        <ListItem
          key={i}
          renderRow={(data) =>{
            console.log(data);
            <Text style={styles.shaadi}>
              {`${data.name.first} ${data.name.last}`}
            </Text>
          }
        }
        />
      );
      </List>

    }));
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
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

import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './components/Home'
import About from './components/About'


const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  {
    initialRouteName: 'Home',
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
       <RootStack />;
      </View>
    );
  }
}

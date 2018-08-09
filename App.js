import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './components/Home'
import About from './components/About'




export default class App extends React.Component {

  const RootStack = createStackNavigator(
    Home: {
      screen: Home
    },
    {
      initialRouteName: 'Home',
    }
  );


  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
       <RootStack />;
      </View>
    );
  }
}

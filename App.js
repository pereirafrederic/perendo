import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'; // 2.11.2

import HomeScreen from "./components/HomeScreen"
import AboutScreen from "./components/AboutScreen"

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: HomeScreen,
  About: AboutScreen,
});
import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

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
  Settings: SettingsScreen,
});


/*import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './components/Home'
import About from './components/About'


const Tabs = TabNavigator({
    Home : {screen : Home},
    About: {screen : About}
  },
  {
   tabBarPosition: 'bottom',
   tabBarOptions :{
     showIcon : false,
     showLabel : true,
     activeTintColor:"pink",
     labelStyle: {
       fonSize: 13
     },
     tabStyle:{
       width:100
     },
     indicatorStyle :{
       height: 2,
       backgroundColor: "red"
     },
     style: {
       backgroundColor: "yellow",
       borderTopWidth: 1,
       borderColor: "white"

     }
   }
  }
)
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}
*/
import React from 'react';
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
     indicatorStyle :{
       height: 2,
       backgroundColor: "#00859D"
     },
     style: {
       backgroundColor: "#00859D",
       borderTopWidth: 1,
       borderColor: "#3f101c"

     }
   }
  }
)
export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={false} />
        <Tabs />
      </View>
    );
  }
}

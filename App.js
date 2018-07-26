import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';

import Home from './components/Home'
import About from './components/About'
import Detail from './components/Detail'

const Tabs = TabNavigator({
    Home : {screen : Home},
    Detail : {screen : Detail},
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
        <StatusBar hidden={true} />
        <Tabs />
      </View>
    );
  }
}

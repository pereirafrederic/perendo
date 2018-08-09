import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'; // 2.11.2
import { Button, Text, View, StyleSheet } from 'react-native';

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {


    constructor(props){
    super(props)
    this.state ={
      title: 'menu',
      menus: [
          { "id": 1, "title":"définition des PE" },
          { "id": 2, "title":"Sources" },
          { "id": 3, "title":"Effets sur la santé" },
          { "id": 4, "title":"Conseil de prévention" },
          { "id": 5, "title":" Liens utiles" }
         ]
    }
  }

renderMenus(){
 var _ = require('lodash'); // 4.17.10
  var content =  _.each(this.state.menus, function (id, title) {
      return  <Text> {title}</Text>}
    );
console.log(content)
    return content;
}

  render() {


    return (
              <View style={styles.container}>
        <View style={styles.title}>
          <Text>application perendo</Text>
        </View>
      <View style={styles.menus}>

      {this.renderMenus()}
      </View>
              <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />

      </View>
         );

  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen,
});

const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
      tabBarOptions: {
     labelStyle: {
       fontSize: 12,
     },
     tabStyle: {
       width: 100,
     },
     showIcon : false,
     showLabel : true,
     indicatorStyle :{
       height: 2,
       backgroundColor: "red"
     },
     style: {
       backgroundColor: "#00859D",
       borderTopWidth: 1,
       borderColor: "pink",
       justifyContent: 'center',
       alignItems: 'center'
     },
   }
  }
);

  const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   marginLeft: 10,
   alignItems: 'center'
  },
  menus: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <BottomTabNavigator />
      </View>
    );
  }



  /*
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


 */
}
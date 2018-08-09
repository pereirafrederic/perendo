import React from 'react'
import {View, Text, StyleSheet}from 'react-native'

export default class Home extends React.Component {

  static navigationOptions ={
    title: 'home',
    tabBarVisible: true
  }

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
  render() {

    var _ = require('lodash');

  var content =  _.each(this.state.menus, function (id, title) {
      return  <Text> {title}</Text>}
    );


    return (

  <View style={styles.container}>
      {this.state.title}
        <View style={styles.menus}>
      {this.content}
    </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   marginLeft: 10
  },
  menus: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2
  }
});

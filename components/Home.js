import React from 'react'
import {View, Text, StyleSheet}from 'react-native'

export default class Home extends React.Component {

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
      return  <View> {title}</View>}
    );


    return (

      <View >
      {this.state.title}
      {this.content}

      </View>

    );
  }
}

import React from 'react'
import {View, Text, StyleSheet}from 'react-native'
var _ = require('lodash');
export default class Menu extends React.Component {


constructor(props){
  super(props)
  this.State ={
    menus: [

{ "id": 1, "title":"définition des PE" },

{ "id": 2, "title":"Sources" },

{ "id": 3, "title":"Effets sur la santé" },

{ "id": 4, "title":"Conseil de prévention" },

{ "id": 5, "title":" Liens utiles" }

]
  }
  }
}

  render() {
    return (

      <View >
        _.each(this.state.menus, (menu) => <View> {menu.title}</View>)
      </View>

    );
  }
}

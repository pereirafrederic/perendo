import React from 'react'
import {View, Text, StyleSheet}from 'react-native'
import { createStackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

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
    return (

      <View style={styles.container}>
        <View style={styles.title}>
          <Text>applicationperendo</Text>
        </View>
      <View style={styles.menus}>

      <Text>définition des perturbateurs endocrinien</Text>
      <Text>Sources</Text>
      <Text>Effets sur la santé</Text>
      <Text>conseil de prévention</Text>
      <Text>Liens utiles</Text>
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

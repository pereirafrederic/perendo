import React from 'react'
import {ScrollView, View, Text, StyleSheet}from 'react-native'


export default class AboutScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text>bienvenue sur l''application sur les perturbateurs endocrinien</Text>
        <View style={styles.about}>

        <Text>Cette application est faite pour un mémoire</Text>
        <Text>n''hesitez pas à envoyer un mail pour tout remarques</Text>
        </View>
        <View style={styles.signature}>
          <Text> Aurélie pereira </Text>
        </View>
      </View>
      </ScrollView>

    );
  }
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   marginLeft: 10
  },
  about: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2
  },
  signature: {
    paddingTop: 20,
    padding: 70,
    height: 44,
  },
})

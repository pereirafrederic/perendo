import React from 'react'
import { Button, ScrollView,View, Text, StyleSheet}from 'react-native'
import ArticleJson from '../documents/articles.json'


export default class Detail extends React.Component {


      constructor(props){
        super(props)
        this.state={
          articleChoisi: ArticleJson.articles[0]
        }
      }



  render() {

    goToPrecedant(){
      this.articleChoisi= ArticleJson.articles[0];
    }
    goToSuivant(){
      this.articleChoisi= ArticleJson.articles[1];
    }

    return (

  <ScrollView>
      <View >
         <Text> {this.state.articleChoisi.title}</Text>
         <Text> {this.state.articleChoisi.data}</Text>
           <Button
              onPress={this.goToPrecedant}
              title="article précédant"
              color="#a2273C"
              accessibilityLabel="passer à l'article précédant"
            />
           <Button
              onPress={this.goToSuivant}
              title="article suivant"
              color="#a2273C"
              accessibilityLabel="passer à l'article suivant"
            />
      </View>
  </ScrollView>


    );
  }
}

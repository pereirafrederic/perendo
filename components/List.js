import React, { Component } from 'react';
import { ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';


export default class List extends React.Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Types de perturbateurs', data: ['Œstrogènes stéroidïens' ]},
            {title: 'Moyens de lutte', data: ['stratégie mondiale', 'stratégie Union européenne']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

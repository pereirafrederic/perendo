import React from 'react';
import { Button, Text, View, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // 2.11.2

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class SourceScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Les perturbateurs endocriniens sont présents dans notre environnement.</Text>
        <Text>On les retrouve un peu partout.</Text>
        <Text>On est en contact avec eux par différentes voies d''exposition, et le futur bébé est aussi exposé car le placenta permet le passage de ces substances.</Text>
        <Text>Les perturbateurs endocriniens étant de manière générale lipophile, ils se stockent dans les graisses humaines et animales.</Text>

 <Text>Les voies d''exposition sont :</Text>

        <Button
          title="voie digestive"
          onPress={() => this.props.navigation.navigate('Digestive')}
        />
        <Button
         title="voie cutanée"
         onPress={() => this.props.navigation.navigate('Cutanee')}
        />
        <Button
         title="voie respiratoire"
         onPress={() => this.props.navigation.navigate('Respiratoire')}
        />
      </View>
    );
  }
}

class DigestiveScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Digestive</Text>
      </View>
    );
  }
}

class CutaneeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cutanee!</Text>
      </View>
    );
  }
}

class RespiratoireScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Respiratoire!</Text>
      </View>
    );
  }
}


class DetailsScreen extends React.Component {

    constructor(props){
    super(props)
    this.state ={
      title: 'DetailsScreen2'
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.title}</Text>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.detail}</Text>
      </View>

      </View>
    );
  }
}

const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
  Source : { screen: SourceScreen },
  Digestive :{ screen: DigestiveScreen },
  Cutanee :{ screen: CutaneeScreen },
  Respiratoire: { screen: RespiratoireScreen },
  Details: { screen: DetailsScreen },

});

class HomeScreen extends React.Component {

    static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (

      <View style={styles.container}>
      <StatusBar hidden={true} />
        <View style={styles.title}>
          <Text>Application</Text>
          <Text style={styles.bolder}> PerEndo</Text>
          <Text> pour </Text>
          <Text style={styles.bolder}>per</Text>
          <Text>turbateurs </Text>
          <Text style={styles.bolder}>endo</Text>
          <Text>criniens</Text>
        </View>
        <View style={styles.detail}>
          <Text> Les perturbateurs endocriniens (PE) sont « des substances chimiques d’origine naturelle ou artificielle étrangères à l’organisme qui peuvent interférer avec le fonctionnement du système endocrinien et induire ainsi des effets délétères sur cet organisme ou sur ses descendants »</Text>
        </View>
        <View style={styles.menus}>
          <View style={styles.cubeplein}>
            <View style={styles.cube}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Définition des perturbateurs endocrinien</Text>
                  </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.spacer}></View>
          <View style={styles.cubeplein}>
            <View style={styles.cube}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Source')} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Sources</Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={styles.cube}>
               <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Effets sur la santé</Text>
                  </View>
              </TouchableHighlight>
            </View>

          </View>
          <View style={styles.spacer}></View>
          <View style={styles.cubeplein}>
            <View style={styles.cube}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Conseil de prévention</Text>
                  </View>
              </TouchableHighlight>
            </View>
            <View style={styles.cube}>
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')} underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Liens utiles</Text>
                  </View>
              </TouchableHighlight>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#00859D"
  },
  title :{
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Oswald',
    flexDirection: 'row'

  },
  bolder:{
    fontWeight: 'bold',
  },
  detail: {
    flex: 2,
    fontSize: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spacer:{
    height: 15
  },
  menus: {
    flex: 4,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    flexDirection: 'column',
    alignContent:'stretch',
    alignItems:'stretch',
    backgroundColor:"#00859D",
    flexWrap:'wrap'
  },
  cubeplein:{
    flex:1,
    minWidth: 100,
    minHeight: 70,
    margin: 0.5,
    margingBottom :2,
    padding: 0.5,
    borderRadius: 4,
    backgroundColor:'white',
    flexDirection: 'row',
    boxShadow: '0px 0px 1px 0px white'
  },
  button: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#00859D'
  },
  buttonText: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
    color: 'black'
  },
  cube:{
    flex: 1,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor:'#00859D',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Oswald',
    boxShadow: '0px 0px 1px 1px white'

  }

});

const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
});

export default TabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor : '#00859D',
      inactiveTintColor: 'black',
      inactiveBackgroundColor : 'white',
     labelStyle: {
        fontSize: 15,
        fontFamily: 'Oswald'
     }
    },
    animationEnabled: false,
    swipeEnabled: false,

  }
);

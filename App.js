import React from 'react';
import { Button, Text, View, ScrollView, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // 2.11.2
import Icon from 'react-native-vector-icons/FontAwesome'; // 5.0.0

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
      <View style={{ flex: 10, marginLeft : 10, marginRight: 10}}>
          <Text style={{ flex: 2, justifyContent: 'center', alignItems: 'center',  marginTop : 10, fontWeight: 'bold' }}>Les sources </Text>

        <View style={{ flex: 5}}>
          <Text>Les perturbateurs endocriniens sont présents dans notre environnement.</Text>
          <Text>On les retrouve un peu partout.</Text>
          <View style={styles.spacer}></View>

          <Text>On est en contact avec eux par différentes voies d''exposition, et le futur bébé est aussi exposé car le placenta permet le passage de ces substances.</Text>
          <View style={styles.spacer}></View>
          <Text>Les perturbateurs endocriniens étant de manière générale lipophile, ils se stockent dans les graisses humaines et animales.</Text>
          <View     style={styles.spacer}></View>
          <Text>Les voies d''exposition sont :</Text>
        </View>
        <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Icon.Button name="fa-eye" backgroundColor="#00859D" onPress={() =>this.props.navigation.navigate('Digestive')}>
            voie digestive
            </Icon.Button>
            <Icon.Button name="fa-eye" backgroundColor="#00859D" onPress={() =>this.props.navigation.navigate('Cutanee')}>
            voie cutanée
            </Icon.Button>
            <Icon.Button name="fas fa-eye" backgroundColor="#00859D" onPress={() =>this.props.navigation.navigate('Respiratoire')}>
            voie respiratoire
            </Icon.Button>
        </View>
      </View>
    );
  }
}

class CutaneeScreen extends React.Component {
  render() {
    return (

      <View style={{ flex: 10, marginLeft : 10, marginRight: 10}}>
              <Text style={{ flex: 2, justifyContent: 'center', alignItems: 'center',  marginTop : 10, fontWeight: 'bold' }}>Les sources Cutanée</Text>

             <View style={{ flex: 7}}>
                <Text>Tous les produits qu'on peut se mettre sur la peau peuvent représenter une autre source d'exposition.</Text>
                <View     style={styles.spacer}></View>
                <Text>Les crèmes peuvent contenir du parabène et des phtalates</Text>
                <Text>Les dentifrices peuvent avoir du triclosan</Text>
                <View     style={styles.spacer}></View>
                <Text>La manipulation des produits ménagers sans l'usage de gants est aussi une source d'exposition aux alkysphénols et phtalates.</Text>
                <View     style={styles.spacer}></View>
                <Text>L'utilisation d'insecticides pour les animaux ou le jardin est une autre voie de contamination par les pesticides.</Text>
                <View     style={styles.spacer}></View>
                <Text>Les retardateurs de flammes et les composés perfluorés peuvent être présent dans les vêtements et le mobilier.</Text>
           </View>
      </View>
    );
  }
}

class DigestiveScreen extends React.Component {
  render() {
    return (
          <View style={{ flex: 10, marginLeft : 10, marginRight: 10}}>
             <Text style={{ flex: 2, justifyContent: 'center', alignItems: 'center',  marginTop : 10, fontWeight: 'bold' }}>Les sources Digestives</Text>

             <View style={{ flex: 7}}>
                <Text>Les perturbateurs endocriniens sont présents dans différents aliments :</Text>
                <View     style={styles.spacer}></View>
                <Text>les fruits et les légumes via les pesticides</Text>
                <Text>Les poissons peuvent contenir du mercure et des PCB</Text>
                <Text>L'eau qui contient plusieurs substances comme les pesticides</Text>
                <Text>Les viandes graisses et les produits laitiers contiennent plusieurs substances</Text>
                <View     style={styles.spacer}></View>
                <Text>Dans la cuisine, on en trouve aussi et c'est en chauffant qu'on peut contaminer sa nourriture</Text>
                <Text>Les poêles en téflon contiennent des composés perfluorés.</Text>
                <Text>les ustensiles de cuisine en plastiques ont des phtalates ou du bisphénol A</Text>
                <Text>Les boites de conserve peuvent contenir des phtalates.</Text>
             </View>
           </View>
    );
  }
}

class RespiratoireScreen extends React.Component {
  render() {
    return (

        <View style={{ flex: 10, marginLeft : 10, marginRight: 10}}>
              <Text style={{ flex: 2, justifyContent: 'center', alignItems: 'center',  marginTop : 10, fontWeight: 'bold' }}>Les sources Respiratoire</Text>

             <View style={{ flex: 7}}>
                <Text> Les produits qui contiennent des perturbateurs endocriniens sont parfois volatiles
                et donc peuvent entrer dans le corps via les poumons.</Text>
                <View     style={styles.spacer}></View>
                <Text>Il s'agit des produits ménagers, des produits de cosmétiques (notamment les sprays pour les cheveux ou les déodorants).</Text>
                <View     style={styles.spacer}></View>
                <Text>L'air intérieur et la poussière sont des sources importantes de perturbateurs endocriniens </Text>
                <Text>car ils accumulent ceux qui sont libérés par les objets de la maison : pesticides, phtalates, etc...</Text>
                <View     style={styles.spacer}></View>
           </View>
      </View>
    );
  }
}

class EffetSanteScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 10, marginLeft : 10, marginRight: 10}}>
              <Text style={{ flex: 2, justifyContent: 'center', alignItems: 'center',  marginTop : 10, fontWeight: 'bold' }}>Les perturbateurs endocriniens ont donc une action sur nos hormones.</Text>

             <View style={{ flex: 7}}>
             <ScrollView>
                <Text>Les effets sur la santé sont nombreux. Ils peuvent soit apparaitre avant même l'accouchement, </Text>
                <Text>être découvert lors de la naissance ou bien se développer plus tardivement.</Text>
                 <View     style={styles.spacer}></View>
                 <Text>En voici les principaux :</Text>
                <View     style={styles.spacer}></View>
                    <Text>- prématurité, petit poids de naissance</Text>
                    <Text>- retard de croissance du bébé pendant la grossesse</Text>
                    <Text>- malformations génitales : cryptorchidie (testicules non descendus dans les bourses), hypospadias (méat urinaire mal positionné), micro pénis</Text>
                    <Text>- troubles neurologiques et du comportement : autisme, baisse du QI, hyperactivitén troubles de l'attention</Text>
                    <Text>- puberté précoce chez les filles</Text>
                    <Text>- maladies gynécologiques : syndrome des ovaires polykystiques, endométriose</Text>
                    <Text>- problème de fertilité à l'âge adulte</Text>
                    <Text>- dysthyroidies : hypothyroidie,hyperthyroidie</Text>
                    <Text>- cancers</Text>
                    <Text>- maladies métaboliques : obésité, diabète</Text>
</ScrollView>
           </View>
      </View>
    );
  }
}

class DefinitionScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 10, marginLeft : 10, marginRight: 10}}>

                <Text style={{ flex: 2, justifyContent: 'center', alignItems: 'center',  marginTop : 10, fontWeight: 'bold' }}>
                La définition des perturbateurs endocriniens</Text>
             <View style={{ flex: 10}}>
             <ScrollView>
                <Text>La définition des perturbateurs endocriniens selon l''Organisation Mondiale de la Santé est la suivante :  Un perturbateur endocrinien est une substance ou un mélange de substances,
                qui altère les fonctions du système endocrinien et de ce fait induit des effets néfastes dans un organisme intact, chez sa progéniture ou au sein de (sous)- populations.</Text>
                <View     style={styles.spacer}></View>
                <Text>Ce sont des substances qui peuvent modifier l''action d''une hormone, soit en mimant son effet à un moment non désiré, soit en empêchant son action,
                soit en agissant sur la régulation de l''hormone, c''est à dire sa fabrication, son stockage par exemple.</Text>
                <View     style={styles.spacer}></View>
                <Text>Les Hommes sont entourés de ces substances, et il peut donc exister plusieurs phénomènes de perturbations en même temps dans le corps
                dont le résultat sur les hormones sont difficiles à prévoir. C''est l''effet cocktail.</Text>
                <Text>Les effets des perturbateurs endocriniens peuvent avoir des conséquences lorsque l'''exposition se produit à un moment critique du développement humain,
                comme la grossesse par exemple.</Text>
                <View     style={styles.spacer}></View>
           </ScrollView>
           </View>
      </View>
    );
  }
}


class DetailsScreen extends React.Component {

    constructor(props){
    super(props)
    this.state ={
      title: 'DetailsScreen2',
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
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Definition')} underlayColor="white">
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
               <TouchableHighlight onPress={() => this.props.navigation.navigate('EffetSante')} underlayColor="white">
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
    backgroundColor:"#339999",
    margingBottom:4
  },
  title :{
    flex: 1,
    fontSize: 30,
    color:'white',
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
    backgroundColor:"#339999",
    flexWrap:'wrap'
  },
  cubeplein:{
    flex:1,
    minWidth: 100,
    minHeight: 70,
    margin: 0.3,
    margingBottom :2,
    padding: 0.3,
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
    backgroundColor: '#339999'
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
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor:'#339999',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Oswald',
    boxShadow: '0px 0px 1px 1px white'

  }

});


const HomeStack = StackNavigator({
  Home: { screen: HomeScreen ,
    navigationOptions: () => ({
      title: `Application perendo`,
      headerLayoutPreset : 'center'
    })},
  Definition: { screen: DefinitionScreen,
    navigationOptions: () => ({
      title: `La définition`,
      headerLayoutPreset : 'center'
    }) },
  EffetSante: { screen: EffetSanteScreen,
    navigationOptions: () => ({
      title: `Les effets`,
      headerLayoutPreset : 'center'
    }) },
  Source : { screen: SourceScreen,
    navigationOptions: () => ({
      title: `Les sources`,
      headerLayoutPreset : 'center'
    }) },
  Digestive :{ screen: DigestiveScreen,
    navigationOptions: () => ({
      title: `Les sources digestive`,
      headerLayoutPreset : 'center'
    }) },
  Cutanee :{ screen: CutaneeScreen,
    navigationOptions: () => ({
      title: `Les sources cutanée`,
      headerLayoutPreset : 'center'
    }) },
  Respiratoire: { screen: RespiratoireScreen,
    navigationOptions: () => ({
      title: `Les sources respiratoire`,
      headerLayoutPreset : 'center'
    }) },
  Details: { screen: DetailsScreen }

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

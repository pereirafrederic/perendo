import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'; // 2.11.2
import { Button, Text, View } from 'react-native';

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

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    /* Other configuration remains unchanged */
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} />
        <createBottomTabNavigator />
      </View>
    );
  }
}
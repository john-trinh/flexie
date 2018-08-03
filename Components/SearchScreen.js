import React, { Component } from 'react';
import { Text,  Platform, StatusBar  } from 'react-native';
import SearchBarComponent from './SearchBarComponent';
import { StackNavigator } from 'react-navigation';

export default class SearchScreen extends Component {
  static navigationOptions = () => {
    return {
      header: (
        <SearchBarComponent />
      ),
      headerStyle: {
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
      }
    }
  };
  render() {
    return (
      <Text>Search something here!</Text>
    )
  }
}
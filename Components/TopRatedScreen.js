import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import Data from "./Data.json";
import MovieListComponent from './MovieListComponent';

export default class TopRatedScreen extends Component {
  static navigationOptions = {
    title: 'Top Rated'
  }
  render() {
    return (
      <MovieListComponent category='top_rated' />
    );
  }
}

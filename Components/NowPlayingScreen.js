import React from 'react';
import { StackNavigator } from 'react-navigation';
import MovieListComponent from './MovieListComponent';
import Data from "./Data.json";

export default class NowPlayingScreen extends React.Component {
  static navigationOptions = {
    title: 'Now Playing'
  }
  render() {
    return (
      <MovieListComponent category='now_playing'/>
    );
  }
}

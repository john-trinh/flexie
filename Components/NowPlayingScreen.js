import React from 'react';
import { Card } from 'react-native-elements';
import MovieListComponent from './MovieListComponent';
import Data from "./Data.json";

export default class NowPlayingScreen extends React.Component {
  renderItem(movie, index) {
    return (<Movie {...movie} key={index}/>);
  }

  render() {
    return (
      <MovieListComponent/>
    );
  }
}

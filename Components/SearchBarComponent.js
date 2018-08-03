import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Constants } from 'expo';

export default class SearchBarComponent extends Component {
  constructor(props) {
    super(props);
    this.searchMovie = React.createRef();
  }

  componentDidMount(){
    this.searchMovie.focus();
  }
  render() {
    return (
      <View style={style.header}>
        <SearchBar
          placeholder='Type Here...'
          ref={(search) => this.searchMovie = search}
        />
      </View>
    )
  }
}
const style = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
  }
})
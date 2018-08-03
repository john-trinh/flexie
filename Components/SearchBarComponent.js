import React, { Component } from 'react';
// import { Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class SearchBarComponent extends Component {
  componentDidMount(){
    this.search.focus();
  }
  render() {
    return (
      <SearchBar
        placeholder='Type Here...'
        ref={search => this.search = search}
      />
    )
  }
}
import React, { Component } from 'react';
import { StyleSheet, View, Button, Platform, TextInput } from 'react-native';
// import { SearchBar } from 'react-native-elements';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

export default class SearchBarComponent extends Component {
  constructor(props) {
    super(props);
    this.searchMovie = React.createRef();
    this.state ={
      search: ''
    };
  }

  handleChangeText(text) {
    this.setState({
      search: text
    });
  }

  handleSearch() {
    if (this.state.search.length > 0) {
      this.searchMovie.blur();
      this.props.searchText(this.state.search);
    }
  }

  render() {
    return (
      <View style={style.header}>
        <TextInput
          placeholder='Type Here...'
          autoFocus={true}
          onChangeText={this.handleChangeText.bind(this)}
          ref={(search) => this.searchMovie = search}
          onSubmitEditing={ () => this.handleSearch()}
          selectTextOnFocus={true}
          style={style.bar}
          underlineColorAndroid="#fff"
        />
        <Button onPress={this.handleSearch.bind(this)} title='Search' style={style.button}/>
      </View>
    )
  }
}
const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 30,
    paddingLeft: 10,

  },
  bar: {
    flex: 5,
    marginTop: 3,
    backgroundColor: 'transparent',
    width: 285,
    paddingTop: 7,
  },
  button: {
    flex: 1
  }
})
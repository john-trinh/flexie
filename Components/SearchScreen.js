import React, { Component } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import SearchBarComponent from './SearchBarComponent';
import { StackNavigator } from 'react-navigation';
import MovieItem from './MovieItem';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state ={
      movieResults: [],
      loading: false
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerRight:
        <SearchBarComponent searchText={navigation.getParam('handleSearch')}/>
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({ handleSearch: this.handleSearch });
  }

  async handleSearch(text) {
    this.setState({
      loading: true,
      movieResults: []
    });
    let url = `https://api.themoviedb.org/3/search/movie?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&query=${text}`;
    let response = await fetch(url);
    let result = await response.json();
    this.setState({
      loading: false,
      movieResults: result.results
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.loading ? (
          <View>
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList style={{elevation: 5, flex: 1}}
            overScrollMode= 'always'
            data={this.state.movieResults}
            renderItem={({item}) => {return (<MovieItem {...item}></MovieItem>)} }
          />
        )}
      </View>
    );
  }
}
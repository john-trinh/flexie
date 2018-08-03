import React, { Component } from 'react'
import { FlatList, View, ActivityIndicator  } from "react-native";
import MovieItem from './MovieItem';

export default class MovieListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      movieToShow: [],
      page: 1,
      loading: false
    };
    this.loadMore = this.loadMore.bind(this);
  }

  getData(page) {
    let url = `https://api.themoviedb.org/3/movie/${this.props.category}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&page=${page}`;
    fetch(url)
    .then(res => {
       if(res) {
         return res.json();
       }
    }).then(data => {
      let currentList = this.state.movieData;
      let newList = currentList.concat(data.results);
      this.setState({
        movieData: newList,
        movieToShow: newList
      });
    });
  }

  componentDidMount() {
    this.getData(1);
  }

  loadMore() {
    const page = this.state.page + 1;
    this.setState({page});
    this.getData(page);
  }
  render() {
    return (
        <FlatList style={{elevation: 5}}
          overScrollMode= 'always'
          data={this.state.movieToShow}
          onEndReachedThreshold={0.1}
          onEndReached={this.loadMore}
          renderItem={({item, index}) => {return (<MovieItem {...item} key={index}></MovieItem>)} }
          ListFooterComponent={() =>(
            <View>
              <ActivityIndicator size="large" />
            </View>
          )}
        />
    );
  }
}
import React, { Component } from 'react'
import { FlatList } from "react-native";
import MovieItem from './MovieItem';

export default class MovieListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: {},
      movieToShow: []
    };
  }
  componentDidMount() {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`;
    fetch(url)
    .then(res => {
       if(res) {
         return res.json();
       }
    }).then(data => {
      this.setState({
        movieData: data,
        movieToShow: data.results
      });
    });
  }

  // renderItem(movie, index) {
  //   return (<Movie {...movie} key={index}/>);
  // }

  render() {
    return (
        <FlatList style={{elevation: 5}}
          overScrollMode= 'always'
          data={this.state.movieToShow}
          renderItem={({item, index}) => {return (<MovieItem {...item} key={index}></MovieItem>)} }
        />
    );
  }
}
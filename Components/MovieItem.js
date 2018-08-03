import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';
import {Card } from 'react-native-elements';
import React, { Component } from "react";
import FitImage from 'react-native-fit-image';

class MovieItem extends Component {
  render() {
    let overview =this.props.overview;
    if (overview.length > 200) {
      overview = overview.substring(0, 150) + '...';
    }
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('MovieDetail', {...this.props})}>
        <Card containerStyle={style.card} flexDirection='row' wrapperStyle={{padding: 0}}>
          <FitImage
            source={{uri: `https://image.tmdb.org/t/p/w342${this.props.poster_path}`}}
            style={style.poster}
            resizeMode= 'cover'
          />
          <Text style={style.rating}>{this.props.vote_average}</Text>
          <View style={style.info}>
            <Text style={{ fontSize: 18, marginBottom: 5 }}>{this.props.title}</Text>
            <Text style={{ marginBottom: 10 }}>{overview}</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}
export default withNavigation(MovieItem);
const style = StyleSheet.create({
  card: {
    position: 'relative',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0,
  },
  poster: {
    flex: 1
  },
  info: {
    flex: 2,
    padding: 10
  },
  rating: {
    position: 'absolute',
    textAlign: 'center',
    top: -5,
    left: -3,
    color: '#fafafa',
    backgroundColor: 'red',
    borderRadius: 50,
    width: 30,
    height: 30,
    paddingTop: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
});
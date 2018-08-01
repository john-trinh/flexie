import { Text, View, Image } from "react-native";
import {Card } from 'react-native-elements';
import React, { Component } from "react";

export default class MovieItem extends Component {
  render() {
    return (
      <Card style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <Image source={{uri: `https://image.tmdb.org/t/p/w342${this.props.poster_path}`}}  style={{flex:2, height: 500, width: 350, resizeMode: Image.resizeMode.contain}}/>
        <Text style={{ fontSize: 26, marginTop: 10 }}>{this.props.title}</Text>
        <Text style={{ marginBottom: 10 }}>{this.props.overview}</Text>
      </Card>
    );
  }
}

import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, View, ScrollView, FlatList, WebView } from 'react-native';
import { Icon } from 'react-native-elements';
import FitImage from 'react-native-fit-image';

export default class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state= {
      videoId: '',
      videoWidth: 400
    };
  }
  async componentDidMount() {
    const videoUrl = `https://api.themoviedb.org/3/movie/${this.props.navigation.getParam('id')}/videos?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`;

    let videoResponse = await fetch(videoUrl);
    let videoResult = await videoResponse.json();

    this.setState({
      videoId: videoResult.results[0].key,
      videoWidth: Dimensions.get('window')
    })
  }
  onLayout() {
    this.setState({
      videoWidth: Dimensions.get('window')
    });
  }
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={style.flex}>
        <ScrollView contentContainerStyle={{alignItems: 'stretch'}}>
          <View
            style={{aspectRatio:1.78, width: parseInt(this.state.videoWidth, 10),  alignSelf: 'stretch'}}
            onLayout={this.onLayout.bind(this)}>
            <WebView
              javaScriptEnabled={true}
              source={{uri: `https://www.youtube.com/embed/${this.state.videoId}?rel=0&autoplay=0&showinfo=0&controls=0`}}
            />
          </View>
          <View style={{padding: 15}}>
            <View style={style.flex && {flexDirection: 'row', marginBottom: 15}}>
              <View style={style.flex}>
                <View style={style.item}>
                  <Icon name='star' type='material_community' color='#f1e05a'/>
                  <Text style={style.someText}>{params.vote_average}</Text>
                </View>
              </View>
              <View style={style.flex}>
                <View style={style.item}>
                  <Icon name='date-range' type='material_community' />
                  <Text style={style.someText}>{params.release_date}</Text>
                </View>
              </View>
            </View>
            <Text style={style.description}>{params.overview}</Text>
          </View>
          <View>
            <FitImage
              source={{uri:`https://image.tmdb.org/t/p/original${params.poster_path}`}}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title')
    }
  };
}


const style = StyleSheet.create({
  flex : {
    flex: 1
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  someText: {
    fontSize: 18,
    marginLeft: 10
  },
  description: {
    fontSize: 16
  },
  star: {
    color: 'yellow'
  }
});
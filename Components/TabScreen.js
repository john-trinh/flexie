import React, { Component } from 'react';
import {  createBottomTabNavigator, createStackNavigator, } from 'react-navigation';
import NowPlayingScreen from './NowPlayingScreen';
import TopRatedScreen from './TopRatedScreen';
import MovieDetail from './MovieDetail';

import { Icon } from 'react-native-elements';

const NowPlayingStack = createStackNavigator({
  NowPlaying: {
    screen: NowPlayingScreen
  },
  MovieDetail: {
    screen: MovieDetail
  }
});
const TopRatedStack = createStackNavigator({
  TopRated: {
    screen: TopRatedScreen
  },
  MovieDetail: {
    screen: MovieDetail
  }
});

hideTab(NowPlayingStack);
hideTab(TopRatedStack);


export const Tabs = createBottomTabNavigator({
  NowPlaying: {
    screen: NowPlayingStack,
    navigationOptions: {
      tabBarLabel: 'Now Playing',
      tabBarIcon: ({tintColor}) =>( <Icon name='play-circle-outline' type='material_community' color={tintColor} />)
    }
  },
  TopRated: {
    screen: TopRatedStack,
    navigationOptions: {
      tabBarLabel: 'Top Rated',
      tabBarIcon: ({tintColor}) =>( <Icon name='star' type='material_community' color={tintColor} />)
    }
  }
}, {
  labeled: true,
  initialRouteName: 'NowPlaying',
  drawUnderTabBar: false
});


export default class TabScreen extends Component {
  render() {
    return (
      <Tabs/>
    )
  }
}

function hideTab(stack) {
  stack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
    return {
      tabBarVisible
    };
  }
}
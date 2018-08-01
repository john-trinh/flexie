import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {  createBottomTabNavigator, createStackNavigator, } from 'react-navigation';
import NowPlayingScreen from './Components/NowPlayingScreen';
import TopRatedScreen from './Components/TopRatedScreen';

import { Icon } from 'react-native-elements';

const NowPlayingStack = createStackNavigator({
  NowPlaying: {
    screen: NowPlayingScreen
  }
});
const TopRatedStack = createStackNavigator({
  TopRated: {
    screen: TopRatedScreen
  }
});

export default createBottomTabNavigator({
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

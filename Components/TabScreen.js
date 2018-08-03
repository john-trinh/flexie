import React, { Component } from 'react';
// import { Platform, StatusBar  } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, } from 'react-navigation';
import NowPlayingScreen from './NowPlayingScreen';
import TopRatedScreen from './TopRatedScreen';
import MovieDetail from './MovieDetail';
import SearchScreen from './SearchScreen';
import SearchComponent from './SearchComponent';

import { Icon } from 'react-native-elements';

const NowPlayingStack = createStackNavigator({
  NowPlaying: {
    screen: NowPlayingScreen,
    navigationOptions: {
      headerRight: (<SearchComponent/>)
    }
  },
  MovieDetail: {
    screen: MovieDetail
  },
  SearchScreen: {
    screen: SearchScreen
  }
});

const TopRatedStack = createStackNavigator(
  {
    TopRated: {
      screen: TopRatedScreen,
      navigationOptions: {
        headerRight: (<SearchComponent/>)
      }
    },
    MovieDetail: {
      screen: MovieDetail
    },
    SearchScreen: {
      screen: SearchScreen
    }
  },
  // {
  //   cardStyle: {
  //     paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  //   }
  // }
);

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
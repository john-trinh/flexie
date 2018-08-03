import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class SearchComponent extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate('SearchScreen')} style={style.search}>
        <Icon name='search' type='material_community' iconStyle={style.icon}/>
      </TouchableOpacity>
    )
  }
}

export default withNavigation(SearchComponent);
const style = StyleSheet.create({
  search: {
    marginRight: 20
  },
  icon: {
    fontSize: 24
  }
});
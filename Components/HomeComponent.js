import React, { Component } from 'react';
import { View} from 'react-native';
import NewLocationSearch from './NewLocationSearchComponent';
import Header from './HeaderComponent';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Header styel={{top: 2}}/>
        <NewLocationSearch />
      </View>
    );
  }
}


export default Home;
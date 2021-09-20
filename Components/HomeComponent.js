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
      <View style={{ flex: 1, alignItems: 'center'}}>
        <Header style={{top: 2, marginBottom: 5}}/>
        <NewLocationSearch />
      </View>
    );
  }
}


export default Home;
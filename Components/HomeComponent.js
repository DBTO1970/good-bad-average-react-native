import React, { Component } from 'react';
import { View } from 'react-native';
import NewLocationSearch from './NewLocationSearchComponent';
import Header from './HeaderComponent';
import Results from './ResultsComponent';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
          <Header style={{top: 2, marginBottom: 5}}/>
          <NewLocationSearch />
          <Results />

      </View>
    );
  }
}


export default Home;
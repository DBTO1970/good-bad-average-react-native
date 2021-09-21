import React, { Component } from 'react';
import { View} from 'react-native';
import NewLocationSearch from './NewLocationSearchComponent';
import Header from './HeaderComponent';
import { ScrollView } from 'react-native-gesture-handler';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import AverageInfo from './AverageInfoComponent';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        
          <Header style={{top: 2, marginBottom: 5}}/>
          <NewLocationSearch />
          <ScrollView>
            <GoodInfo  location='Texas' />
            <BadInfo  location='California' />
            <AverageInfo location= 'Idaho'/>
          </ScrollView>
      </View>
    );
  }
}


export default Home;
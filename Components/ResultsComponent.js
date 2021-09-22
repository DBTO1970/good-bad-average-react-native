import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import AverageInfo from './AverageInfoComponent';
// import { ScrollView } from 'react-native-gesture-handler';
import NewLocationSearch from './NewLocationSearchComponent';


class Results extends Component {
  

    static navigationOptions = {
        title: 'Results'
    }
    // componentDidMount(){
       
        
    // }
    render(){
        const thisLocation = NewLocationSearch.location;
        return (
            <View>
                <ScrollView>
                    <GoodInfo location={thisLocation} />
                    <BadInfo location='Texas' />
                    <AverageInfo location='Texas' />
                </ScrollView>
            </View>
        );
    }
}

export default Results;

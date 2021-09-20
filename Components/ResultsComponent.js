import React, { Component, useState } from 'react';
import { ScrollView } from 'react-native';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import AverageInfo from './AverageInfoComponent';
import NewLocationSearch from './NewLocationSearchComponent';


class Results extends Component {
  

    static navigationOptions = {
        title: 'Results'
    }
    componentDidMount(){
       
        
    }
    render(){
        

        return (
            <ScrollView>
                <GoodInfo location={this.location} />
                <BadInfo location={this.location} />
                <AverageInfo location={this.location} />
                
            </ScrollView>

        );
    }
}

export default Results;

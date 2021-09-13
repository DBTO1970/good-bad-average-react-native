import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import AverageInfo from './AverageInfoComponent';


class Results extends Component {

    

    render(){
       
        return (
            <ScrollView>
                <GoodInfo />
                <BadInfo />
                <AverageInfo />
            </ScrollView>

        );
    }
}

export default Results;

import React, { Component } from 'react';
import { View } from 'react-native';
import GoodInfo from './GoodInfoComponent';



class Results extends Component {
  

    static navigationOptions = {
        title: 'Results'
    }
    // componentDidMount(){
       
        
    // }
    render(){
        

        return (
            <View>
                <GoodInfo location='Texas' />
            </View>
        );
    }
}

export default Results;

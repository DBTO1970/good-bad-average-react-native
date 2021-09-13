import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';


class BusinessCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            image_url: null,
            rating: null,
           
        };
    }


    render() {
        return (
            <View>
                
                <Card>
                <Text>The Good</Text>
                    <Text style={{color: 'black'}}>{this.props.name}</Text>
                    <Image source={this.props.image_url} />
                    <Text>{this.props.rating}</Text>
                </Card>

            </View>
    );}

}
export default BusinessCard;

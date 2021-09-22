import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { Card } from 'react-native-elements';
import { APIBaseUrl } from '../Shared/APIBaseUrl';
import { BadBaseUrl } from '../Shared/BadBaseUrl';



function MakeCard({business})  {
    if(business) {
    return(
        <View style={{backgroundColor: 'red'}}>
            
            <Card >
                <Text>The Bad</Text>
                <Text style={{color: 'black'}}>{business.name}</Text>
                <Text>Category: {business.categories[0].title}</Text>
                
                <Text>Location: {business.location.display_address}</Text>
            </Card>

        </View>);
    }
    return (
        <View>
            <Text>
            Something isn't loading
            </Text>
        </View>
    );
}



class BadInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: null,
            location: props.location,
        };
    }

    

    componentDidMount() {
        console.log(this.state.location);
        const axios = require('axios');
        
        
        const config = {
            method: 'get',
            url: APIBaseUrl + BadBaseUrl + this.props.location + '"&sort_by=rating&offset=100&limit=50',
            headers: { 
                'Authorization': 
                'Bearer Vr28kW7GpAtGcOw15EdaSeZihu3gKIOGjTTDqJQ1Su1ISi_SePjG2-F0EXAOokFbHIb8xE7u8mEnul_PSUbKUuPolY57iVOq9flTyg21iXwTNjeyl6FSopi_tw8YYXYx'
            }
        };

    axios(config)
    .then((response) => {
        
        
        this.setState({business: response.data.businesses[0]});
        
        

    })
    .catch(function (error) {
    console.log(error);
    });


    }
    
    render() {
        const business = this.state.business;
        return (
            <MakeCard business={business} />
            
        );
    }
     

}

export default BadInfo;

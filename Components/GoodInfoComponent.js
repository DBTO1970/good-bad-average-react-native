import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { Card } from 'react-native-elements';
import { APIBaseUrl } from '../Shared/APIBaseUrl';
import { GoodBaseUrl } from '../Shared/GoodBaseUrl';



function MakeCard({business})  {
    if(business) {
    return(
        <View style={{backgroundColor: 'green'}}>
            
            <Card >
                <Text>The Good</Text>
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



class GoodInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: null,
            location: props.location,
        };
    }

    

    componentDidMount() {

        const axios = require('axios');
        console.log(this.state.location);
        
        const config = {
            method: 'get',
            url: APIBaseUrl + GoodBaseUrl + this.state.location + '"&sort_by=rating&limit=50',
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

export default GoodInfoComponent;

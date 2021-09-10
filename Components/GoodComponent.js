import React from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';
import axios from 'axios';

const GoodBusiness = () => {
    
    const axios = require('axios');

    const config = {
    method: 'get',
    url: 'https://api.yelp.com/v3/businesses/search?term="restaurant"&location="baltimore"&sort_by=rating&limit=50',
    headers: { 
        'Authorization': 'Bearer Vr28kW7GpAtGcOw15EdaSeZihu3gKIOGjTTDqJQ1Su1ISi_SePjG2-F0EXAOokFbHIb8xE7u8mEnul_PSUbKUuPolY57iVOq9flTyg21iXwTNjeyl6FSopi_tw8YYXYx'
    }
    };

    axios(config)
    .then(function (response) {
    (JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

    

    return (
        
        <View>
            <Text style={{color: 'black'}}>The Good</Text>
            <Card>
                <Text>{data.name}</Text>
                <Text>{goodItem.props.categories}</Text>
                <Image source={goodItem.props.image_url} />
                <Text>{goodItem.props.rating}</Text>
            </Card>

        </View>
    );
}

export default GoodBusiness;
import React, { Component } from 'react';
import { Text } from 'react-native';
import axios from 'axios';

class InfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: null
        }
    }

    componentDidMount(){
        const axios = require('axios');
        console.log('component did mount');
        const config = {
            method: 'get',
            url: 'https://api.yelp.com/v3/businesses/search?term="restaurant"&location="baltimore"&sort_by=rating&limit=50',
            headers: { 
                'Authorization': 
                'Bearer Vr28kW7GpAtGcOw15EdaSeZihu3gKIOGjTTDqJQ1Su1ISi_SePjG2-F0EXAOokFbHIb8xE7u8mEnul_PSUbKUuPolY57iVOq9flTyg21iXwTNjeyl6FSopi_tw8YYXYx'
            }
        };

    axios(config)
    .then(function (response) {
        this.setState({business: response.data.businesses[0]});    
    })
    .catch(function (error) {
    console.log(error);
    });

    
    }
    
    render() {
        return (
            <Text style={{color: 'white'}}>Working</Text>
            );
    }
       
        

}

export default InfoComponent;
import React, { Component } from 'react';
import { View } from 'react-native';

import { BaseUrl } from '../Shared/BaseUrl';


const location = 'Towson';

class InfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            business: {
                resultId: null,
                name: null,
                rating: null,
                location: null,
                image_url: null,
                lat: null,
                lng: null
            }
            
        }
    }


    componentDidMount() {
        
        const axios = require('axios');
        console.log('component did mount');
        const config = {
            method: 'get',
            url: BaseUrl + location + '"&sort_by=rating&limit=50',
            headers: { 
                'Authorization': 
                'Bearer Vr28kW7GpAtGcOw15EdaSeZihu3gKIOGjTTDqJQ1Su1ISi_SePjG2-F0EXAOokFbHIb8xE7u8mEnul_PSUbKUuPolY57iVOq9flTyg21iXwTNjeyl6FSopi_tw8YYXYx'
            }
        };

    axios(config)
    .then((response) => {
        
        console.log(response.data.businesses);
        this.setState({business: response.data.businesses[0]});
        console.log(response.data.businesses[0]);
        console.log(BaseUrl + location + '"&sort_by=rating&limit=50');
    })
    .catch(function (error) {
    console.log(error);
    });


    }
    
    render() {
        return <View>
            
        </View>
    }
     

}

export default InfoComponent;
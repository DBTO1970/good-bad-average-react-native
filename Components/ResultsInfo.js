import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { BUSINESSES } from '../Shared/results';

function RenderResult ({business}) {
    if (business) {
        return (
            <Card 
                featuredTitle={business.name} 
                image={require(item.image_url)}
            >
                <Text style={{margin: 10}}>
                    {business.rating}
                </Text>
                <Text style={{margin: 10}}>
                    {business.location}
                </Text>

            </Card>
        );
    }
    return <View />
}


class BusinessInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            businesses: BUSINESSES
        };
    }

    static navigationOptions = {
        title: 'Result Information'
    }

    render() {
        const businessId = this.props.navigation.getParam('businessId');
        const business = this.state.businesses.filter(business => business.businessId === businessId)[0];
        return <RenderResult business={props.business} />
    }
}

export default BusinessInfo
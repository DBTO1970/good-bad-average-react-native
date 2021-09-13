import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { BUSINESSES } from '../Shared/results';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        businesses: state.businesses,
        location: state.location
    };
}

function RenderBusiness ({business}) {
    if (business) {
        return (
            <ScrollView>
                <Card 
                    featuredTitle={business.name} 
                    // image={require(business.image_url)}
                >
                    <Text style={{margin: 10}}>
                        {business.rating}
                    </Text>
                    <Text style={{margin: 10}}>
                        {business.location}
                    </Text>

                </Card>
            </ScrollView>
        );
    }
    return <View />
}


class BusinessInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            
        };
    }



    static navigationOptions = {
        title: 'Business Information'
    }

    render() {
        const businessId = this.props.navigation.getParam('businessId');
        const business = this.props.businesses.businesses.filter(business => business.id === businessId)[0];
        
        return <RenderBusiness business={business} />
    }
}

export default connect(mapStateToProps)(BusinessInfo)
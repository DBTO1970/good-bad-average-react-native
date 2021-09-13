import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Tile } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        businesses: state.businesses,
       
    };
}

class Businesses extends Component {
    
    
    static navigationOptions = {
        title: 'Businesses'
    }

    render (){
        const { navigate } = this.props.navigation;
        const renderBusinessItem = ({item}) => {
            return (
                <Tile 
                    title={item.name}
                    caption={item.rating}
                    location={item.location}
                    onPress={() => navigate('BusinessInfo', { businessId: item.id })}
                    imageSrc={{ uri: item.image_url}}
                />
            );
        };
        if (this.props.businesses.isLoading) {
            return (
                <Loading />
            );
        }
        if (this.props.businesses.errMess) {
            return (
                <View>
                    <Text>
                    {this.props.businesses.errMess}
                    </Text>

                </View>
            );
        }

        return (
            <FlatList 
                data={this.props.businesses.businesses}
                renderItem={renderBusinessItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default connect(mapStateToProps)(Businesses);
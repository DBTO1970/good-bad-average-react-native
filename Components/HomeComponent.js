import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        businesses: state.businesses,
       
    };
}

function RenderItem(props) {
    const {item} = props;

    if(props.isLoading) {
        return <Loading />
    }
    if (props.errMess) {
        return (
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    if (item) {
        return (
            <Card 
                featuredTitle={item.name}
                // image={require(item.image_url)}
                >
                    <Text style={{margin: 10}}>
                        {item.rating}
                    </Text>
                </Card>
        );
    }
    return <View />
}
class Home extends Component {

    constructor(props){
        super(props);
        this.state={
            businesses: BUSINESSES,

        };
    }
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
           <ScrollView>
               <RenderItem 
               item={this.props.businesses.businesses.filter(business => business.good)[0]}
               isLoading={this.props.businesses.isLoading}
               errMess={this.props.businesses.errMess}
               />
               <RenderItem 
               item={this.props.businesses.businesses.filter(business => business.bad)[0]}
               isLoading={this.props.businesses.isLoading}
               errMess={this.props.businesses.errMess}
               />
               <RenderItem 
               item={this.props.businesses.businesses.filter(business => business.average)[0]}
               isLoading={this.props.businesses.isLoading}
               errMess={this.props.businesses.errMess}
               />
           </ScrollView>
        );
    }

  
}

export default connect(mapStateToProps)(Home);
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-natrive-elements';
import { BUSINESSES } from '../Shared/results';


function RenderItem({item}) {
    if (item) {
        return (
            <Card 
                featuredTitle={item.name}
                image={require(item.image_url)}
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
            results: BUSINESSES,

        };
    }
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
           <ScrollView>
               <RenderItem 
               item={this.state.results.filter(business => business.good)[0]}
               />
               <RenderItem 
               item={this.state.results.filter(business => business.bad)[0]}
               />
               <RenderItem 
               item={this.state.results.filter(business => business.average)[0]}
               />
           </ScrollView>
        );
    }

  
}

export default Home;
import React from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';



const BusinessCard = (item) => {
    const {good} = item;
    
    return (
        <View>
            <Text>The Good</Text>
            <Card>
                <Text style={{color: 'black'}}>{item.name}</Text>
                {/* <Text>{item.categories.title}</Text> */}
                <Image source={item.image_url} />
                <Text>{item.rating}</Text>
            </Card>

        </View>
    );

}

export default BusinessCard;
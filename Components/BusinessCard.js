import React from 'react';
import { View, Text } from 'react-native';
import { Card, Image } from 'react-native-elements';

const BusinessCard = (rateClass, {item}) => {

    return (
        <View>
            <Text>{rateClass}</Text>
            <Card>
                <Text>{item.name}</Text>
                <Text>{item.categories.title}</Text>
                <Image source={item.image_url} />
                <Text>{item.rating}</Text>
            </Card>

        </View>
    );
}

export default BusinessCard;
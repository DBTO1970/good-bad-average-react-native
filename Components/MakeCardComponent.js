import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

export default function MakeCard ({business}) {
    return (
        <View>
                
                <Card>
                <Text>The Good</Text>
                    <Text style={{color: 'black'}}>{props.name}</Text>
                    <Image source={business.image_url} />
                    <Text>{business.rating}</Text>
                </Card>

            </View>
    );
};

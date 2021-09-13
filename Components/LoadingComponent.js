import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } 
from 'react-native';
import * as Animatable from 'react-native-animatable';

function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='#28a6bb' />
            <Text style={styles.loadingText}>
                Loading . . .
            </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1
        },
        loadingText: {
            color: '#28a6bb',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
);

export default Loading;
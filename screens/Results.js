import React from 'react';
import { View, Text, StyleSheet } from ' react-native';

const TheResults = () => {
    return (
        <View style={styles.container}>
            <Text>The Results</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyCotent: 'center',
        alignItems: 'center',
    }
});

export default TheResults;
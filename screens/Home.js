import React from 'react';
import { View, Text, StyleSheet } from ' react-native';

const TheHome = () => {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
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

export default TheHome;
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

class Header extends Component {

    render() {
        return(
            <View style={styles.container}>
                
                <Text
                    style={styles.headerText}>
                    The Good, The Bad, & The Average
                </Text>
                <Image 
                    source={require('./images/logo.png')}
                    style={styles.headerImage}
                />
                <Text style={styles.headerSubText}>
                    Find the best, worst,{'\n'} and most average-rated restaurant
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#28a6bb',
        alignItems: 'center'
    },
    headerImage: {
        height:100,
        width:100,
        margin: 10,
        marginTop: 20,
        justifyContent: 'center',
        
        
    },
    headerText: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
        marginTop: 80
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    },
    headerSubText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
    
})

export default Header;

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

class Header extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Image 
                    source={require('./images/logo.png')}
                    style={styles.headerImage}
                />
                <Text
                    style={styles.headerText}>
                    The Good, The Bad, & The Average
                </Text>
                
                <Text style={styles.headerSubText}>
                    Find the best, worst,{'\n'}
                     and most average-rated restaurant
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#28a6bb',
        alignItems: 'center',
        
        paddingTop: 30,
    },
    headerImage: {
        height:100,
        width:100,

        marginTop: 20,
        // justifyContent: 'center',
        
        
    },
    headerText: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    image: {
        flex: 1,
        // justifyContent: 'center'
    },
    headerSubText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    }
    
})

export default Header;

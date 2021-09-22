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
               
                    <Text style={styles.headerText}>The Good, </Text>
                    <Text style={styles.headerText}>The Bad{'\n'} &</Text>
                    <Text style={styles.headerText}>The Average</Text>
            
                <Text style={styles.headerSubText}>
                    Find the best, worst,{'\n'}
                     and most average-rated restaurants{'\n'} near you
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        backgroundColor: '#28a6bb',
        alignItems: 'center',
        paddingTop: 0,
        width: '100%',
    },
    headerImage: {
        height:60,
        width:60,
        marginTop: 10,

        
        
    },
    headerText: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
    },
    image: {
        flex: 1,
        // justifyContent: 'center'
    },
    headerSubText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20
    }
    
})

export default Header;

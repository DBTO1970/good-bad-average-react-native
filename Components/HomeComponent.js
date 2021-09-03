import React, { Component } from 'react';
import { View, Text, StyleSheet, 
    ImageBackground } from 'react-native';
import { Image } from 'react-native-elements';

import ZipcodeField from './ZipCodeSearchComponent';

class Home extends Component {

    render() {
        return(
            <View style={styles.container} >
                <ImageBackground 
                    source={require('./images/Heroimg2.jpg')}
                    resizeMode='cover'
                    style={styles.image} 
                >
                <Image 
                    source={require('./images/logo.png')}
                    style={styles.headerImage}
                />
                <Text
                    style={styles.headerText}>
                    The Good, The Bad, & The Average
                </Text>
                <ZipcodeField />
                </ImageBackground>
            </View>
           
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#28a6bb'
    },
    headerImage: {
        height:60,
        width:60,
        margin: 10,
        
    },
    headerText: {
        fontSize: 26,
        color: '#fff',
        fontWeight: 'bold',
        justifyContent: 'center',
        margin: 10
    },
    image: {
        flex: 1,
        justifyContent: 'center'
    }
    
})
export default Home;
import React, { Component } from 'react';
import { View, Text, StyleSheet, 
    ImageBackground } from 'react-native';
import Header from './HeaderComponent';
import Navbar from './NavbarComponent';

class Home extends Component {

    render() {
        return(
            <View style={styles.container} >
                <Navbar />
                <Header />
                <ImageBackground 
                    source={require('./images/Heroimg2.jpg')}
                    resizeMode='cover'
                    style={styles.image} 
                />

            </View>
           
        ); 
    }
}

const styles = StyleSheet.create({
   
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
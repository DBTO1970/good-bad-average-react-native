import React, { Component } from 'react';
import { ImageBackground, StyleSheet, } from 'react-native';
import Header from './HeaderComponent';
import InfoComponent from './InfoComponent';
import LocationSearch from './LocationSearchComponent';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';



class Main extends Component {
    
    
    
    render() {
   
        return(
                
                <ImageBackground 
                        source={require('./images/Heroimg2.jpg')}
                        resizeMode='cover'
                        style={styles.image} 
                    >
                    <Header style={styles.header} />
                    <LocationSearch />
                    
                    <InfoComponent />

                </ImageBackground>
                
           
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        
    },
    header: {
        alignItems: 'stretch',
        marginTop: 0
    },
    
    
})

export default Main;
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Header from './HeaderComponent';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import AverageInfo from './AverageInfoComponent';
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
                    <ScrollView>
                    <Header style={styles.header} />
                    <LocationSearch />
                    
                        <GoodInfo />
                        <BadInfo />
                        <AverageInfo />
                    </ScrollView>


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
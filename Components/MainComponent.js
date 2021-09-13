import React, { Component } from 'react';
import Constants from 'expo-constants';
import { ImageBackground, StyleSheet, 
    ScrollView, Platform, View } from 'react-native';
import Header from './HeaderComponent';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import AverageInfo from './AverageInfoComponent';
import LocationSearch from './LocationSearchComponent';
import { createAppContainer } from 'react-navigation';
import { GoodBaseUrl } from '../Shared/GoodBaseUrl';

class Main extends Component {
    
    
    
    render() {
   
        return(
                <View 
                    style={{
                        flex: 1,
                        paddingTop: 
                            Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                    }} >
                    <ImageBackground 
                            source={require('./images/Heroimg2.jpg')}
                            resizeMode='cover'
                            style={styles.image} 
                        >
                        <ScrollView>
                        <Header style={styles.header} />
                        <LocationSearch />
                        <GoodBaseUrl />
                        <BadInfo />
                        <AverageInfo />
                        
                        </ScrollView>


                    </ImageBackground>
                    
                </View>
                
           
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
import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import Header from './HeaderComponent';
import InfoComponent from './InfoComponent';



class Main extends Component {
    
    
    
    render() {
   
        return(
            
                <ImageBackground 
                        source={require('./images/Heroimg2.jpg')}
                        resizeMode='cover'
                        style={styles.image} 
                    >
                    <Header style={styles.header} />
                    
                    
                    <Input 
                            placeholder='City, State, or Zip' 
                            inputContainerStyle={{color: '#fff'}}
                            leftIcon={
                                {
                                    type: 'font-awesome', 
                                    name: 'chevron-left', 
                                    color: "#fff"
                                }
                            } 
                            onChangeText={
                                value => this.setState(
                                    {searchText: value}
                                )
                            } 
                            style={{color: '#fff'}} 
                            containerStyle={{backgroundColor: '#28a6bb'}}
                        />
                    <InfoComponent />

                </ImageBackground>
                
           
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    header: {
        alignItems: 'stretch'
    }
    
})

export default Main;
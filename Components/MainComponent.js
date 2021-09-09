import React, { Component } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import About from './AboutComponent';
import Header from './HeaderComponent';



class Main extends Component {
    
    render() {
        let searchText = '';
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
                    
              
              <About />
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
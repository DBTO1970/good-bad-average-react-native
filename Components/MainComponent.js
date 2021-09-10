import React, { Component } from 'react';
import { ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import { Input } from 'react-native-elements';
import GoodBusiness from './GoodComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';




class Main extends Component {
    
    
    render() {
       if (this.state.isLoading) {
           return (
               <View style={styles.container}>
                <ActivityIndicator />
               </View>
           )
       } else {
            let businesses = this.state.dataSource.map((val, key) => {
                return <View key={key} style={styles.item}>
                    <Text>{businesses}</Text>
                </View>
            })
       }
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
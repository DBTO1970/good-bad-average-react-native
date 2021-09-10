import React, { Component } from 'react';
import { ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import { Input } from 'react-native-elements';
import GoodBusiness from './GoodComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import { style } from 'dom-helpers';



class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    componentDidMount () {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer Vr28kW7GpAtGcOw15EdaSeZihu3gKIOGjTTDqJQ1Su1ISi_SePjG2-F0EXAOokFbHIb8xE7u8mEnul_PSUbKUuPolY57iVOq9flTyg21iXwTNjeyl6FSopi_tw8YYXYx");
        
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        return fetch("https://api.yelp.com/v3/businesses/search?term=\"restaurant\"&location=\"baltimore\"&sort_by=rating&limit=50", requestOptions)
          .then(response => response.json() )
          .then(responseJson => {
              this.setState({
                  isLoading: false,
                  dataSource: responseJson.businesses,
              })
          })
          .catch(error => console.log('error', error));
    };

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
              <GoodBusiness />
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
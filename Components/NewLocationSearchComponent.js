import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import { ScrollView } from 'react-native-gesture-handler';

// import { render } from 'react-dom';


class NewLocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            location: '',
        }
    }

    componentDidMount(){
        if (!this.state.location) {
            return (
                this.setState({location: 'Washington, DC'})
                
            );
            
        } else {
            return ((this.state.location));
        }
    }
    componentDidUpdate() {
        return ((this.state.location));
        
    }

    // handleSetLocation({location}) {
        
    //     return(
            
    //             <View>
    //                 <GoodInfo location={location} />
    //             </View>
            
    //     );
    // }
    



    render(){
        
        return(
            
            <View >
             
                <View style={styles.locationSearch}>
                    <TextInput
                        style={{marginLeft: 10, textAlign: 'center'}} 
                        autoCompleteType='street-address'
                        placeholder='Enter a City, State, or Zip' 
                        inputContainerStyle={{color: 'black'}}
                        onChangeText={
                            (val) => this.setState({location: val.toString()}) 
                        }
                        
                    />
                   <TouchableOpacity>
                    <Button
                        icon={
                            <Icon
                            name="search"
                            size={18}
                            color="white"
                            
                            />
                        }
                        title="Show Me The Choices"
                        onPress={ 
                                () => console.log(this.state.location)
                            }
                        />
                        {/* Need to figure out onPress */}
                    </TouchableOpacity>
                <ScrollView>
                    <GoodInfo location='Texas' />
                    <BadInfo location='Texas' />
                
                
                </ScrollView>
            </View>
        </View>
        );
    }
    
}


const styles = StyleSheet.create({
    locationSearch: {
        color: '#000',
        backgroundColor: '#fff',
    }
})


export default NewLocationSearch;
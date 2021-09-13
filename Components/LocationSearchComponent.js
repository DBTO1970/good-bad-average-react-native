import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            location: 'Washington, DC',
        }
    }

    handleTextEnter() {
        this.setState({location: toString()});
        
    }


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
                </View>
                <TouchableOpacity>
                <Button
                    icon={
                        <Icon
                        name="search"
                        size={26}
                        color="white"
                        
                        />
                    }
                    title="Show Me The Choices"
                    onPress={ () => (console.log(this.state.location))}
                    />
                </TouchableOpacity>
                
        </View>
        );
    }
    
}

const styles = StyleSheet.create({
    locationSearch: {
        color: 'white',
        backgroundColor: '#28a6bb',
    }
})


export default LocationSearch;
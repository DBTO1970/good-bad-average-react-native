import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Results from './ResultsComponent';






class LocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            location: '',
        }
    }

    handleTextEnter() {
        
        this.setState({location: toString()});
        console.log(this.state.location)
        
    }

    componentDidMount(){
        if (!this.state.location) {
            return (
                this.setState({location: 'Washington, DC'})
            );
        } else {
            return (this.state.location);
        }
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
                    onPress={ (val) => (this.handleTextEnter(val))}
                    />
                </TouchableOpacity>
                
        </View>
        );
    }
    
}

export const location = LocationSearch.location;

const styles = StyleSheet.create({
    locationSearch: {
        color: 'white',
        backgroundColor: '#28a6bb',
    }
})


export default LocationSearch;
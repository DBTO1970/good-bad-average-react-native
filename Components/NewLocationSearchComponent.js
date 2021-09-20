import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import AverageInfo from './AverageInfoComponent';
import { ScrollView } from 'react-native-gesture-handler';
import Results from './ResultsComponent';

class NewLocationSearch extends Component {
    constructor(props) {
        super(props);
        this.state= {
            location: '',
        }
    }

    static navigationOptions = {
        title: 'Search'
    }

    handleTextEnter() {
        
        this.setState({location: toString()});
        console.log(this.state.location);
   

        
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
                    onPress={() => <Results />}
                    />
                </TouchableOpacity>
                
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
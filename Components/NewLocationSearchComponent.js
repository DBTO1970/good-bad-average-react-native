import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import GoodInfo from './GoodInfoComponent';
import BadInfo from './BadInfoComponent';
import AverageInfo from './AverageInfoComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { render } from 'react-dom';
// import { render } from 'react-dom';

function setLocation({location}) {
    
    return(
        <View>
            <ScrollView>
                <GoodInfo location={location} />
                <BadInfo location={location} />
                <AverageInfo location={location} />
            </ScrollView>
        </View>
    );
}

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

    // handleTextEnter() {
        
    //     this.setState({location: toString()});
    //     console.log(this.state.location);
   

        
    // }

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



    render(){
      
        return(
            
            <View >
             <ScrollView>
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
                            size={26}
                            color="white"
                            
                            />
                        }
                        title="Show Me The Choices"
                        onPress={ () => setLocation(this.state.location) }
                        />
                    </TouchableOpacity>
                </View>
                <View>
                   
                        <GoodInfo location={this.state.location.location} />
                        <BadInfo location={this.state.location.location} />
                        <AverageInfo location={this.state.location.location} />
                   
                </View>
                
                </ScrollView>
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
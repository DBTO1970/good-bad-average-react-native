import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { RESULTS } from '../Shared/results';

class Results extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            results: RESULTS
        };
    }

    static navigationOptions = {
        title: 'Results'
    }

    render (){
        const { navigate } = this.props.navigation;
        const renderResults = ({item}) => {
            return (
                <ListItem 
                    title={item.name}
                    subtitle={item.rating}
                    location={item.location}
                    onPress={() => props.onPress(item.resultId)}
                    leftAvatar={{ source: require(item.image_url)}}
                />
            );
        };

        return (
            <FlatList 
                data={props.results}
                renderItem={renderResults}
                keyExtractor={item => item.resultId.toString()}
            />
        );
    }
}

export default Results;
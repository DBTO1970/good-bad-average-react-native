import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';



class About extends Component {
    
    static navigationOptions = {
        title: 'About'
    }

    render () {
        return (
            <View  >
                <Card containerStyle={{backgroundColor: '#28a6bb'}}>
                    <Text style={styles.heroTitle}
                    >About this project
                    </Text>
                    <Text style={styles.heroTitle}>
                    The Project: {"\n"}
                        Type in your zip code and the site will show you the best, worst, and most average-rated restaurant near you.
                    </Text>  
                    <Text style={styles.heroTitle}>
                        Technicals: {"\n"}
                        React, React Native, Axio, Bootstrap, Yelp Fusion API, Google Maps API
                        {/* <Link href="https://github.com/DBTO1970/good-bad-average-react-native" className="mb-4">Here's the Github</Link>   */}
                    </Text>
                    <Text style={styles.heroTitle}>
                        The Team:{"\n"}
                        Don Barto and Esteban Porras
                    </Text> 
                </Card>
            </View>
        )
    };
};

const styles = StyleSheet.create({
    heroTitle: {
        marginTop: 5,
        marginBottom: 5,
        color: '#fff'
    }
})
export default About;
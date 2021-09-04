import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



class About extends Component {
    render () {
        return (
            <View >
                <Text>
                    <h1 style={styles.heroTitle}>About this project</h1>
                </Text>
                <Text style={styles.heroTitle}>
                    <Text>The Project</Text>
                    <Text> Type in your zip code and the site will show you the best, worst, and most average-rated restaurant near you.</Text>
                </Text>  
                <Text style={styles.heroTitle}>
                        <Text>Technicals</Text>
                    <Text>React, Bootstrap, and instert APIs What other details are relevant?</Text>
                    <Link href="#" className="mb-4">Here's the Github</Link>  
                </Text>
                <Text style={styles.heroTitle}>
                    <Text>The Team</Text>
                    <Text>Don Barto and Esteban Porras</Text>
                </Text> 
            </View>
        )
    };
};

const styles = StyleSheet.create({
    heroTitle: {
        marginTop: 5,
        marginBottom: 5
    }
})
export default About;
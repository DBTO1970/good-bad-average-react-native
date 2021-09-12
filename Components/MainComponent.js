import React, { Component } from 'react';
import Constants from 'expo-constants';
import Results from './ResultsComponent';
import ResultsInfo from './ResultsInfo';
import { BUSINESSES } from '../Shared/results';
import BusinessInfo from './ResultsInfo';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


const ResultsNavigator = createStackNavigator(
    {
        Results: { screen: ResultsComponent},
        ResultsInfo: { screen: ResultsInfo}
    },
    {
        initialRouteName: 'Results',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#28a6bb'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
       
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#28a6bb'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const MainNavigator = createStackNavigator(
    {
        Home: { screen: HomeNavigator },
        Results: { screen: ResultsNavigator}
    },
    {
       drawerBackgroundColor: '#CEC8FF'
    }
)

const AppNavigator = createAppContainer(ResultsNavigator);

class Main extends Component {
       
    
    
    render() {
   
        return(
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>

        );
    }
}


export default Main;
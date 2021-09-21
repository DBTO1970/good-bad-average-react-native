import React, { Component } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, 
    ScrollView, Platform, View, Image, Text } from 'react-native';
import Home from './HomeComponent';
import About from './AboutComponent';
import NewLocationSearch from './NewLocationSearchComponent';
import Results from './ResultsComponent';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, 
    DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import SafeAreaView  from 'react-native-safe-area-view';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#28a6bb'
            },
            headerTintColor: '#fff',
            headerTitleStyle: { 
                color: '#fff'
            },
            headerLeft: <Icon 
                name='home'
                type= 'font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);


// const SearchNavigator = createStackNavigator(
//     {
//         Search: { screen: NewLocationSearch }
//     },
//     {
//         defaultNavigationOptions: ({navigation}) => ({
//             headerStyle: {
//                 backgroundColor: '#28a6bb'
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: { 
//                 color: '#fff'
//             },
//             headerLeft: <Icon 
//                 name='search'
//                 type= 'font-awesome'
//                 iconStyle={styles.stackIcon}
//                 onPress={() => navigation.toggleDrawer()}
//                 />
//         })
//     }
// );

// const ResultsNavigator = createStackNavigator(
//     {
//         Results: { screen: Results }
//     },
//     {
//         defaultNavigationOptions: ({navigation}) => ({
//             headerStyle: {
//                 backgroundColor: '#28a6bb'
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: { 
//                 color: '#fff'
//             },
//             headerLeft: <Icon 
//                 name='list-alt'
//                 type= 'font-awesome'
//                 iconStyle={styles.stackIcon}
//                 onPress={() => navigation.toggleDrawer()}
//                 />
//         })
//     }
// );

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#28a6bb'
            },
            headerTintColor: '#fff',
            headerTitleStyle: { 
                color: '#fff'
            },
            headerLeft: <Icon 
                name='info-circle'
                type= 'font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
                />
        })
    }
);

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
            >
                <View style={styles.drawerHeader}>
                    <View style={{flex: 1}}>
                        <Image 
                            source={require('./images/logo.png')}
                            style={styles.drawerImage}
                        />
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.drawerHeaderText}>The Good, </Text>
                        <Text style={styles.drawerHeaderText}>The Bad &</Text>
                        <Text style={styles.drawerHeaderText}>The Average</Text>
                    </View>
                </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                        />
                )
            }
        },
        
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                        />
                )
            }
        }

    },
    {
        initialRouteName: 'Home',
        drawerBackgroundColor: '#d1d1d1',
        contentComponent: CustomDrawerContentComponent
        
    }
)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    
    
    
    render() {
   
        return(
                <View 
                    style={{
                        flex: 1,
                        paddingTop: 
                            Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                    }} >
                    <AppNavigator />
                    
                </View>
                
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        
        
    },
    header: {
        alignItems: 'stretch',
        marginTop: 0
    },
    drawerHeader: {
        backgroundColor: '#28a6bb',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24

    }
    
    
})

export default Main;
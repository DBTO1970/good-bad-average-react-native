import React, { Component } from 'react';
import Constants from 'expo-constants';
import Businesses from './BusinessesComponent';
import BusinessInfo from './BusinessInfoComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import { connect } from 'react-redux';
import {fetchBusinesses, fetchSearch} from '../redux/ActionCreators';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import SafeAreaView  from 'react-native-safe-area-context';

const mapDispatchToProps = {
    fetchBusinesses,
    fetchSearch,
};

const BusinessNavigator = createStackNavigator(
    {
        businesses: { 
            screen: Businesses,
            navigationOptions: ({navigation}) => 
            ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    
                    onPress={() => navigation.toggleDrawer()}
                    />
            })
        },
        BusinessInfo: { screen: BusinessInfo}
    },
    {
        initialRouteName: 'Businesses',
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
);

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
            },
            headerLeft: <Icon 
                name= 'home'
                type= 'font-awesome'
                
                onPress={() => navigation.toggleDrawer()}
                />
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
       
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#28a6bb'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon 
                name='info-circle'
                type='font-awesome'
                
                onPress={() => navigation.toggleDrawer()}
            />
        }
    }
);

const CustomDrawerComponent = props => (
    <ScrollView>
        <SafeAreaView 
            style={styles.container}
            forceInset={{top: 'always', horizontal: 'never'}}
        >
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image 
                        source={require('./images/logo.png')}
                        style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>
                        The Good, The Bad & The Average
                    </Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);
const MainNavigator = createStackNavigator(
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
        Businesses: { 
            screen: BusinessNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon 
                        name='list'
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
                drawerLabel: 'About The Project',
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
       drawerBackgroundColor: '#CEC8FF',
       contentComponent: CustomDrawerComponent
    }
)

const AppNavigator = createAppContainer(BusinessNavigator);

class Main extends Component {
       
    componentDidMount() {
        this.props.fetchBusinesses();
        this.props.fetch();

    }
    
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

const styles= StyleSheet.create({
    container: {
        flex: 1,
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
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },  
    
});

export default connect(null, mapDispatchToProps)(Main);
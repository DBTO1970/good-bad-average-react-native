import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
// import screens
import TheHome from '../screens/Home';
import TheResults from '../screens/Results';

const Tab = createBottomTabNavigator();
const tabBarOptions = {
    showLabel: false,
    activeTintColor: '#080808',
    style: {
        height: '10%',
    },
};

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={tabBarOptions}>
                <Tab.Screen 
                    name='Home'
                    component={TheHome}
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <Icon 
                            name='home'
                            type= 'font-awesome'
                            iconStyle={styles.stackIcon}
                            color={color}
                            size={size}
                            />
                        ),
                    }}
                />
                <Tab.Screen 
                    name='Results'
                    component={TheResults}
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <Icon 
                            name='info'
                            type= 'font-awesome'
                            iconStyle={styles.stackIcon}
                            color={color}
                            size={size}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
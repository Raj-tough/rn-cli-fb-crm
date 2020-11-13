import React from 'react';
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsStackScreen from '../SettingsStack/SettingsStackScreen';
import BillScreen from './BillScreen';
import {
  createBottomTabNavigator,
  CardStyleInterpolators,
} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="grid-outline" color={'black'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Bill"
        component={BillScreen}
        options={{
          tabBarLabel: 'Bill',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="receipt-outline" color={'black'} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="settings-outline" color={'black'} size={20} />
          ),
        }}
      />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default TabNavigator;

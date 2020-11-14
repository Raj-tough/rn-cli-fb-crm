import React from 'react';
import HomeScreen from '../DashboardStack/DashboardScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsStackScreen from '../SettingsStack/SettingsStackScreen';
import {
  createBottomTabNavigator,
  CardStyleInterpolators,
} from '@react-navigation/bottom-tabs';
import BillStackScreen from '../BillStack/BillStackScreen';
import DashboardStackScreen from '../DashboardStack/DashboardStackScreen'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DashboardStackScreen}
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
        component={BillStackScreen}
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

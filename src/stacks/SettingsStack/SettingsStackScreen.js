import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SettingsScreen from '../SettingsStack/SettingsScreen';
import StockStackScreen from './StockStack/StockStackScreen';
import CustomerStackScreen from './CustomerStack/CustomerStackScreen';
import ProductStackScreen from './ProductStack/ProductStackScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({navigation}) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1F65FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen
        name="ProductStackScreen"
        component={ProductStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen
        name="StockScreen"
        component={StockStackScreen}
        options={{
          headerShown: false,
        }}
      />
      <SettingsStack.Screen
        name="CustomerScreen"
        component={CustomerStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;

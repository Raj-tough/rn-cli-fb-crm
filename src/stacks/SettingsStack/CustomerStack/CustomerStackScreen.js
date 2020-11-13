import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import CustomerScreen from './CustomerScreen';
import AddCustomerScreen from './AddCustomerScreen';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({navigation}) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <SettingsStack.Screen
        name="CustomerScreen"
        component={CustomerScreen}
        options={{
          headerShown: true,
          title: 'Customers',
        }}
      />
      <SettingsStack.Screen
        name="AddCustomerScreen"
        component={AddCustomerScreen}
        options={{
          headerShown: true,
          title: 'Add Customer',
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;

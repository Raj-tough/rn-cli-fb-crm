import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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
          headerRight: () => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  marginRight: 15,
                }}>
                <View style={{marginRight: 15}}>
                  <Text>
                    Total {'  '} - {'  '} 4
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'dodgerblue',
                    backgroundColor: 'lightblue',
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                  }}
                  onPress={() => navigation.navigate('AddCustomerScreen')}>
                  <Text style={{color: 'white'}}>Add</Text>
                </TouchableOpacity>
              </View>
            );
          },
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

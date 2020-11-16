import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import CustomerScreen from './CustomerScreen';
import AddCustomerScreen from './AddCustomerScreen';
import {connect} from 'react-redux';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({navigation, customerData}) => {
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
                    Total {'  '} - {'  '}{' '}
                    {customerData && customerData[0]
                      ? Object.keys(customerData[0]).length
                      : 0}
                  </Text>
                </View>
                <Pressable
                  android_ripple={{color: 'lightgrey'}}
                  style={{
                    borderRadius: 10,
                    // borderWidth: 1,
                    borderColor: 'dodgerblue',
                    backgroundColor: 'dodgerblue',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                  }}
                  onPress={() => navigation.navigate('AddCustomerScreen')}>
                  <Text style={{color: 'white'}}>+ Add</Text>
                </Pressable>
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

function mapStateToProps(state) {
  return {
    customerData: state.CustomerReducer.customerData,
  };
}

export default connect(mapStateToProps)(SettingsStackScreen);

import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DashboardScreen from './DashboardScreen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DashboardStack = createStackNavigator();

const DashboardStackScreen = ({navigation}) => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <DashboardStack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          headerShown: true,
          headerRight: () => {
            return (
              <View
                style={{
                  width: 0.6 * width,
                  height: 0.06 * height,
                  borderRadius: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 0.01 * width,
                  //   borderBottomColor: 'lightgrey',
                  //   borderBottomWidth: 1,
                }}>
                <Icon
                  style={{marginLeft: 0.05 * width}}
                  name="search-outline"
                  color={'black'}
                  size={20}
                />
                <TextInput
                  placeholder="Search"
                  style={{
                    width: 0.45 * width,
                    marginLeft: 0.03 * width,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStackScreen;

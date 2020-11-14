import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Pressable,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import BillScreen from './BillScreen';
import AddBillScreen from './AddBillScreen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BillStack = createStackNavigator();

const BillStackScreen = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  return (
    <BillStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <BillStack.Screen
        name="BillScreen"
        component={BillScreen}
        options={{
          title: 'Bills',
          headerShown: true,
          // headerTitleAlign: 'center',
          headerRight: () => {
            return (
              <Pressable
                android_ripple={{color: 'lightgrey'}}
                onPress={() => navigation.navigate('AddBillScreen')}
                style={{
                  width: 0.25 * width,
                  height: 0.06 * height,
                  borderRadius: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // marginRight: 0.01 * width,
                }}>
                <Text
                  style={{
                    color: 'dodgerblue',
                    fontSize: 18,
                    fontWeight: 'bold',
                  }}>
                  + Add Bill
                </Text>
              </Pressable>
            );
          },
        }}
      />
      <BillStack.Screen
        name="AddBillScreen"
        component={AddBillScreen}
        options={{
          headerShown: true,
          title: 'Add Bill',
        }}
      />
    </BillStack.Navigator>
  );
};

export default BillStackScreen;

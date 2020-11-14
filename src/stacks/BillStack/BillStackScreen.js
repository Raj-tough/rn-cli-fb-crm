import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import BillScreen from './BillScreen';

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
              <View
                style={{
                  width: 0.6 * width,
                  height: 0.06 * height,
                  borderRadius: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 0.01 * width,
                }}>
                <Icon
                  style={{marginLeft: 0.05 * width}}
                  name="search-outline"
                  color={'black'}
                  size={20}
                />
                <TextInput
                  placeholder="Search Bill"
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
    </BillStack.Navigator>
  );
};

export default BillStackScreen;

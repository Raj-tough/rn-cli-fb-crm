import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import StockScreen from './StockScreen';

const StockStack = createStackNavigator();

const StockStackScreen = ({navigation}) => {
  return (
    <StockStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <StockStack.Screen
        name="StockScreen"
        component={StockScreen}
        options={{
          headerShown: true,
        }}
      />
    </StockStack.Navigator>
  );
};

export default StockStackScreen;

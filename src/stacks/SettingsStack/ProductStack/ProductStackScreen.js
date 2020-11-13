import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import ProductScreen from './ProductScreen';
import AddProductScreen from './AddProductScreen';

const ProductStack = createStackNavigator();

const ProductStackScreen = ({navigation}) => {
  return (
    <ProductStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <ProductStack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: 'Products',
          headerShown: true,
        }}
      />
      <ProductStack.Screen
        name="AddProductScreen"
        component={AddProductScreen}
        options={{
          title: 'Add Products',
          headerShown: true,
        }}
      />
    </ProductStack.Navigator>
  );
};

export default ProductStackScreen;

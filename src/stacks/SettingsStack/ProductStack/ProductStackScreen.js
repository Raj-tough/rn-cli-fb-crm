import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import ProductScreen from './ProductScreen';
import AddProductScreen from './AddProductScreen';
import {connect} from 'react-redux';

const ProductStack = createStackNavigator();

const ProductStackScreen = ({navigation, productList}) => {
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
                    {productList && productList
                      ? Object.keys(productList).length
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
                  onPress={() => navigation.navigate('AddProductScreen')}>
                  <Text style={{color: 'white'}}>+ Add</Text>
                </Pressable>
              </View>
            );
          },
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

function mapStateToProps(state) {
  return {
    productList: state.ProductReducer.productList,
  };
}

export default connect(mapStateToProps)(ProductStackScreen);

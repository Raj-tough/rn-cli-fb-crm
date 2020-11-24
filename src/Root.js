/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootStackScreen from './stacks/RootStack/RootStackScreen';
import HomeStackScreen from './stacks/HomeStack/HomeStackScreen';
import {NavigationContainer} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';
import {getCustomers} from './/services/CustomerServices';
import {
  getAndUpdateCategoryListDataToState,
  getAndUpdateProductListDataToState,
} from './services/ProductService';
import {Bars} from 'react-native-loader';

const Root = (props) => {
  const {loggedIn, verifying, user, verified} = props;

  const dispatch = useDispatch();

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  useEffect(() => {
    if (verified) {
      dispatch(getCustomers(user.uid));
      dispatch(getAndUpdateProductListDataToState(user.uid));
      dispatch(getAndUpdateCategoryListDataToState(user.uid));
    }
  }, [verified, user]);
  if (verifying) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Bars size={10} color="#1e90ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {loggedIn ? <HomeStackScreen /> : <RootStackScreen />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

function mapStateToProps(state) {
  return {
    user: state.LoginReducer.user,
    loggedIn: state.LoginReducer.loggedIn,
    verifying: state.LoginReducer.verifying,
    verified: state.LoginReducer.verified,
  };
}

export default connect(mapStateToProps)(Root);

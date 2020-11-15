/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootStackScreen from './stacks/RootStack/RootStackScreen';
import HomeStackScreen from './stacks/HomeStack/HomeStackScreen';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';

const Root = (props) => {
  const {loggedIn, verifying} = props;

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (verifying) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="dodgerblue" />
        <Text>Loading...</Text>
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
    loggedIn: state.LoginReducer.loggedIn,
    verifying: state.LoginReducer.verifying,
  };
}

export default connect(mapStateToProps)(Root);

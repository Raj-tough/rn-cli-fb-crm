/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootStackScreen from './stacks/RootStack/RootStackScreen';
import {NavigationContainer} from '@react-navigation/native';

const Root = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Root;

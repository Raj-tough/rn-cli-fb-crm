import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Pressable,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import Splash from '../../assets/back.jpg';
import Logo from '../../assets/logo2.png';
import {connect, useDispatch} from 'react-redux';
import {loginUser, wrongCredentials} from '../../services/AuthService';
import {resetWrongCredentials} from '../../actions/AuthAction';

const SignInScreen = (props) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [button, setButton] = useState(false);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passswordError, setPasswordError] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const dispatch = useDispatch();
  const {wrongCredentials} = props;

  const login = () => {
    if (email && password) {
      setLoginLoading(true);
      dispatch(loginUser(email, password));
    } else {
      if (email.length === 0) {
        setEmailError(true);
      }
      if (password === '') {
        setPasswordError(true);
      }
      showToast('Please enter right credentials');
    }
  };

  useEffect(() => {
    if (email) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    if (password) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }, [email, password]);

  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  useEffect(() => {
    if (wrongCredentials === true) {
      showToast('Email Id / Password is wrong. !');
      setLoginLoading(false);
      dispatch(resetWrongCredentials());
    }
  }, [wrongCredentials]);

  return (
    <View style={{height: height, width: width, alignItems: 'center'}}>
      <Text
        style={{
          marginTop: 0.1 * height,
          color: 'white',
          fontWeight: 'bold',
          fontSize: 30,
          color: 'black',
        }}>
        SRK RENTALS CRM
      </Text>
      <ScrollView
        style={{
          marginTop: 0.13 * height,
          // backgroundColor: 'green',
        }}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={250}>
          <View>
            <Text style={{color: 'black'}}>Enter email</Text>
            <TextInput
              value={email}
              onChangeText={setemail}
              // maxLength={10}
              // keyboardType="phone-pad"
              style={{
                backgroundColor: 'white',
                width: 0.8 * width,
                marginTop: 10,
                borderRadius: 5,
                paddingLeft: 10,
                borderWidth: 1,
                borderColor: emailError ? 'red' : 'white',
              }}
              placeholder="Enter email"
            />
            <Text style={{color: 'red'}}>
              {emailError ? '* Please enter email Id' : ''}
            </Text>
          </View>
          <View
            style={{
              marginTop: 0.02 * height,
            }}>
            <Text style={{color: 'black'}}>Password</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={{
                backgroundColor: 'white',
                width: 0.8 * width,
                borderWidth: 1,
                borderColor: passswordError ? 'red' : 'white',
                marginTop: 10,
                borderRadius: 5,
                paddingLeft: 10,
              }}
              placeholder="Enter Phone number"
            />
            <Text style={{color: 'red'}}>
              {passswordError ? '* Please enter the password' : ''}
            </Text>
            <Pressable
              android_ripple={{color: 'orange'}}
              onPress={() => {
                login();
              }}
              style={{
                marginTop: 0.05 * height,
                backgroundColor: 'lightblue',
                width: 0.5 * width,
                alignItems: 'center',
                justifyContent: 'center',
                height: 0.06 * height,
                borderRadius: 5,
                alignSelf: 'center',
              }}>
              {loginLoading ? (
                <ActivityIndicator color={'dodgerblue'} />
              ) : (
                <Text style={{color: 'black'}}>Login</Text>
              )}
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    wrongCredentials: state.LoginReducer.wrongCredentials,
  };
}
export default connect(mapStateToProps)(SignInScreen);

import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import Splash from '../../assets/splashBack.jpg';
import Logo from '../../assets/logo2.png';
import {NeuView} from 'react-native-neu-element';

const SplashScreen = (props) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const [button, setButton] = useState(false);
  return (
    <View>
      <ImageBackground
        source={Splash}
        style={{height: height, width: width, alignItems: 'center'}}>
        <Image
          source={Logo}
          style={{
            height: 0.1 * height,
            width: 0.5 * width,
            marginTop: 0.15 * height,
          }}
        />
        <NeuView
          color="#d6edfe"
          inset={true}
          style={{marginTop: 0.1 * height}}
          // color="#d6edfc"
          height={0.04 * height}
          width={0.7 * width}
          borderRadius={4}>
          <TextInput
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            maxLength={10}
            style={{
              width: '90%',
              alignSelf: 'flex-start',
              height: 0.07 * height,
              borderRadius: 2,
              marginLeft: 0.03 * width,
              color: 'green',
            }}
          />
        </NeuView>
        <NeuView
          color="#d6edfe"
          inset={true}
          style={{marginTop: 0.05 * height}}
          // color="#d6edfc"
          height={0.04 * height}
          width={0.7 * width}
          borderRadius={4}>
          <TextInput
            placeholder="Password"
            style={{
              width: '90%',
              alignSelf: 'flex-start',
              height: 0.07 * height,
              borderRadius: 2,
              marginLeft: 0.03 * width,
              color: 'green',
            }}
          />
        </NeuView>
        <Pressable
          style={{marginTop: 0.05 * height}}
          onPressIn={() => setButton(true)}
          onPressOut={() => setButton(false)}>
          <NeuView
            color="#d6edfe"
            inset={button}
            // color="#d6edfc"
            height={0.05 * height}
            width={0.4 * width}
            borderRadius={16}>
            <Text style={{color: button ? 'lightblue' : 'dodgerblue'}}>
              Login
            </Text>
          </NeuView>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  Pressable,
  Linking,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomerCard = (props) => {
  const [opened, setopened] = useState(false);

  const initials = props.data.name.trim().split(' ');
  let initial = '';
  for (let i = 0; i < initials.length; i++) {
    initial += initials[i][0].toUpperCase();
  }

  const dial = (contact) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${contact}`;
    } else {
      phoneNumber = `telprompt:${contact}`;
    }
    Linking.openURL(phoneNumber);
  };
  // console.log('dataaaaaaa', props.data);
  return (
    <>
      <Pressable
        onPress={() => setopened(!opened)}
        android_ripple={{color: 'lightgrey'}}
        style={{
          //   marginTop: 0.01 * height,
          //   borderWidth: 1,
          borderColor: 'lightgrey',
          width: 0.95 * width,
          height: 0.07 * height,
          justifyContent: 'center',
          //   borderRadius: opened ? 0 : 5,
          //   borderBottomWidth: opened ? 0 : 1,
          //   borderTopEndRadius: 5,
          //   borderTopStartRadius: 5,
          //   elevation: 3,
          borderBottomWidth: 1,
          borderBottomColor: opened ? 'white' : 'lightgrey',
          backgroundColor: 'white',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              marginLeft: 0.01 * width,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: props.data.profileColor
                  ? props.data.profileColor
                  : 'orange',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 0.01 * width,
                marginRight: 0.03 * width,
              }}>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>{initial}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>
                {props.data.name ? props.data.name + '  -  ' : ' '}
              </Text>
              <TouchableOpacity onPress={() => dial('8870347755')}>
                <Text style={{color: 'dodgerblue'}}>
                  {props.data.phno ? props.data.phno : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginRight: 0.05 * width, justifyContent: 'center'}}>
            {opened ? (
              <Icon name="chevron-up-outline" size={20} />
            ) : (
              <Icon name="chevron-down-outline" size={20} />
            )}
          </View>
        </View>
      </Pressable>
      {opened ? (
        <View
          style={{
            // borderWidth: 1,
            borderColor: 'lightgrey',
            width: 0.95 * width,
            // borderRadius: opened ? 0 : 5,
            // borderTopWidth: opened ? 0 : 1,
            // borderBottomEndRadius: 5,
            // borderBottomStartRadius: 5,
            // elevation: 3,
            borderBottomWidth: 1,
            borderBottomColor: !opened ? 'white' : 'lightgrey',
            backgroundColor: 'white',
            paddingHorizontal: 0.05 * width,
            paddingottom: 0.1 * height,
          }}>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Bills Open - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Amount Pending - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>
              Address - {props.data.address ? props.data.address : ''}
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 0.01 * height,
              marginVertical: 5,
              marginBottom: 15,
            }}>
            <Text>DOJ - {props.data.doj ? props.data.doj : ''}</Text>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default CustomerCard;

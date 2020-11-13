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

  const dial = (contact) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${contact}`;
    } else {
      phoneNumber = `telprompt:${contact}`;
    }
    Linking.openURL(phoneNumber);
  };

  return (
    <>
      <Pressable
        onPress={() => setopened(!opened)}
        android_ripple={{color: 'lightgrey'}}
        style={{
          //   marginTop: 0.01 * height,
          //   borderWidth: 1,
          borderColor: 'lightgrey',
          width: width,
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
          <View style={{marginLeft: 0.05 * width, flexDirection: 'row'}}>
            <Text>Customer name - </Text>
            <TouchableOpacity onPress={() => dial('8870347755')}>
              <Text style={{color: 'dodgerblue'}}>8870347755</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginRight: 0.05 * width}}>
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
            width: width,
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
            <Text>Address - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Age - </Text>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default CustomerCard;

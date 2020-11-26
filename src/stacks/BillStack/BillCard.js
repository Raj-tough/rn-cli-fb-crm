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
import {getRandomAllColor} from '../../components/GetRandomColor';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BillCard = (props) => {
  const [opened, setopened] = useState(false);

  const {data} = props;
  const dial = (contact) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${contact}`;
    } else {
      phoneNumber = `telprompt:${contact}`;
    }
    Linking.openURL(phoneNumber);
  };
  console.log(data);
  return (
    <>
      <Pressable
        onPress={() => setopened(!opened)}
        android_ripple={{color: 'lightgrey'}}
        style={{
          borderColor: 'lightgrey',
          width: width,
          height: 0.07 * height,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: opened ? 'white' : 'lightgrey',
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 0.07 * height,
            backgroundColor: 'transparent',
            borderStyle: 'solid',
            borderRightWidth: 20,
            borderTopWidth: 20,
            borderRightColor: 'transparent',
            borderTopColor: props.data.open ? 'lightgreen' : 'red',
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{marginHorizontal: 0.01 * width}}>
              {data.customerName}
            </Text>
            <Icon
              style={{marginHorizontal: 0.01 * width}}
              name="calendar-outline"
              color={'purple'}
              size={20}></Icon>
            <Text> 12-08-20</Text>
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
            <Text>Bill no. - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Customer name - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Product name - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Quantity - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Rent upto today - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>No. of days - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Delivery date - </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Advance - </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 0.01 * height,
              marginVertical: 5,
              marginBottom: 15,
            }}>
            <Text>Net Rent upto today - </Text>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default BillCard;

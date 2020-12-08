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
import ItemsUpToDate from './ItemsUpToDate';
import ShowBillDetailsModal from './ShowBillDetailsModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BillCard = (props) => {
  const [showBillDetailsModal, setShowBillDetailsModal] = useState(false);

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
        onPress={() => setShowBillDetailsModal(true)}
        android_ripple={{color: 'lightgrey'}}
        style={{
          borderColor: 'lightgrey',
          width: width,
          height: 0.07 * height,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: 'lightgrey',
          backgroundColor: 'white',
          flexDirection: 'row',
        }}>
        {showBillDetailsModal ? (
          <ShowBillDetailsModal
            cbForCloseModal={() => setShowBillDetailsModal(false)}
          />
        ) : null}
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
        </View>
      </Pressable>
    </>
  );
};

export default BillCard;

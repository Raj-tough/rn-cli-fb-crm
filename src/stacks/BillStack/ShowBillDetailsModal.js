import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ShowBillDetailsModal = (props) => {
  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      onRequestClose={() => {
        props.cbForCloseModal(false);
        // clearModalValues();
      }}>
      <Pressable
        onPress={() => {
          //   props.setShowAddItemsModal(false);
          // clearModalValues();
        }}
        style={{
          height: height,
          width: width,
          backgroundColor: 'rgba(0,0,0,0.3)',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 0.8 * height,
            width: 0.9 * width,
            backgroundColor: 'white',
            borderRadius: 15,
            alignItems: 'center',
          }}>
          <View
            style={{
              marginTop: 0.02 * height,
              marginBottom: 0.03 * height,
              flexDirection: 'row',
              width: 0.8 * width,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>
                Add item
              </Text>
            </View>
            <Pressable
              onPress={() => {
                props.cbForCloseModal(false);
              }}
              android_ripple={{color: 'grey', radius: 20}}
              style={{
                height: 40,
                width: 40,
                marginLeft: 0.53 * width,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name="close-outline" size={25} />
            </Pressable>
            <View style={{flex: 1, backgroundColor: 'red'}}></View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ShowBillDetailsModal;

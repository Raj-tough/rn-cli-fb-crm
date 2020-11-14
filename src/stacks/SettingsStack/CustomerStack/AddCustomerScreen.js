import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ToastAndroid,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Bars} from 'react-native-loader';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddCustomerScreen = () => {
  const [opened, setOpened] = useState(false);
  const [proofType, setProofType] = useState('Select proof type');
  const [cusName, setCusName] = useState('');
  const [cusPhno, setCusPhno] = useState('');
  const [cusAddr, setCusAddr] = useState('');
  const [cusProodId, setCusProofId] = useState('');
  const [cusNameError, setCusNameError] = useState(false);
  const [cusPhnoError, setCusPhnoError] = useState(false);
  const [phnNoDigitError, setPhNoDigitError] = useState(false);
  const [cusAddrError, setCusAddrError] = useState(false);
  const [cusProofTypeError, setCusProofTypeError] = useState(false);
  const [cusProodIdError, setCusProofIdError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = () => {
    if (
      cusName &&
      cusPhno &&
      !phnNoDigitError &&
      cusAddr &&
      cusProodId &&
      proofType
    ) {
      console.log('submitting form');
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        showToast('Customer added successfully!');
        clearForm();
      }, 3000);
    } else {
      showToast('Please fill required fields!');
    }
    cusName === '' ? setCusNameError(true) : setCusNameError(false);
    cusPhno === '' ? setCusPhnoError(true) : setCusPhnoError(false);
    cusAddr === '' ? setCusAddrError(true) : setCusAddrError(false);
    cusProodId === '' ? setCusProofIdError(true) : setCusProofIdError(false);
    cusPhno !== '' && cusPhno.length < 10
      ? setPhNoDigitError(true)
      : setPhNoDigitError(false);
    proofType === 'Select proof type'
      ? setCusProofTypeError(true)
      : setCusProofTypeError(false);
  };

  const clearForm = () => {
    setCusName('');
    setCusPhno('');
    setCusAddr('');
    setCusProofId('');
    setProofType('Select proof type');
  };

  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {loading ? (
        <Modal transparent={true}>
          <View
            style={{
              height: height,
              width: width,
              backgroundColor: 'rgba(0,0,0,0.3)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Bars size={10} color="#1e90ff" />
          </View>
        </Modal>
      ) : null}
      <ScrollView style={{width: '100%'}}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={60}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 0.02 * height,
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginLeft: 0.1 * width,
                fontSize: 12,
                marginBottom: 5,
              }}>
              Customer name{' '}
              <Text style={{color: 'red'}}>
                {cusNameError ? '  * required.' : ''}
              </Text>
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: cusNameError ? 'red' : 'lightgrey',
                width: 0.8 * width,
                borderRadius: 5,
                paddingLeft: 15,
              }}
              value={cusName}
              onChangeText={(val) => {
                setCusName(val);
                val === '' ? setCusNameError(true) : setCusNameError(false);
              }}
              placeholder="Enter Customer name"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 0.02 * height,
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginLeft: 0.1 * width,
                fontSize: 12,
                marginBottom: 5,
              }}>
              Phone number{' '}
              <Text style={{color: 'red'}}>
                {cusPhnoError ? '  * required.' : ''}{' '}
                <Text style={{color: 'red'}}>
                  {phnNoDigitError ? ' Phone no. must be 10 digits' : ''}
                </Text>
              </Text>
            </Text>
            <TextInput
              onChangeText={(val) => {
                setCusPhno(val);
                val === '' ? setCusPhnoError(true) : setCusPhnoError(false);
                val.length < 10
                  ? setPhNoDigitError(true)
                  : setPhNoDigitError(false);
              }}
              value={cusPhno}
              keyboardType="phone-pad"
              maxLength={10}
              style={{
                borderWidth: 1,
                borderColor: cusPhnoError ? 'red' : 'lightgrey',
                width: 0.8 * width,
                borderRadius: 5,
                paddingLeft: 15,
              }}
              placeholder="Enter product name"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 0.02 * height,
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginLeft: 0.1 * width,
                fontSize: 12,
                marginBottom: 5,
              }}>
              Address
              <Text style={{color: 'red'}}>
                {cusAddrError ? '  * required.' : ''}
              </Text>
            </Text>
            <TextInput
              onChangeText={(val) => {
                setCusAddr(val);
                val === '' ? setCusAddrError(true) : setCusAddrError(false);
              }}
              value={cusAddr}
              style={{
                borderWidth: 1,
                borderColor: cusAddrError ? 'red' : 'lightgrey',
                width: 0.8 * width,
                borderRadius: 5,
                paddingLeft: 15,
              }}
              placeholder="Enter here"
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 0.02 * height,
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontSize: 12,
                marginBottom: 5,
                marginLeft: 0.1 * width,
              }}>
              Select proof type
              <Text style={{color: 'red'}}>
                {cusProofTypeError ? '  * required.' : ''}
              </Text>
            </Text>
            <Pressable
              android_ripple={{color: 'lightgrey'}}
              onPress={() => setOpened(!opened)}
              style={{
                width: 0.8 * width,
                borderColor: cusProofTypeError ? 'red' : 'lightgrey',
                borderWidth: 1,
                height: 50,
                alignItems: 'center',
                borderRadius: opened ? 0 : 5,
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                flexDirection: 'row',
              }}>
              <View style={{marginLeft: '3%', flex: 1, paddingLeft: 8}}>
                <Text
                  style={{
                    color: proofType === 'Select proof type' ? 'gray' : 'black',
                  }}>
                  {proofType === 'Select proof type'
                    ? 'Select proof type'
                    : proofType}
                </Text>
              </View>
              <View style={{marginRight: '3%'}}>
                {opened ? (
                  <Icon name="chevron-up-outline" size={20} />
                ) : (
                  <Icon name="chevron-down-outline" size={20} />
                )}
              </View>
            </Pressable>
            {opened ? (
              <View
                style={{
                  width: 0.8 * width,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  alignItems: 'center',
                  borderRadius: opened ? 0 : 5,
                  borderBottomEndRadius: 5,
                  borderBottomStartRadius: 5,
                }}>
                <Pressable
                  onPress={() => {
                    setProofType('Select proof type');
                    setOpened(false);
                    setCusProofTypeError(true);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text style={{color: 'grey'}}>Select proof type</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setProofType('Voter ID');
                    setOpened(false);
                    setCusProofTypeError(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Voter Id</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setProofType('Aadhar');
                    setOpened(false);
                    setCusProofTypeError(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Aadhar</Text>
                </Pressable>
              </View>
            ) : null}
          </View>
          <View
            style={{
              alignItems: 'center',
              marginTop: 0.02 * height,
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginLeft: 0.1 * width,
                fontSize: 12,
                marginBottom: 5,
              }}>
              Proof Id number
              <Text style={{color: 'red'}}>
                {cusProodIdError ? '  * required.' : ''}
              </Text>
            </Text>
            <TextInput
              onChangeText={(val) => {
                setCusProofId(val);
                val === ''
                  ? setCusProofIdError(true)
                  : setCusProofIdError(false);
              }}
              value={cusProodId}
              style={{
                borderWidth: 1,
                borderColor: cusProodIdError ? 'red' : 'lightgrey',
                width: 0.8 * width,
                borderRadius: 5,
                paddingLeft: 15,
              }}
              placeholder="Enter proof Id number."
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              width: 0.5 * width,
              justifyContent: 'space-around',
              marginTop: 0.03 * height,
            }}>
            <Pressable
              onPress={() => submitHandler()}
              android_ripple={{color: 'lightgrey'}}
              style={{
                alignSelf: 'center',
                height: 40,
                width: 0.2 * width,
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'green',
              }}>
              <Text>Submit</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                clearForm();
              }}
              android_ripple={{color: 'lightgrey'}}
              style={{
                alignSelf: 'center',
                height: 40,
                width: 0.2 * width,
                backgroundColor: 'lightblue',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'green',
              }}>
              <Text>Reset</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default AddCustomerScreen;

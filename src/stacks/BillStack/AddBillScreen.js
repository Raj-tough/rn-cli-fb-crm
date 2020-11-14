import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from '../../components/DropdownPicker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddBillScreen = ({route}) => {
  console.log('route', route);
  const [category, setCategory] = useState('');
  const [opened, setOpened] = useState(false);
  const [proofType, setProofType] = useState('Select proof type');

  const cbForCreateNewCAtegory = () => {
    console.log('create new category invoked');
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <ScrollView style={{width: '100%'}}>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={150}>
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
              Customer name
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'lightgrey',
                width: 0.8 * width,
                borderRadius: 5,
                paddingLeft: 15,
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
              Phone number
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'lightgrey',
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
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'lightgrey',
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
            </Text>
            <Pressable
              android_ripple={{color: 'lightgrey'}}
              onPress={() => setOpened(!opened)}
              style={{
                width: 0.8 * width,
                borderColor: 'lightgrey',
                borderWidth: 1,
                height: 50,
                alignItems: 'center',
                borderRadius: opened ? 0 : 5,
                borderTopEndRadius: 5,
                borderTopStartRadius: 5,
                flexDirection: 'row',
              }}>
              <View style={{marginLeft: '3%', flex: 1, paddingLeft: 8}}>
                <Text style={{color: 'gray'}}>
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
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Select proof type</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setProofType('Voter ID');
                    setOpened(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Voter Id</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setProofType('Aadhar');
                    setOpened(false);
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
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'lightgrey',
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

export default AddBillScreen;

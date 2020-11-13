import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from '../../../components/DropdownPicker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import RNPickerSelect from 'react-native-picker-select';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddProductScreen = () => {
  const [category, setCategory] = useState('');
  const [opened, setOpened] = useState(false);
  const [shape, setShape] = useState('Select shape');

  const cbForCreateNewCAtegory = () => {
    console.log('create new category invoked');
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View>
        <DropDownPicker
          items={[
            {
              label: 'USA',
              value: 'usa',
            },
            {
              label: 'UK',
              value: 'uk',
            },
            {
              label: 'France',
              value: 'france',
            },
            {
              label: 'USA',
              value: 'usa',
            },
            {
              label: 'UK',
              value: 'uk',
            },
            {
              label: 'France',
              value: 'france',
            },
            {
              label: 'USA',
              value: 'usa',
            },
            {
              label: 'UK',
              value: 'uk',
            },
            {
              label: 'France',
              value: 'france',
            },
          ]}
          cbForCreateNewCategory={cbForCreateNewCAtegory}
          placeholder="Select a category"
          searchable={true}
          searchablePlaceholder="Search category"
          searchablePlaceholderTextColor="gray"
          seachableStyle={{}}
          searchableError={() => (
            <View style={{alignItems: 'center'}}>
              <View>
                <Text>Not Found !</Text>
              </View>
            </View>
          )}
          containerStyle={{
            height: 50,
            width: 0.9 * width,
            alignSelf: 'center',
            marginTop: 0.02 * height,
          }}
          dropDownMaxHeight={0.4 * height}
          style={{backgroundColor: '#fafafa', elevation: 5}}
          itemStyle={{
            justifyContent: 'flex-start',
            paddingLeft: 0.02 * width,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgrey',
          }}
          dropDownStyle={{
            backgroundColor: '#fafafa',
            elevation: 5,
          }}
          onChangeItem={(item) => setCategory(item)}
        />
      </View>
      <ScrollView style={{width: '100%'}}>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 0.03 * height,
          }}>
          <Text
            style={{
              alignSelf: 'flex-start',
              marginLeft: 0.1 * width,
              fontSize: 12,
              marginBottom: 5,
            }}>
            Product name
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
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: 0.8 * width,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 12,
                  marginBottom: 5,
                }}>
                Rent / day
              </Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  width: 0.38 * width,
                  borderRadius: 5,
                  paddingLeft: 15,
                }}
                placeholder="Rent per day"
              />
            </View>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 12,
                  marginBottom: 5,
                }}>
                Purpose
              </Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: 'lightgrey',
                  width: 0.38 * width,
                  borderRadius: 5,
                  paddingLeft: 15,
                }}
                placeholder="prurpose of rent"
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignSelf: 'center',
            marginTop: 0.03 * height,
            flexDirection: 'row',
            width: 0.8 * width,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontSize: 12,
                marginBottom: 5,
              }}>
              Select shape
            </Text>
            <Pressable
              android_ripple={{color: 'lightgrey'}}
              onPress={() => setOpened(!opened)}
              style={{
                width: 0.6 * width,
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
                  {shape === 'Select shape' ? 'Select shape' : shape}
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
                  width: 0.6 * width,
                  borderColor: 'lightgrey',
                  borderWidth: 1,
                  alignItems: 'center',
                  borderRadius: opened ? 0 : 5,
                  borderBottomEndRadius: 5,
                  borderBottomStartRadius: 5,
                }}>
                <Pressable
                  onPress={() => {
                    setShape('Select shape');
                    setOpened(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Select shape</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setShape('Rectangular');
                    setOpened(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Rectangular</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setShape('Square');
                    setOpened(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Square</Text>
                </Pressable>
              </View>
            ) : null}
          </View>
          <View>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontSize: 12,
                marginBottom: 5,
              }}>
              units
            </Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'lightgrey',
                width: 0.15 * width,
                borderRadius: 5,
                paddingLeft: 15,
              }}
              placeholder="Units"
            />
          </View>
        </View>
        <View style={{alignSelf: 'center', marginTop: 0.03 * height}}>
          {shape === 'Circular' ? (
            <View>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 12,
                  marginBottom: 5,
                }}>
                Diameter
              </Text>
              <TextInput
                placeholder="Diameter"
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: 'lightgrey',
                  paddingHorizontal: 15,
                }}
              />
            </View>
          ) : shape === 'Rectangular' ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 0.8 * width,
              }}>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 12,
                    marginBottom: 5,
                  }}>
                  Length
                </Text>
                <TextInput
                  placeholder="Length"
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: 'lightgrey',
                    paddingHorizontal: 15,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 12,
                    marginBottom: 5,
                  }}>
                  Breadth
                </Text>
                <TextInput
                  placeholder="Breadth"
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: 'lightgrey',
                    paddingHorizontal: 15,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 12,
                    marginBottom: 5,
                  }}>
                  Height
                </Text>
                <TextInput
                  placeholder="Height"
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: 'lightgrey',
                    paddingHorizontal: 15,
                  }}
                />
              </View>
            </View>
          ) : null}
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
      </ScrollView>
    </View>
  );
};

export default AddProductScreen;

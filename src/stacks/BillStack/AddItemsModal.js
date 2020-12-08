import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  TextInput,
  Dimensions,
  ToastAndroid,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDropDownPicker from '../../components/CustomDropdownPicker';
import DatePicker from 'react-native-date-ranges-picker';
import CheckBox from '@react-native-community/checkbox';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddItemsModal = (props) => {
  const [selectProduct, setSelectProduct] = useState('');
  const [selectProductError, setSelectProductError] = useState('');
  const [rent, setRent] = useState(0);
  const [rentError, setRentError] = useState(false);

  const [qty, setQty] = useState(0);
  const [qtyError, setQtyError] = useState(false);

  const [findingAvailability, setFindingAvailability] = useState(false);
  const [availableQty, setAvailableQty] = useState(10);

  const [startDate, setStartDate] = useState('');
  const [startDateError, setStartDateError] = useState(false);

  const [advance, setAdvance] = useState('');
  const [advanceError, setAdvanceError] = useState(false);
  const [expectedAdvance, setExpectedAdvance] = useState(0);

  const [toggle30Days, setToggle30Days] = useState(false);

  const [addItemLoader, setAdditemLoader] = useState(false);

  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  const onChangeProductItem = (item) => {
    setSelectProduct(item.label);
    setSelectProductError(false);
    setFindingAvailability(true);
    setTimeout(() => {
      setFindingAvailability(false);
    }, 3000);
  };

  const handleAddItem = () => {
    selectProduct ? setSelectProductError(false) : setSelectProductError(true);
    qty ? setQtyError(false) : setQtyError(true);
    rent ? setRentError(false) : setRentError(true);
    startDate ? setStartDateError(false) : setStartDateError(true);
    advance >= 0 ? setAdvanceError(false) : setAdvanceError(true);
    if (
      advanceError ||
      selectProductError ||
      rentError ||
      startDateError ||
      qtyError
    ) {
      showToast('Please Fill the highlighted fileds !');
    }

    if (
      !advanceError &&
      !selectProductError &&
      !rentError &&
      !startDateError &&
      !qtyError
    ) {
      const item = {
        product: selectProduct,
        advance: advance,
        rent: rent,
        startDate: startDate,
        qty: qty,
      };
      console.log(item);
      props.setShowAddItemsModal(false);
      props.addItem(item);
    }
  };

  useEffect(() => {
    if (parseInt(qty) > availableQty) {
      setQtyError(true);
      showToast('Entered Quantity Exceeds the available qty. !!!');
    } else {
      setQtyError(false);
    }
  }, [qty]);

  useEffect(() => {
    if (toggle30Days) {
      setExpectedAdvance(parseInt(rent) * parseInt(qty) * 30);
    } else {
      setExpectedAdvance(parseInt(rent) * parseInt(qty) * 7);
    }
  }, [qty, rent, toggle30Days]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        props.setShowAddItemsModal(false);
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
                props.setShowAddItemsModal(false);
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
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                alignItems: 'center',
                marginTop: 0.02 * height,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  // marginLeft: 0.05 * width,
                  fontSize: 12,
                  marginBottom: 5,
                }}>
                Product name
              </Text>
              <CustomDropDownPicker
                items={props.products}
                mode="product"
                navigateTo={() => {}}
                placeholder="Select a Product"
                searchable={true}
                searchablePlaceholder="Search product"
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
                  width: 0.8 * width,
                  alignSelf: 'center',
                  // marginTop: 0.02 * height,
                }}
                dropDownMaxHeight={0.4 * height}
                style={{
                  backgroundColor: selectProductError ? 'red' : '#fafafa',
                  elevation: 5,
                }}
                empty={props.products === '' ? true : false}
                itemStyle={{
                  justifyContent: 'flex-start',
                  paddingLeft: 0.02 * width,
                  borderTopWidth: 1,
                  borderTopColor: 'lightgrey',
                }}
                dropDownStyle={{
                  backgroundColor: '#fafafa',
                  elevation: 5,
                }}
                onChangeItem={(item) => {
                  // if (selectCustomer === '') {
                  //     setSelectCustomerError(true);
                  //   showToast('Please Select Customer name. !!');
                  // }
                  onChangeProductItem(item);
                }}
                onChangeItemObject={(item) => {
                  setSelectProduct(item);
                  console.log(item);
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: 0.02 * height,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  // marginLeft: 0.05 * width,
                  fontSize: 12,
                  marginBottom: 5,
                }}>
                Enter Quantity
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: qtyError ? 'red' : 'lightgrey',
                  width: 0.8 * width,
                  borderRadius: 5,
                  paddingLeft: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TextInput
                  value={qty}
                  onChangeText={(val) => {
                    setQty(val);
                    if (selectProduct === '') {
                      setSelectProductError(true);
                      showToast('Please Enter the product first !!');
                      setQty('');
                    }
                    if (val === '') {
                      setQtyError(true);
                    } else {
                      setQtyError(false);
                    }
                  }}
                  keyboardType="number-pad"
                  style={{width: 0.3 * width}}
                  placeholder="Enter Qty."
                />
                <View>
                  {selectProduct ? (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>
                        available{'  '} -{'  '}
                      </Text>
                      {findingAvailability ? (
                        <ActivityIndicator
                          style={{marginRight: 0.04 * width}}
                          color="dodgerblue"
                        />
                      ) : (
                        <Text style={{marginRight: 0.05 * width}}>
                          {availableQty}
                        </Text>
                      )}
                    </View>
                  ) : null}
                </View>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                marginTop: 0.02 * height,
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  // marginLeft: 0.1 * width,
                  fontSize: 12,
                  marginBottom: 5,
                }}>
                Rent / day
              </Text>
              <TextInput
                value={rent}
                onChangeText={(val) => {
                  setRent(val);
                  if (val === '') {
                    setRentError(true);
                  } else {
                    setRentError(false);
                  }
                }}
                keyboardType={'decimal-pad'}
                style={{
                  borderWidth: 1,
                  borderColor: rentError ? 'red' : 'lightgrey',
                  width: 0.8 * width,
                  borderRadius: 5,
                  paddingLeft: 15,
                }}
                placeholder="Enter Rent / day"
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 0.8 * width,
                alignSelf: 'center',
              }}>
              <View
                style={{
                  marginTop: 0.02 * height,
                  alignSelf: 'flex-start',
                  // marginLeft: 0.05 * width,
                  width: 0.35 * width,
                }}>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 12,
                    marginBottom: 5,
                  }}>
                  Start date
                </Text>
                <DatePicker
                  style={{
                    height: 0.05 * height,
                    paddingHorizontal: 15,
                    borderRadius: 5,
                    borderWidth: 0,
                    borderWidth: 1,
                    borderColor: startDateError ? 'red' : 'lightgrey',
                  }}
                  onConfirm={(val) => {
                    setStartDate(val);
                    setStartDateError(false);
                  }}
                  markText="Select Date"
                  customButton={(onConfirm) => {
                    return (
                      <Pressable
                        android_ripple={{color: 'lightgrey'}}
                        onPress={onConfirm}
                        style={{
                          backgroundColor: 'lightblue',
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: 'green',
                          height: 40,
                          width: 150,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text>Done</Text>
                      </Pressable>
                    );
                  }}
                  selectedTextColor="black"
                  returnFormat="DD/MM/YYYY"
                  outFormat="DD/MM/YYYY"
                  customStyles={{
                    placeholderText: {fontSize: 14, color: 'lightgrey'}, // placeHolder style
                    headerStyle: {backgroundColor: 'darkturquoise'}, // title container style
                    headerMarkTitle: {}, // title mark style
                    headerDateTitle: {}, // title Date style
                    contentInput: {}, //content text container style
                    contentText: {color: 'black', fontSize: 14}, //after selected text Style
                  }} // optional
                  centerAlign // optional text will align center or not
                  allowFontScaling={false} // optional
                  placeholder={'Start date'}
                  mode={'single'}
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
                    // marginLeft: 0.1 * width,
                    fontSize: 12,
                    marginBottom: 5,
                  }}>
                  Advance
                </Text>
                <TextInput
                  value={advance}
                  onChangeText={setAdvance}
                  keyboardType={'number-pad'}
                  style={{
                    borderWidth: 1,
                    borderColor: startDateError ? 'red' : 'lightgrey',
                    width: 0.35 * width,
                    height: 0.0475 * height,
                    borderRadius: 5,
                    paddingLeft: 15,
                  }}
                  placeholder="Advance"
                />
              </View>
            </View>
            <Pressable
              onPress={() => {
                handleAddItem();
              }}
              android_ripple={{color: 'lightgrey'}}
              style={{
                width: 0.5 * width,
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 5,
                paddingHorizontal: 0.05 * width,
                marginTop: 0.03 * height,
                backgroundColor: 'dodgerblue',
                height: 0.06 * height,
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              {!addItemLoader ? (
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Add Item
                </Text>
              ) : (
                <ActivityIndicator color="white" />
              )}
            </Pressable>
            <View
              style={{
                marginTop: 0.027 * height,
                backgroundColor: 'rgba(24, 204, 14, 0.2)',
                padding: 15,
                borderRadius: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <Text style={{fontWeight: 'bold'}}>Hint</Text>
                <Icon name={'bulb-outline'} color="darkorange" size={17} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>Rent / day - </Text>
                <Text style={{fontWeight: 'bold'}}>{rent * qty}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>Advance Expected :</Text>
                <Text style={{fontWeight: 'bold'}}>
                  {expectedAdvance} - for {toggle30Days ? '30' : '7'} day(s)
                </Text>
                <CheckBox
                  disabled={false}
                  value={toggle30Days}
                  onValueChange={(newValue) => setToggle30Days(newValue)}
                />
                <Text>30 days</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
};

export default AddItemsModal;

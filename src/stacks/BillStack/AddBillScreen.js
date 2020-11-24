import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import CustomDropDownPicker from '../../components/CustomDropdownPicker';
import AddItemsModal from './AddItemsModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddBillScreen = ({navigation, productList, customerData}) => {
  // console.log('route', route);
  const [category, setCategory] = useState('');
  const [opened, setOpened] = useState(false);
  const [proofType, setProofType] = useState('Select proof type');
  const [customers, setCustomers] = useState([]);
  const [selectCustomer, setSelectCustomer] = useState('');
  const [selectCustomerError, setSelectCustomerError] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectProduct, setSelectProduct] = useState('');
  const [selectProductError, setSelectProductError] = useState('');

  const [showAddItemsModal, setShowAddItemsModal] = useState(false);

  const [items, setItems] = useState([]);

  const cbForCreateNewCAtegory = () => {
    console.log('create new category invoked');
  };

  useEffect(() => {
    // console.log('customer data in bill scren', customerData);
    // console.log('products in billscreen', productList);
    let tempCustomers = [];
    Object.keys(customerData[0]).map((key) => {
      tempCustomers.push({
        label: customerData[0][key]['name'],
        value: customerData[0][key]['name'],
        cusId: key,
      });
    });
    setCustomers(tempCustomers);

    let tempProducts = [];
    Object.keys(productList).map((key) => {
      tempProducts.push({
        label: productList[key]['productName'],
        value: productList[key]['productName'],
        productId: key,
      });
    });
    setProducts(tempProducts);
    console.log('products in bill screen', tempProducts);
  }, [productList, customerData]);

  const navigateTo = (mode) => {
    navigation.navigate('Settings');
  };

  const onChangeProductItem = (item) => {
    setSelectProduct(item.label);
    setSelectProductError(false);
    setFindingAvailability(true);
    setTimeout(() => {
      setFindingAvailability(false);
    }, 3000);
  };

  const addItem = (billItem) => {
    let tempData = [...items];

    tempData.push(billItem);
    console.log('items', tempData);
    setItems(tempData);
  };

  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {showAddItemsModal ? (
        <AddItemsModal
          setShowAddItemsModal={setShowAddItemsModal}
          products={products}
          navigation={navigation}
          addItem={addItem}
        />
      ) : null}
      <View
        style={{
          height: 0.7 * height,
          // backgroundColor: 'red',
          alignItems: 'center',
          marginTop: 0.04 * height,
        }}>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginLeft: 0.05 * width,
            fontSize: 12,
            marginBottom: 5,
          }}>
          Customer name
        </Text>
        <CustomDropDownPicker
          items={customers}
          mode="customer"
          navigateTo={navigateTo}
          placeholder="Select a Customer"
          searchable={true}
          searchablePlaceholder="Search customer"
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
            // marginTop: 0.02 * height,
          }}
          dropDownMaxHeight={0.4 * height}
          style={{
            backgroundColor: selectCustomerError ? 'red' : '#fafafa',
            elevation: 5,
          }}
          empty={customers === '' ? true : false}
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
            setSelectCustomer(item.label);
            setSelectCustomerError(false);
          }}
          onChangeItemObject={(item) => {
            console.log(item);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setShowAddItemsModal(true);
          }}
          style={{alignSelf: 'center', marginTop: 0.017 * height}}>
          <Text style={{color: 'dodgerblue'}}>Add items</Text>
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} style={{padding: 15}}>
          {items.map((item) => (
            <View style={{height: 0.1 * height}}>{item.productName}</View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          marginBottom: 0.02 * height,
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
          <Text></Text>
        </Pressable>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    productList: state.ProductReducer.productList,
    customerData: state.CustomerReducer.customerData,
  };
}
export default connect(mapStateToProps)(AddBillScreen);

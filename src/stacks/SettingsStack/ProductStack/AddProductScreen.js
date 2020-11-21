import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
  ToastAndroid,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from '../../../components/DropdownPicker';
import {Bars} from 'react-native-loader';
import {addProduct, addCategory} from '../../../services/ProductService';
import {useDispatch, connect} from 'react-redux';
import {getRandomAllColor} from '../../../components/GetRandomColor';
import {getDate} from '../../../components/getDate';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddProductScreen = (props) => {
  const [category, setCategory] = useState('');
  const [opened, setOpened] = useState(false);
  const [shape, setShape] = useState('Select shape');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productRent, setProductRent] = useState('');
  const [productPurpose, setProductPurpose] = useState('');
  const [productLength, setProductLength] = useState('');
  const [productBreadth, setProductBreadth] = useState('');
  const [productDia, setProductDia] = useState('');
  const [productHeight, setProductHeight] = useState('');
  const [productUnits, setProductUnits] = useState('');
  const [productNameError, setProductNameError] = useState(false);
  const [productPriceError, setProductPriceError] = useState(false);
  const [productRentError, setProductRentError] = useState(false);
  const [productPurposeError, setProductPurposeError] = useState(false);
  const [productLengthError, setProductLengthError] = useState(false);
  const [productBreadthError, setProductBreadthError] = useState(false);
  const [productDiaError, setProductDiaError] = useState(false);
  const [productHeightError, setProductHeightError] = useState(false);
  const [productShapeError, setProductShapeError] = useState(false);
  const [productUnitsError, setProductUnitsError] = useState(false);
  const [categoryError, setCategoryError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [newCategoryError, setNewCategoryError] = useState(false);
  const [addingCategoryLoader, setAddingCategoryLoader] = useState(false);

  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const {user, categoriesList} = props;

  const cbForCreateNewCAtegory = () => {
    console.log('create new category invoked');
    setShowAddCategoryModal(true);
  };

  const submitHandler = () => {
    category === '' ? setCategoryError(true) : setCategoryError(false);
    productName === '' ? setProductNameError(true) : setProductNameError(false);
    productRent === '' ? setProductRentError(true) : setProductRentError(false);
    productPrice === ''
      ? setProductPriceError(true)
      : setProductPriceError(false);
    shape === 'Select shape'
      ? setProductShapeError(true)
      : setProductShapeError(false);
    if (shape === 'Circular') {
      productDia === '' ? setProductDiaError(true) : setProductDiaError(false);
    } else if (shape === 'Rectangular') {
      productLength === ''
        ? setProductLengthError(true)
        : setProductLengthError(false);
      productBreadth === ''
        ? setProductBreadthError(true)
        : setProductBreadthError(false);
      productHeight === ''
        ? setProductHeightError(true)
        : setProductHeightError(false);
    }

    if (productName && productRent && shape && category) {
      const product = {
        productName: productName,
        shape: shape,
        rectangulardimension: {
          height: productHeight,
          length: productLength,
          breadth: productBreadth,
        },
        circularDimension: {
          dia: productDia,
        },
        productPrice: productPrice,
        purposeOfWork: productPurpose,
        rent: productRent,
        productInitialColor: getRandomAllColor(),
        units: productUnits,
        quantityHistory: {
          dateOfCreate: getDate(),
        },
      };
      if (
        (shape === 'Circular' && productDia) ||
        (shape === 'Rectangular' &&
          productLength &&
          productBreadth &&
          productHeight)
      ) {
        setLoading(true);
        addProduct(product, user.uid)
          .then((val) => {
            setLoading(false);
            showToast('Product added successfully!');
            clearForm();
            props.navigation.navigate('ProductScreen');
          })
          .catch((err) => {
            showToast('Something went wrong! please try again later.');
            setLoading(false);
          });
      }
    } else {
      showToast('Please Enter required fields!');
    }
  };

  const clearForm = () => {
    setCategory('');
    setProductName('');
    setProductRent('');
    setShape('Select shape');
    setProductPrice('');
    setProductDia('');
    setProductLength('');
    setProductHeight('');
    setProductBreadth('');
    setProductPurpose('');
    setProductUnits('');
  };

  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  const handleAddNewCategory = () => {
    if (newCategory) {
      setAddingCategoryLoader(true);
      setTimeout(() => {
        clearModalValues();
        if (data.length === 0) {
          addCategory(user.uid, [newCategory]);
        } else {
          data.push(newCategory);
          addCategory(user.uid, data);
        }
        showToast('Category Succefully Added !');
      }, 3000);
    } else {
      setNewCategoryError(true);
      showToast('Please Enter required fields!');
    }
  };

  const clearModalValues = () => {
    setNewCategory('');
    setAddingCategoryLoader(false);
    setShowAddCategoryModal(false);
    setNewCategoryError(false);
  };
  useEffect(() => {
    setData(categoriesList);
    console.log(categoriesList);
  }, [categoriesList]);

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
      {showAddCategoryModal ? (
        <Modal
          transparent={true}
          onRequestClose={() => {
            setShowAddCategoryModal(false);
            clearModalValues();
          }}>
          <Pressable
            onPress={() => {
              setShowAddCategoryModal(false);
              clearModalValues();
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
                height: 0.35 * height,
                width: 0.9 * width,
                backgroundColor: 'white',
                borderRadius: 15,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginTop: 0.05 * height,
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginBottom: 0.03 * height,
                }}>
                Add Category
              </Text>
              <TextInput
                onChangeText={(val) => {
                  setNewCategory(val);
                  val === ''
                    ? setNewCategoryError(true)
                    : setNewCategoryError(false);
                }}
                value={newCategory}
                placeholder="Enter Category name"
                style={{
                  // backgroundColor: 'orange',
                  borderWidth: 1,
                  borderColor: newCategoryError ? 'red' : 'lightgrey',
                  borderRadius: 5,
                  width: 0.6 * width,
                  paddingLeft: 20,
                }}
              />
              <Text style={{color: 'red', marginTop: 0.01 * height}}>
                {newCategoryError ? '* Enter Category name' : ''}
              </Text>
              <Pressable
                onPress={() => {
                  handleAddNewCategory();
                }}
                android_ripple={{color: 'lightgrey'}}
                style={{
                  alignItems: 'center',
                  borderRadius: 5,
                  paddingHorizontal: 0.05 * width,
                  marginTop: 0.01 * height,
                  backgroundColor: 'dodgerblue',
                  height: 0.06 * height,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                {!addingCategoryLoader ? (
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    Add
                  </Text>
                ) : (
                  <ActivityIndicator color="white" />
                )}
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      ) : null}
      <View>
        <DropDownPicker
          items={data}
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
          style={{
            backgroundColor: categoryError ? 'red' : '#fafafa',
            elevation: 5,
          }}
          empty={category === '' ? true : false}
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
            setCategory(item);
            setCategoryError(false);
          }}
        />
      </View>
      <ScrollView style={{width: '100%'}}>
        <View
          style={{
            marginVertical: 0.03 * height,
            flexDirection: 'row',
            width: 0.8 * width,
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: 0.45 * width}}>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontSize: 12,
                marginBottom: 5,
              }}>
              Product name
              <Text style={{color: 'red'}}>
                {productNameError ? '  * Required.' : ''}
              </Text>
            </Text>
            <TextInput
              onChangeText={(val) => {
                setProductName(val);
                val === ''
                  ? setProductNameError(true)
                  : setProductNameError(false);
              }}
              value={productName}
              style={{
                borderWidth: 1,
                borderColor: productNameError ? 'red' : 'lightgrey',
                width: 0.45 * width,
                borderRadius: 5,
                paddingLeft: 15,
              }}
              placeholder="Enter product name"
            />
          </View>
          <View style={{width: 0.3 * width}}>
            <Text
              style={{
                alignSelf: 'flex-start',
                fontSize: 12,
                marginBottom: 5,
              }}>
              Product price
              <Text style={{color: 'red'}}>
                {productPriceError ? '  * Req.' : ''}
              </Text>
            </Text>
            <TextInput
              onChangeText={(val) => {
                setProductPrice(val);
                val === ''
                  ? setProductPriceError(true)
                  : setProductPriceError(false);
              }}
              keyboardType="number-pad"
              value={productPrice}
              style={{
                borderWidth: 1,
                borderColor: productPriceError ? 'red' : 'lightgrey',
                width: 0.3 * width,
                borderRadius: 5,
                paddingLeft: 15,
              }}
              placeholder="Enter price"
            />
          </View>
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
                Rent / day{' '}
                <Text style={{color: 'red'}}>
                  {productRentError ? '  * Required' : ''}
                </Text>
              </Text>
              <TextInput
                onChangeText={(val) => {
                  setProductRent(val);
                  val === ''
                    ? setProductRentError(true)
                    : setProductRentError(false);
                }}
                value={productRent}
                keyboardType="number-pad"
                style={{
                  borderWidth: 1,
                  borderColor: productRentError ? 'red' : 'lightgrey',
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
                Purpose{' '}
                <Text style={{color: 'red'}}>
                  {productPurposeError ? '  * Required' : ''}
                </Text>
              </Text>
              <TextInput
                onChangeText={(val) => {
                  setProductPurpose(val);
                  // val === ''
                  //   ? setProductPurposeError(true)
                  //   : setProductPurposeError(false);
                }}
                value={productPurpose}
                style={{
                  borderWidth: 1,
                  borderColor: productPurposeError ? 'red' : 'lightgrey',
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
              <Text style={{color: 'red'}}>
                {productShapeError ? '  * Required' : ''}
              </Text>
            </Text>
            <Pressable
              android_ripple={{color: 'lightgrey'}}
              onPress={() => setOpened(!opened)}
              style={{
                width: 0.6 * width,
                borderColor: productShapeError ? 'red' : 'lightgrey',
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
                  style={{color: shape === 'Select shape' ? 'gray' : 'black'}}>
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
                    setProductShapeError(true);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Select shape</Text>
                </Pressable>
                <Pressable
                  onPress={() => {
                    setShape('Rectangular');
                    setOpened(false);
                    setProductShapeError(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Rectangular</Text>
                </Pressable>
                {/* <Pressable
                  onPress={() => {
                    setShape('Square');
                    setOpened(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Square</Text>
                </Pressable> */}
                <Pressable
                  onPress={() => {
                    setShape('Circular');
                    setOpened(false);
                    setProductShapeError(false);
                  }}
                  style={{padding: 10, width: '100%'}}
                  android_ripple={{color: 'lightgrey'}}>
                  <Text>Circular</Text>
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
              Units
            </Text>
            <TextInput
              value={productUnits}
              onChangeText={(val) => {
                setProductUnits(val);
              }}
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
                <Text style={{color: 'red'}}>
                  {productDiaError ? '  * Required' : ''}
                </Text>
              </Text>
              <TextInput
                onChangeText={(val) => {
                  setProductDia(val);
                  val === ''
                    ? setProductDiaError(true)
                    : setProductDiaError(false);
                }}
                value={productDia}
                keyboardType="number-pad"
                placeholder="Diameter"
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: productDiaError ? 'red' : 'lightgrey',
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
                  <Text style={{color: 'red'}}>
                    {productLengthError ? '  * Required' : ''}
                  </Text>
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  onChangeText={(val) => {
                    setProductLength(val);
                    val === ''
                      ? setProductLengthError(true)
                      : setProductLengthError(false);
                  }}
                  value={productLength}
                  placeholder="Length"
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: productLengthError ? 'red' : 'lightgrey',
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
                  <Text style={{color: 'red'}}>
                    {productBreadthError ? '  * Required' : ''}
                  </Text>
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  onChangeText={(val) => {
                    setProductBreadth(val);
                    val === ''
                      ? setProductBreadthError(true)
                      : setProductBreadthError(false);
                  }}
                  value={productBreadth}
                  placeholder="Breadth"
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: productBreadthError ? 'red' : 'lightgrey',
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
                  <Text style={{color: 'red'}}>
                    {productHeightError ? '  * Required' : ''}
                  </Text>
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  onChangeText={(val) => {
                    setProductHeight(val);
                    val === ''
                      ? setProductHeightError(true)
                      : setProductHeightError(false);
                  }}
                  value={productHeight}
                  placeholder="Height"
                  style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: productHeightError ? 'red' : 'lightgrey',
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
            onPress={() => {
              submitHandler();
            }}
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

function mapStateToProps(state) {
  return {
    user: state.LoginReducer.user,
    categoriesList: state.ProductReducer.categoriesList,
  };
}

export default connect(mapStateToProps)(AddProductScreen);

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import ProductCard from './ProductCard';
import {
  getAndUpdateProductListDataToState,
  getAndUpdateCategoryListDataToState,
} from '../../../services/ProductService';
import {connect, useDispatch} from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductScreen = (props) => {
  const [product, setProduct] = useState([]);
  const [rootData, setRootData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const {productList, user} = props;

  const renderItem = ({item}) => <ProductCard data={item} />;

  const cbForCreateNewCAtegory = () => {
    console.log('create new category invoked');
  };

  // useEffect(() => {
  //   dispatch(getAndUpdateProductListDataToState(user.uid));
  //   dispatch(getAndUpdateCategoryListDataToState(user.uid));
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    if (productList) {
      let tempData = [];
      if (productList) {
        Object.keys(productList).map((key) => {
          tempData.push({...productList[key], productId: key});
        });
        setProduct(tempData);
        setRootData(tempData);
        setLoading(false);
        // console.log('temp', tempData);
      }
    } else {
      setLoading(false);
    }
  }, [productList]);

  const searchResults = (key) => {
    let searchedData = rootData.filter(
      (data) =>
        data.productName.slice(0, key.length).toLowerCase() ===
        key.toLowerCase(),
    );
    setProduct(searchedData);
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: 0.8 * width,
          height: 0.06 * height,
          borderRadius: 3,
          borderWidth: 1,
          borderColor: 'grey',
          backgroundColor: 'white',
          elevation: 3,
          marginTop: 0.01 * height,
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <Icon
          style={{marginLeft: 0.05 * width}}
          name="search-outline"
          color={'black'}
          size={20}
        />
        <TextInput
          placeholder="Search products name"
          onChangeText={searchResults}
          style={{
            width: 0.65 * width,
            marginLeft: 0.03 * width,
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 0.01 * height}}>
        {loading ? (
          <View style={{width: width}}>
            <SkeletonPlaceholder>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
              </View>
            </SkeletonPlaceholder>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={product}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    productList: state.ProductReducer.productList,
    user: state.LoginReducer.user,
  };
}
export default connect(mapStateToProps)(ProductScreen);

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
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from '../../../components/DropdownPicker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import ProductCard from './ProductCard';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductScreen = ({navigation}) => {
  const [product, setProduct] = useState('USA');
  const [loading, setLoading] = useState(true);

  const data = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
  ];
  const renderItem = ({item}) => <ProductCard />;
  const cbForCreateNewCAtegory = () => {
    console.log('create new category invoked');
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </View>
  );
};

export default ProductScreen;

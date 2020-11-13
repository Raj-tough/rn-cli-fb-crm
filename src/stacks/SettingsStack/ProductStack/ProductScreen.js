import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import DropDownPicker from 'react-native-dropdown-picker';
import DropDownPicker from '../../../components/DropdownPicker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {NavigationContainer} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductScreen = ({navigation}) => {
  const [product, setProduct] = useState('USA');

  const cbForCreateNewCAtegory = () => {
    console.log('create new category invoked');
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
          style={{
            width: 0.65 * width,
            marginLeft: 0.03 * width,
          }}
        />
      </View>
      <Pressable
        onPress={() => navigation.navigate('AddProductScreen')}
        android_ripple={{color: 'skyblue', borderless: true, radius: 30}}
        style={{
          position: 'absolute',
          bottom: 25,
          right: 25,
          height: 60,
          width: 60,
          backgroundColor: 'lightblue',
          borderRadius: 35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 16}}>add</Text>
      </Pressable>
    </View>
  );
};

export default ProductScreen;

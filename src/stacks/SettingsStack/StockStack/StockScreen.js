import React from 'react';
import {View, Text, Dimensions, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const StockScreen = () => {
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
          placeholder="Search Stocks"
          style={{
            width: 0.65 * width,
            marginLeft: 0.03 * width,
          }}
        />
      </View>
    </View>
  );
};

export default StockScreen;

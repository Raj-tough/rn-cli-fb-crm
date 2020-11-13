import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomerCard from './CustomerCard';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomerScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const renderItem = ({item}) => <CustomerCard />;
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
          placeholder="Search customer name"
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

export default CustomerScreen;

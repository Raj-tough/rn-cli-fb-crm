import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
  TextInput,
  ScrollView,
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
  const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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

      <ScrollView style={{width: width}} showsVerticalScrollIndicator={false}>
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
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </ScrollView>

      <Pressable
        onPress={() => navigation.navigate('AddCustomerScreen')}
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

export default CustomerScreen;

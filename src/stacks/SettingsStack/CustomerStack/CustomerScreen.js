import React, {useState} from 'react';
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
import SkeletonContent from 'react-native-skeleton-content';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomerScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const renderItem = ({item}) => <CustomerCard />;
  const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
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
            <SkeletonContent
              containerStyle={{flex: 1, width: 300}}
              isLoading={true}
              layout={[
                {key: 'someId', width: 220, height: 20, marginBottom: 6},
                {key: 'someOtherId', width: 180, height: 20, marginBottom: 6},
              ]}></SkeletonContent>
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

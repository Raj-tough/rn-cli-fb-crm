import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  Pressable,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import BillCard from './BillCard';
import DatePicker from 'react-native-date-ranges-picker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BillScreen = ({route, navigation}) => {
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');

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
  const renderItem = ({item}) => <BillCard />;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  console.log(route);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* <Text>{opened ? opened : ''}</Text> */}
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
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{
          alignSelf: 'flex-start',
          marginTop: 0.01 * height,
          height: 0.05 * height,
          maxHeight: 0.05 * height,
          paddingHorizontal: 0.01 * width,
          marginHorizontal: 0.01 * width,
        }}>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          onPress={() => {
            setSelectedFilter('all');
          }}
          style={{
            height: 0.05 * height,
            // backgroundColor: 'darkturquoise',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            borderRadius: 5,
            marginHorizontal: 5,
            borderWidth: 1,
            borderColor: selectedFilter === 'all' ? 'green' : 'lightgrey',
            backgroundColor:
              selectedFilter === 'all' ? 'lightgreen' : '#f2f2f2',
          }}>
          <Text>All</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          onPress={() => {
            setSelectedFilter('opened');
          }}
          style={{
            height: 0.05 * height,
            // backgroundColor: 'tomato',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            borderRadius: 5,
            marginHorizontal: 5,
            borderWidth: 1,
            borderColor: selectedFilter === 'opened' ? 'green' : 'lightgrey',
            backgroundColor:
              selectedFilter === 'opened' ? 'lightgreen' : '#f2f2f2',
          }}>
          <Text>opened</Text>
        </Pressable>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          onPress={() => {
            setSelectedFilter('danger');
          }}
          style={{
            height: 0.05 * height,
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            borderRadius: 5,
            marginHorizontal: 5,
            borderWidth: 1,
            borderColor: selectedFilter === 'danger' ? 'green' : 'lightgrey',
            backgroundColor:
              selectedFilter === 'danger' ? 'lightgreen' : '#f2f2f2',
          }}>
          <Text>danger</Text>
        </Pressable>
        <View style={{alignSelf: 'flex-start'}}>
          <DatePicker
            style={{
              height: 0.05 * height,
              paddingHorizontal: 15,
              borderRadius: 5,
              borderWidth: 0,
              // backgroundColor: 'plum',
              borderWidth: 1,
              borderColor: selectedFilter === 'range' ? 'green' : 'lightgrey',
              backgroundColor:
                selectedFilter === 'range' ? 'lightgreen' : '#f2f2f2',
            }}
            onConfirm={(val) => {
              console.log(val);
              setSelectedFilter('range');
            }}
            markText="Select Date range"
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
                  <Text>Show Bills</Text>
                </Pressable>
              );
            }}
            selectedTextColor="black"
            returnFormat="DD/MM/YYYY"
            outFormat="DD/MM/YYYY"
            customStyles={{
              placeholderText: {fontSize: 14, color: 'black'}, // placeHolder style
              headerStyle: {backgroundColor: 'lightblue'}, // title container style
              headerMarkTitle: {}, // title mark style
              headerDateTitle: {}, // title Date style
              contentInput: {}, //content text container style
              contentText: {color: 'black', fontSize: 14}, //after selected text Style
            }} // optional
            centerAlign // optional text will align center or not
            allowFontScaling={false} // optional
            placeholder={'Date range'}
            mode={'range'}
          />
        </View>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          onPress={() => {
            setSelectedFilter('closed');
          }}
          style={{
            height: 0.05 * height,
            // backgroundColor: 'yellowgreen',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            borderRadius: 5,
            marginHorizontal: 5,
            borderWidth: 1,
            borderColor: selectedFilter === 'closed' ? 'green' : 'lightgrey',
            backgroundColor:
              selectedFilter === 'closed' ? 'lightgreen' : '#f2f2f2',
          }}>
          <Text>Closed</Text>
        </Pressable>
      </ScrollView>

      <View
        style={{
          flex: 1,
          marginTop: 0.01 * height,
          width: width,
        }}>
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

export default BillScreen;

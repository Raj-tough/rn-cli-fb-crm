import React from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DashboardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 0.02 * height,
            backgroundColor: 'aquamarine',
            height: 0.07 * height,
            width: 0.7 * width,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'green', fontSize: 20, fontWeight: 'bold'}}>
            SRK CENTERING RENTALS
          </Text>
        </View>
        <View
          style={{
            marginTop: 0.03 * height,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Pressable
            onPress={() => navigation.navigate('Bill')}
            android_ripple={{color: 'lightgrey'}}
            style={{
              height: 0.1 * height,
              width: 0.4 * width,
              elevation: 5,
              borderRadius: 10,
              backgroundColor: 'lightgreen',
              alignItems: 'center',
            }}>
            <Text style={{marginTop: 10, marginBottom: 5}}>
              Total opened bills
            </Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
          </Pressable>
          <Pressable
            android_ripple={{color: 'lightgrey'}}
            style={{
              height: 0.1 * height,
              width: 0.4 * width,
              elevation: 5,
              borderRadius: 10,
              backgroundColor: 'tomato',
              alignItems: 'center',
            }}>
            <Text style={{marginTop: 10, marginBottom: 5}}>
              Total closed bills
            </Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 0.05 * height,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Pressable
            onPress={() => navigation.navigate('Bill')}
            android_ripple={{color: 'lightgrey'}}
            style={{
              height: 0.1 * height,
              width: 0.4 * width,
              elevation: 5,
              borderRadius: 10,
              backgroundColor: 'lightgreen',
              alignItems: 'center',
            }}>
            <Text style={{marginTop: 10, marginBottom: 5}}>
              Bills opened this month
            </Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
          </Pressable>
          <Pressable
            android_ripple={{color: 'lightgrey'}}
            style={{
              height: 0.1 * height,
              width: 0.4 * width,
              elevation: 5,
              borderRadius: 10,
              backgroundColor: 'tomato',
              alignItems: 'center',
            }}>
            <Text style={{marginTop: 10, marginBottom: 5}}>
              Bills closed this month
            </Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
          </Pressable>
        </View>
        <View
          style={{
            marginTop: 0.05 * height,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Pressable
            android_ripple={{color: 'lightgrey'}}
            style={{
              height: 0.1 * height,
              width: 0.4 * width,
              elevation: 5,
              borderRadius: 10,
              backgroundColor: 'orange',
              alignItems: 'center',
            }}>
            <Text style={{marginTop: 10, marginBottom: 5}}>Amount Pending</Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
          </Pressable>
          <Pressable
            android_ripple={{color: 'lightgrey', borderless: false}}
            style={{
              height: 0.1 * height,
              width: 0.4 * width,
              elevation: 5,
              borderRadius: 10,
              backgroundColor: 'red',
              alignItems: 'center',
            }}>
            <Text style={{marginTop: 10, marginBottom: 5}}>Bills danger</Text>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}> 2</Text>
          </Pressable>
        </View>
      </View>
      {/* <Pressable
        android_ripple={{color: 'lightgrey', borderless: false}}
        onPress={() => navigation.navigate('AddBillScreen')}
        style={{
          width: 0.7 * width,
          height: 0.06 * height,
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
          marginVertical: 0.02 * height,
          backgroundColor: 'lightblue',
        }}>
        <Text style={{color: 'dodgerblue', fontSize: 18, fontWeight: 'bold'}}>
          + NEW BILL
        </Text>
      </Pressable> */}
    </View>
  );
};

export default DashboardScreen;

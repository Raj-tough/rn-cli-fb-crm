import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import {CountUp} from 'use-count-up';
import {useDispatch} from 'react-redux';
import {changeBillScreenFilter} from '../../actions/FilterActions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DashboardScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <View
          style={{
            alignItems: 'center',
            marginTop: 0.02 * height,
            backgroundColor: 'aquamarine',
            height: 0.07 * height,
            width: 0.8 * width,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'green', fontSize: 18, fontWeight: 'bold'}}>
            S R K {'  '}C E N T E R I N G {'  '}R E N T A L S
          </Text>
        </View>
        {loading ? (
          <View style={{width: width}}>
            <SkeletonPlaceholder>
              <View
                style={{
                  marginTop: 0.03 * height,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    height: 0.1 * height,
                    width: 0.4 * width,
                    borderRadius: 10,
                    backgroundColor: 'lightgreen',
                    alignItems: 'center',
                  }}></View>
                <View
                  style={{
                    height: 0.1 * height,
                    width: 0.4 * width,
                    borderRadius: 10,
                    backgroundColor: 'tomato',
                    alignItems: 'center',
                  }}></View>
              </View>
              <View
                style={{
                  marginTop: 0.05 * height,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    height: 0.1 * height,
                    width: 0.4 * width,
                    borderRadius: 10,
                    backgroundColor: 'lightgreen',
                    alignItems: 'center',
                  }}></View>
                <View
                  style={{
                    height: 0.1 * height,
                    width: 0.4 * width,
                    borderRadius: 10,
                    backgroundColor: 'tomato',
                    alignItems: 'center',
                  }}></View>
              </View>
              <View
                style={{
                  marginTop: 0.05 * height,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    height: 0.1 * height,
                    width: 0.4 * width,
                    borderRadius: 10,
                    backgroundColor: 'orange',
                    alignItems: 'center',
                  }}></View>
                <View
                  android_ripple={{color: 'lightgrey', borderless: false}}
                  style={{
                    height: 0.1 * height,
                    width: 0.4 * width,
                    borderRadius: 10,
                    backgroundColor: 'red',
                    alignItems: 'center',
                  }}></View>
              </View>
            </SkeletonPlaceholder>
          </View>
        ) : (
          <View>
            <View
              style={{
                marginTop: 0.03 * height,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('Bill');
                  dispatch(changeBillScreenFilter('opened'));
                }}
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
                  Total opened bills
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  <CountUp isCounting end={536} duration={2} />
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('Bill');
                  dispatch(changeBillScreenFilter('closed'));
                }}
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
                  Total closed bills
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  <CountUp isCounting end={2305} duration={2} />
                </Text>
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
                onPress={() => navigation.navigate('BillScreen')}
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
                  Bills opened this month
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  <CountUp isCounting end={1905} duration={2} />
                </Text>
              </Pressable>
              <Pressable
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
                  Bills closed this month
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  <CountUp isCounting end={534} duration={2} />
                </Text>
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
                <Text style={{marginTop: 10, marginBottom: 5}}>
                  Amount Pending
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  <CountUp isCounting end={365} duration={2} />
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('Bill');
                  dispatch(changeBillScreenFilter('danger'));
                }}
                android_ripple={{color: 'lightgrey', borderless: false}}
                style={{
                  height: 0.1 * height,
                  width: 0.4 * width,
                  elevation: 5,
                  borderRadius: 10,
                  backgroundColor: 'red',
                  alignItems: 'center',
                }}>
                <Text style={{marginTop: 10, marginBottom: 5}}>
                  Bills danger
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  <CountUp isCounting end={550} duration={2} />
                </Text>
              </Pressable>
            </View>
          </View>
        )}
      </View>
      <Pressable
        android_ripple={{color: 'lightgrey', borderless: false}}
        onPress={() =>
          navigation.navigate('Bill', {
            screen: 'AddBillScreen',
            params: {id: 2},
          })
        }
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
      </Pressable>
    </View>
  );
};

export default DashboardScreen;

import React from 'react';
import {View, Text, Dimensions, Pressable, StyleSheet} from 'react-native';
import {color} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';
import {logoutUser} from '../../services/AuthService';
import {useDispatch} from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SettingsScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <View
        style={{
          width: 0.9 * width,
          height: 0.07 * height,
          marginTop: 0.04 * height,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: 'lightgrey',
          elevation: 3,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'green'}}>
            SRK RENTALS
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          width: 0.9 * width,
          height: 0.49 * height,
          marginTop: 0.04 * height,
          borderRadius: 2,
          borderWidth: 1,
          borderColor: 'lightgrey',
          elevation: 3,
          backgroundColor: 'white',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            navigation.navigate('ProductStackScreen');
          }}
          android_ripple={{color: 'lightgrey'}}
          style={styles.outerBox}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 0.03 * width}}>
              <Icon name="shapes-outline" color={'black'} size={20} />
            </View>
            <View>
              <Text style={{fontSize: 16, marginLeft: 0.05 * width}}>
                Products
              </Text>
            </View>
          </View>
          <View style={{marginRight: 0.05 * width}}>
            <Text style={{fontSize: 18}}>{'>'}</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('StockScreen')}
          android_ripple={{color: 'lightgrey'}}
          style={styles.outerBox}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 0.03 * width}}>
              <Icon name="stats-chart-outline" color={'black'} size={20} />
            </View>
            <View>
              <Text style={{fontSize: 16, marginLeft: 0.05 * width}}>
                Stocks
              </Text>
            </View>
          </View>
          <View style={{marginRight: 0.05 * width}}>
            <Text style={{fontSize: 18}}>{'>'}</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('CustomerScreen')}
          android_ripple={{color: 'lightgrey'}}
          style={styles.outerBox}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 0.03 * width}}>
              <Icon name="walk-outline" color={'black'} size={20} />
            </View>
            <View>
              <Text style={{fontSize: 16, marginLeft: 0.05 * width}}>
                Customers
              </Text>
            </View>
          </View>
          <View style={{marginRight: 0.05 * width}}>
            <Text style={{fontSize: 18}}>{'>'}</Text>
          </View>
        </Pressable>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          style={styles.outerBox}></Pressable>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          style={styles.outerBox}></Pressable>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          style={styles.outerBox}></Pressable>
        <Pressable
          onPress={() => {
            dispatch(logoutUser());
          }}
          android_ripple={{color: 'lightgrey'}}
          style={{
            ...styles.outerBox,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'dodgerblue'}}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  outerBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: 0.9 * width,
    height: 0.07 * height,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

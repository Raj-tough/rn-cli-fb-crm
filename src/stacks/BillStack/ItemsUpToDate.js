import React, {useState} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ItemsUpToDate = ({data, index}) => {
  const [expanded, setExpanded] = useState(false);

  console.log('rede', index);
  return (
    <View
      style={{
        width: 0.9 * width,
        borderBottomWidth: 0.5,
        borderBottomColor: 'darkgrey',
      }}>
      <View
        style={{
          width: 0.9 * width,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              width: 0.1 * width,
              //   borderLeftWidth: 0.5,
              //   borderLeftColor: 'grey',
              alignItems: 'center',
            }}>
            <Text style={{marginHorizontal: 0.017 * width}}>{index + 1}</Text>
          </View>
          <View
            style={{
              width: 0.27 * width,
              borderLeftWidth: 0.5,
              borderLeftColor: 'grey',
              alignItems: 'center',
            }}>
            <Text style={{marginHorizontal: 0.017 * width}}>
              {data.product.productName}
            </Text>
          </View>
          <View
            style={{
              width: 0.1 * width,
              borderLeftWidth: 0.5,
              borderLeftColor: 'grey',
              alignItems: 'center',
            }}>
            <Text style={{marginHorizontal: 0.017 * width}}>{data.qty}</Text>
          </View>
          <View
            style={{
              width: 0.13 * width,
              borderLeftWidth: 0.5,
              borderLeftColor: 'grey',
              alignItems: 'center',
            }}>
            <Text style={{marginHorizontal: 0.017 * width}}>{data.rent} ₹</Text>
          </View>
          <View
            style={{
              width: 0.15 * width,
              borderLeftWidth: 0.5,
              borderRightWidth: 0.5,
              borderRightColor: 'grey',
              borderLeftColor: 'grey',
              alignItems: 'center',
            }}>
            <Text style={{marginHorizontal: 0.017 * width}}>
              {data.rent * data.qty} ₹
            </Text>
          </View>
          {/* <Text style={{marginHorizontal: 0.017 * width}}>{data.advance}</Text> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // borderRightWidth: 0.5,
            // borderRightColor: 'grey',
          }}>
          <Pressable
            android_ripple={{color: 'grey', radius: 15}}
            style={{
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="pencil-outline" size={15} color={'grey'} />
          </Pressable>
          <Pressable
            onPress={() => {
              setExpanded(!expanded);
            }}
            android_ripple={{color: 'grey', radius: 15}}
            style={{
              height: 30,
              width: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon
              name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
              size={16}
            />
          </Pressable>
        </View>
      </View>
      {expanded ? (
        <View>
          <View>
            <Text>Advance - {data.advance} ₹</Text>
          </View>
          <View>
            <Text>Bill Date - {data.startDate.currentDate}</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemsUpToDate;

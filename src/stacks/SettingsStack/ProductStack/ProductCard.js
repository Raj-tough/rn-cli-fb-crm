import React, {useEffect, useState} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTimelineModal from '../../../components/customTimeline/CustomTimelineModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProductCard = (props) => {
  const [opened, setopened] = useState(false);
  const [showAddTimelinePopup, setShowAddTimelinePopup] = useState(false);

  const {data} = props;

  const hideDialog = () => setShowAddTimelinePopup(false);

  return (
    <>
      <Pressable
        onPress={() => setopened(!opened)}
        android_ripple={{color: 'lightgrey'}}
        style={{
          borderColor: 'lightgrey',
          width: width,
          height: 0.07 * height,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderBottomColor: opened ? 'white' : 'lightgrey',
          backgroundColor: 'white',
        }}>
        {showAddTimelinePopup ? (
          <CustomTimelineModal
            hideDialog={hideDialog}
            data={data}></CustomTimelineModal>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginLeft: 0.05 * width,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Text>
                {data.productName + '   -  total '}
                <Text>
                  {data.quantityHistory.total ? data.quantityHistory.total : 0}
                </Text>
              </Text>
            </View>
            <Pressable
              style={{
                marginLeft: 0.0375 * width,
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => setShowAddTimelinePopup(true)}
              android_ripple={{color: 'grey', radius: 18}}>
              <Icon name="analytics-outline" color="dodgerblue" size={25} />
            </Pressable>
          </View>
          <View style={{marginRight: 0.05 * width}}>
            {opened ? (
              <Icon name="chevron-up-outline" size={20} />
            ) : (
              <Icon name="chevron-down-outline" size={20} />
            )}
          </View>
        </View>
      </Pressable>
      {opened ? (
        <View
          style={{
            borderColor: 'lightgrey',
            width: width,
            borderBottomWidth: 1,
            borderBottomColor: !opened ? 'white' : 'lightgrey',
            backgroundColor: 'white',
            paddingHorizontal: 0.05 * width,
            paddingottom: 0.1 * height,
          }}>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>
              Date of Creation -{' '}
              {data && data.quantityHistory && data.quantityHistory.dateOfCreate
                ? data.quantityHistory.dateOfCreate
                : ''}
            </Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Price - {data.productPrice}</Text>
          </View>
          <View style={{paddingHorizontal: 0.01 * height, marginVertical: 5}}>
            <Text>Rent / day - {data.rent}</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 0.01 * height,
              marginVertical: 5,
              marginBottom: 15,
            }}>
            <Text>
              Size -{' '}
              {data && data.circularDimension && data.circularDimension['dia']
                ? data.circularDimension['dia'] + 'dia'
                : data &&
                  data.rectangulardimension &&
                  data.rectangulardimension['length']
                ? 'L - ' +
                  data.rectangulardimension['length'] +
                  ' x B - ' +
                  data.rectangulardimension['breadth'] +
                  ' x H - ' +
                  data.rectangulardimension['height']
                : ''}
            </Text>
          </View>
        </View>
      ) : null}
    </>
  );
};

export default ProductCard;

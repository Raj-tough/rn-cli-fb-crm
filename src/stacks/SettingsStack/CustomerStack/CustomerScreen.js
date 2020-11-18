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
import {connect, useDispatch} from 'react-redux';
import {getCustomers} from '../../../services/CustomerServices';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomerScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const [cusData, setCusData] = useState([]);
  const [rootData, setRootData] = useState([]);
  const dispatch = useDispatch();
  const {user, customerData} = props;

  useEffect(() => {
    dispatch(getCustomers(user.uid));
  }, []);

  useEffect(() => {
    if (customerData) {
      let tempData = [];
      if (customerData[0]) {
        Object.keys(customerData[0]).map((key) => {
          tempData.push(customerData[0][key]);
        });
        setCusData(tempData);
        setRootData(tempData);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [customerData]);

  const searchResults = (key) => {
    let searchedData = rootData.filter(
      (data) => data.name.slice(0, key.length) === key,
    );
    setCusData(searchedData);
  };

  const renderItem = ({item}) => <CustomerCard data={item} />;

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
          onChangeText={searchResults}
          style={{
            width: 0.65 * width,
            marginLeft: 0.03 * width,
          }}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: 0.01 * height}}>
        {loading ? (
          <View style={{width: 0.95 * width}}>
            <SkeletonPlaceholder>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 0.95 * width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: 0.95 * width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: 0.95 * width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: 0.95 * width,
                    height: 0.07 * height,
                    borderRadius: 4,
                    marginTop: 5,
                  }}
                />
                <View
                  style={{
                    width: 0.95 * width,
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
            data={cusData}
            renderItem={renderItem}
            keyExtractor={(item) => item.phno}
          />
        )}
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    user: state.LoginReducer.user,
    customerData: state.CustomerReducer.customerData,
  };
}
export default connect(mapStateToProps)(CustomerScreen);

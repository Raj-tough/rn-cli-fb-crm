import React from 'react';
import {View, Text} from 'react-native';

const BillScreen = ({route, navigation}) => {
  // const {openBills} = route.params;
  console.log(route);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text>{opened ? opened : ''}</Text> */}
      <Text>Bill screen</Text>
    </View>
  );
};

export default BillScreen;

import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableNativeFeedback,
  Animated,
  Pressable,
  Modal,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Bars} from 'react-native-loader';
import {getDate} from '../../components/getDate';
import {connect} from 'react-redux';
import {updateQty} from '../../services/ProductService';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const AddTimeline = (props) => {
  const {
    action,
    prevQuantity,
    actionQuantity,
    currentQuantity,
    dateOfAction,
  } = props.data;
  return (
    <View
      style={{
        // backgroundColor: 'lightgreen',
        height: 150,
      }}>
      <View
        style={{
          // backgroundColor: 'yellow',
          height: 20,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'steelblue',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 13,
              width: 13,
              backgroundColor: 'springgreen',
              borderRadius: 25,
            }}></View>
        </View>
      </View>
      <View style={{flexDirection: 'row', height: '100%'}}>
        <View
          style={{
            // backgroundColor: 'lightgreen',
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 10,
            borderRightWidth: 1,
            borderRightColor: 'green',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'lightgreen',
              borderRadius: 5,
              height: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <Text style={{color: 'black'}}>{action}</Text>
          </View>
        </View>
        <View
          style={{
            width: '50%',
            borderLeftWidth: 1,
            borderLeftColor: 'green',
          }}>
          <View
            style={{
              marginLeft: 10,
              backgroundColor: 'rgba(75, 214, 112, 0.1)',
              height: '60%',
              //   borderRadius: 15,
              borderBottomLeftRadius: 15,
              borderBottomRightRadius: 15,
              borderTopRightRadius: 15,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{paddingHorizontal: 5}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                {dateOfAction}
              </Text>
              <View style={{marginTop: 5}}>
                <Text>After added - {currentQuantity}</Text>
                <Text>New Qty. - {actionQuantity}</Text>
                <Text>Previous count - {prevQuantity}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
const DeleteTimeline = (props) => {
  const {
    action,
    prevQuantity,
    actionQuantity,
    currentQuantity,
    dateOfAction,
  } = props.data;
  return (
    <View
      style={{
        // backgroundColor: 'tomato',
        height: 150,
      }}>
      <View
        style={{
          // backgroundColor: 'yellow',
          height: 20,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: 'crimson',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 13,
              width: 13,
              backgroundColor: 'tomato',
              borderRadius: 25,
            }}></View>
        </View>
      </View>
      <View style={{flexDirection: 'row', height: '100%'}}>
        <View
          style={{
            width: '50%',
            borderRightWidth: 1,
            borderRightColor: 'red',
          }}>
          <View
            style={{
              marginRight: 10,
              backgroundColor: 'rgba(207, 39, 78, 0.1)',
              height: '60%',
              //   borderRadius: 15,
              borderBottomEndRadius: 15,
              borderBottomStartRadius: 15,
              borderTopLeftRadius: 15,
              borderWidth: 1,
              borderColor: 'crimson',
            }}>
            <View style={{paddingRight: 5, alignItems: 'flex-end'}}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                {dateOfAction}
              </Text>
              <View style={{marginTop: 5, alignItems: 'flex-end'}}>
                <Text>After destroyed - {currentQuantity}</Text>
                <Text>New Qty. - {actionQuantity}</Text>
                <Text>Previous count - {prevQuantity}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            //   backgroundColor: 'lightgreen',
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            paddingLeft: 10,
            borderLeftWidth: 1,
            borderLeftColor: 'red',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'tomato',
              borderRadius: 5,
              height: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
              borderWidth: 1,
              borderColor: 'crimson',
            }}>
            <Text style={{color: 'black'}}>{action}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const StartTimeLine = (props) => {
  return (
    <View
      style={{
        paddingTop: 20,
        height: 50,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
      }}>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'blue',
          borderRadius: 15,
          padding: 10,
          width: '60%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'dodgerblue',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{paddingTop: 2, color: 'black', fontWeight: 'bold'}}>
            Started -
          </Text>
          <Text style={{paddingTop: 2, color: 'black', fontWeight: 'bold'}}>
            {props.startDate}
          </Text>
        </View>
        <Text style={{paddingTop: 2, color: 'white', fontWeight: 'bold'}}>
          Count - {props.total}
        </Text>
      </View>
    </View>
  );
};

const TopSpace = (props) => {
  const [showInputBox, setShowInputBox] = React.useState(false);
  const [action, setAction] = React.useState('');
  const [addAction, setAddAction] = React.useState('');
  const [loading, setLoading] = useState(false);

  const [editQty, setEditQty] = useState(0);

  const {productId, userId, dateOfCreate, total, history} = props;

  const onHandleAddButton = () => {
    setShowInputBox(true);
    setAction('add');
    setEditQty(0);
  };

  const onHandleDestroyButton = () => {
    if (total === 0) {
      showToast("can't delete as we have 0 items");
    } else {
      setShowInputBox(true);
      setAction('destroy');
      setEditQty(0);
    }
  };

  const onSubmitEditQty = () => {
    console.log('history', history);
    // setLoading(true);
    let tempHistory = history;
    let newTotal;
    if (action === 'destroy' && editQty > total) {
      showToast("Can't delete items below total qty.");
      return;
    }
    if (action === 'add') {
      newTotal = parseInt(total) + parseInt(editQty);
    } else {
      newTotal = parseInt(total) - parseInt(editQty);
    }
    let tempObject = {
      action: action === 'add' ? 'Added' : 'Destroyed',
      prevQuantity: total,
      actionQuantity: editQty,
      currentQuantity: newTotal,
      dateOfAction: getDate(),
    };
    console.log('tempHistory', tempHistory);
    if (tempHistory === undefined) {
      tempHistory = [tempObject];
    } else {
      tempHistory = [tempObject, ...history];
    }
    const quantityHistory = {
      total: newTotal,
      dateOfCreate: dateOfCreate,
      history: tempHistory,
    };
    console.log(quantityHistory);
    updateQty(userId, productId, quantityHistory)
      .then(() => {
        if (action === 'add') {
          showToast(editQty + ' quantity added successully !');
        } else {
          showToast(editQty + ' quantity deleted successfully !');
        }
        setLoading(false);
      })
      .catch(() => {
        showToast('something went wrong, try again later');
        setLoading(false);
      });
  };

  const showToast = (msg) => {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  };

  return (
    <View>
      {loading ? (
        <Modal transparent={true}>
          <View
            style={{
              height: height,
              width: width,
              backgroundColor: 'rgba(0,0,0,0.3)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Bars size={10} color="#1e90ff" />
          </View>
        </Modal>
      ) : null}
      <View
        style={{
          height: 50,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          style={{
            height: '80%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onHandleDestroyButton}>
          <View
            style={{
              height: '100%',
              width: 100,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'red'}}>Destroy</Text>
          </View>
        </Pressable>
        <Pressable
          android_ripple={{color: 'lightgrey'}}
          style={{
            height: '80%',
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            // paddingHorizontal: 10,
          }}
          onPress={onHandleAddButton}>
          <View
            style={{
              height: '100%',
              width: 100,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'green'}}>Add</Text>
          </View>
        </Pressable>
      </View>
      {showInputBox ? (
        <View>
          <View style={{marginLeft: 35, marginTop: 5}}>
            <Text style={{color: action === 'add' ? 'green' : 'red'}}>
              Enter Qunatity to {action}
            </Text>
          </View>
          <View
            style={{
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput
                value={editQty}
                onChangeText={setEditQty}
                keyboardType="number-pad"
                style={{
                  borderColor: 'purple',
                  borderWidth: 1,
                  borderRadius: 8,
                  width: 200,
                  paddingLeft: 20,
                }}></TextInput>
              <Pressable
                style={{
                  marginLeft: 5,
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setShowInputBox(false);
                  onSubmitEditQty();
                }}
                android_ripple={{color: 'grey', radius: 25}}>
                <Icon name="checkmark-outline" size={35} color={'green'} />
              </Pressable>
              <Pressable
                android_ripple={{color: 'grey', radius: 25}}
                style={{
                  marginLeft: 5,
                  height: 50,
                  width: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  setShowInputBox(false);
                }}>
                <Icon name="close-outline" size={35} color={'red'}></Icon>
              </Pressable>
            </View>
          </View>
        </View>
      ) : null}
      <View style={{marginBottom: 10}}></View>
    </View>
  );
};
const CustomTimeline = (props) => {
  const {user} = props;
  // console.log('check', props.history);
  return (
    <View
      style={{
        height: 0.63 * height,
        paddingHorizontal: 10,
        // backgroundColor: 'powderblue',
        borderBottomEndRadius: 15,
        borderBottomStartRadius: 15,
        // paddingTop: 10,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopSpace
          history={props.history}
          total={props.total}
          productId={props.productId}
          userId={user.uid}
          dateOfCreate={props.startDate}
        />
        {props.history.map((item, index) => {
          if (item.action === 'Added') {
            return <AddTimeline key={index} data={item} />;
          }
          if (item.action === 'Destroyed') {
            return <DeleteTimeline key={index} data={item} />;
          }
        })}
        <StartTimeLine startDate={props.startDate} total={props.total} />
      </ScrollView>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    user: state.LoginReducer.user,
  };
}

export default connect(mapStateToProps)(CustomTimeline);

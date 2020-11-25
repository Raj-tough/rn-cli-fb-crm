import {firebase} from '../firebase/firebase';
import {storeBillsToState} from '../actions/BillsAction';

export const getBills = (userId) => (dispatch) => {
  console.log('Getting bills from firebase');
  firebase
    .database()
    .ref('bills/' + userId)
    .on('value', (data) => {
      let firstBill = [];
      if (data.val() && data.val().length === undefined) {
        firstBill.push(data.val());
        // console.log('bill', typeof firstBill);
        dispatch(storeBillsToState(firstBill));
      } else {
        console.log('nothing');
        console.log('getservice', typeof data.val());
        dispatch(storeBillsToState(data.val()));
      }
    });
};

export const addBill = (userId, bill) => {
  console.log('Bill is adding');
  return new Promise((resolve, reject) => {
    if (customer !== null) {
      firebase
        .database()
        .ref()
        .child('bills/' + userId)
        .push(bill)
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    }
  });
};

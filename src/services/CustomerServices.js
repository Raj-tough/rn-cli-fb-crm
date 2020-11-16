import {firebase} from '../firebase/firebase';
import {storeCustomersToState} from '../actions/CustomersAction';

export const getCustomers = (userId) => (dispatch) => {
  // console.log('customer getting');
  firebase
    .database()
    .ref('customers/' + userId)
    .on('value', (data) => {
      let firstCustomer = [];
      if (data.val() && data.val().length === undefined) {
        firstCustomer.push(data.val());
        console.log('cutomers', typeof firstCustomer);
        dispatch(storeCustomersToState(firstCustomer));
      } else {
        console.log('nothing');
        console.log('getservice', typeof data.val());
        dispatch(storeCustomersToState(data.val()));
      }
    });
};

export const addCustomer = (userId, customer) => {
  console.log(customer);
  return new Promise((resolve, reject) => {
    console.log('customer adding');
    if (customer !== null) {
      firebase
        .database()
        .ref()
        .child('customers/' + userId)
        .push(customer)
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

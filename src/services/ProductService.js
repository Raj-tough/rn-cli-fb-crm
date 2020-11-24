import {firebase} from '../firebase/firebase';
import {
  storeProductstoState,
  storecategoriestoState,
} from '../actions/productAction';

export const addProduct = (productData, userId) => {
  return new Promise((resolve, reject) => {
    console.log('product adding');
    firebase
      .database()
      .ref()
      .child('products/' + userId)
      .push(productData)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
};

export const addCategory = (userId, categoryData) => {
  return new Promise((resolve, reject) => {
    console.log('category adding');
    firebase
      .database()
      .ref('categories/' + userId)
      .set(categoryData)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
};

export const updateQty = (userId, productId, quantityHistory) => {
  return new Promise((resolve, reject) => {
    console.log('quantity updating..');
    firebase
      .database()
      .ref('products/' + userId + '/' + productId + '/quantityHistory')
      .set(quantityHistory)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
};

export const getAndUpdateCategoryListDataToState = (userId) => (dispatch) => {
  // console.log('getting categories', userId);
  firebase
    .database()
    .ref('categories/' + userId)
    .on('value', (data) => {
      if (!data.val() || data.val === undefined) {
        dispatch(storecategoriestoState([]));
      }
      if (data && data.val()) {
        let tempData = [];
        tempData = data.val().map((data) => ({label: data, value: data}));
        // console.log('data format', tempData);
        dispatch(storecategoriestoState(tempData));
        // console.log(data.val());
      }
    });
};

export const deleteProductFromDatabase = (productId, userId) => {
  console.log(productId, userId);
  firebase
    .database()
    .ref(`products/${userId}/${productId}`)
    .remove(() => {
      console.log('deleted');
    });
};

// export const getProductList = (userId) => {
//     return new Promise( resolve => {
//         fireDb.ref('products/' + userId).on('value',
//             (data) => {
//                 resolve(data.val())
//             })
//         })
//     // .then((data) => {console.log(data)})
//     // .catch((error) => {console.log(error)})
//     // console.log(dbData)
// }

export const getAndUpdateProductListDataToState = (userId, callback) => (
  dispatch,
) => {
  console.log('getting', userId);
  firebase
    .database()
    .ref('products/' + userId)
    .on('value', (data) => {
      if (!data.val() || data.val === undefined) {
        dispatch(storeProductstoState([]));
      }
      if (data && data.val()) {
        dispatch(storeProductstoState(data.val()));
        // console.log(data.val());
      }
    });
};

// export const cleanProductList = () => (dispatch) => {
//   dispatch(cleanProductListAction());
// };

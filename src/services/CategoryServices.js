import {firebase} from '../firebase/firebase';

export const addProduct = (category, userId) => {
    return new Promise((resolve, reject) => {
      console.log('product adding');
      firebase
        .database()
        .ref()
        .child('category/' + userId)
        .push(category)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    });
  };
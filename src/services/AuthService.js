import {
  loggedInSuccessful,
  logout,
  wrongCredentials,
  verifyRequest,
  verifySuccess,
} from '../actions/AuthAction';
// import {fireDb} from '../firebase/firebase';
import {firebase} from '../firebase/firebase';

export const loginUser = (email, password) => (dispatch) => {
  // dispatch(requestLogin());
  console.log('service function runs');
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(loggedInSuccessful(user));
      // getAndUpdateProductListDataToState(user.user.uid)
      // console.log('dispatched')
    })
    .catch((error) => {
      console.log(error);
      dispatch(wrongCredentials());
    });
};

// export const handleSignUp = (email, password) => (dispatch) => {
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then((user) => {
//       dispatch(signUpSuccess(user));
//       console.log(user.user.uid);
//       fireDb
//         .ref('users/' + user.user.uid)
//         .set({user_id: user.user.uid, date: String(new Date())})
//         .then(() => {
//           console.log('created sucessfully');
//         })
//         .catch((errors) => {
//           console.log(errors);
//         });
//     })
//     .catch((error) => {
//       dispatch(loginError());
//     });
// };

export const logoutUser = () => (dispatch) => {
  // dispatch(requestLogout());
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(logout());
    })
    .catch((error) => {
      // dispatch(logoutError());
    });
};

export const verifyAuth = () => (dispatch) => {
  dispatch(verifyRequest());
  firebase.auth().onAuthStateChanged((user) => {
    if (user !== null) {
      dispatch(loggedInSuccessful(user));
    }
    dispatch(verifySuccess());
  });
};

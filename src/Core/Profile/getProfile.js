import {firestore,auth} from '../config/config'
import { useSelector, useDispatch } from 'react-redux';
// import {GetProfile} from '../../components/actions/index';
const usersCollection = firestore().collection('Users');
const communityCollection = firestore().collection('JoinCommunity');
export const getProfile = (uid,callback) => {
   
          usersCollection
            .doc(uid)
            .get()
            .then(function (firestoreDocument) {
              if (!firestoreDocument.exists) {
                // resolve({ errorCode: ErrorCode.noUser });
                return;
              }
              const user = firestoreDocument.data();
              const newUserData = {
                ...user,
              };
             
            callback(newUserData)
            
            })
    .catch(error => {
          console.log("Error====>",error)
  
    //   callback(error);
    });
}

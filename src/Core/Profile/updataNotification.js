import {firestore,auth} from '../config/config'
import {EditProfile} from '../../components/actions/index';
const userCollection = firestore().collection('Users');
  export const updateProfile = (user_id,notification,count,time) => {
    
    const userData = {
       NotificationToken:notification,active_count:count,timestamp:time
    };
    userCollection
      .doc(user_id).update(userData)
      .then((response) => {
      })
      .catch((error) => {
        console.log("DataError=====>",error)
      });
  };
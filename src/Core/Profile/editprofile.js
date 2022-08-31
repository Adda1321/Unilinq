import {firestore,auth} from '../config/config'
import {EditProfile} from '../../components/actions/index';
const userCollection = firestore().collection('Users');
  export const editProfile = (user_id,profileImage,bio,dispatch) => {
      
    const userData = {
      bio,image:profileImage
    };
    userCollection
      .doc(user_id).update(userData)
      .then((response) => {
        userCollection
        .doc(user_id)
        .get()
        .then(function (firestoreDocument) {
          const user = firestoreDocument.data();
          const newUserData = {
            ...userData,
            ...user,
          };
          
           dispatch(EditProfile(newUserData));
         
        }).catch((err)=>{
          console.log("Error====?",err)
        })
      })
      .catch((error) => {
        console.log("DataError=====>",error)
      });
  };
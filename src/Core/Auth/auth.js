import {firestore,auth} from '../config/config'
import { useSelector, useDispatch } from 'react-redux';
import {SignUp,SignIn} from '../../components/actions/index';
import {getAllJoinedCommunity} from '../Communities/getAllJoinedCommunities'
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {updateProfile} from '../Profile/updataNotification'
import { now } from 'lodash';
// import messaging from '@react-native-firebase/messaging';
const usersCollection = firestore().collection('Users');
export const signout = (callback) => {
  auth()
  .signOut()
  .then(() => {
    // alert("ALERT LOGOUTT")
    callback('User signed out!')
  });
}

export const signUp = async(email,password,firstName,lastName,profileImage,bio,degree,university_name,dispatch) => {
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then((response) => {
        const uid = response.user.uid;

        const userData = {
          email,
          degree,
          password,
          first_name:firstName,
          last_name:lastName,
          image:profileImage,
          bio,
          id: uid,
          university_name,
          active_count :1,
          timestamp:new Date()
        }; 
        usersCollection
          .doc(uid)
          .set(userData)
          .then(async () => {
           
            await AsyncStorage.setItem('email', email.trim());
            await AsyncStorage.setItem('password', password.trim());
            dispatch(SignUp(uid,email,firstName,lastName,profileImage,bio));
          })
          .catch((error) => {
           
          });
        
    })
    .catch(error => {
          
  
    //   callback(error);
    }); 
}

export const signIn = async(email,password,dispatch,callback) => {
    auth()
    .signInWithEmailAndPassword(email,password)
    .then(async (response) => {
      
        const uid = response.user.uid;
        var token = await AsyncStorage.getItem('token','')
        
          // updateProfile(uid,token)
      
        const userData = {
            email,
            password,
            id: uid,
          };
          usersCollection
            .doc(uid)
            .get()
            .then(async function (firestoreDocument) {
              // if (!firestoreDocument.exists) {
              //   callback(ErrorCode.noUser);
              //   return;
              // }
              const user = firestoreDocument.data();
              var count = user.active_count;
              count=count+1;
              var time = now()
              
              updateProfile(uid,token,count,time)
              const newUserData = {
                ...userData,
                ...user,
                auth:true
              };
           
              await AsyncStorage.setItem('email', email.trim());
              await AsyncStorage.setItem('password', password.trim());
              await  dispatch(SignIn(newUserData));
            
              //  callback('Login')
             
            }).catch(error => {
              if (error.code === 'auth/email-already-in-use') {
               callback('That email address is already in use!');
              }
          
              if (error.code === 'auth/invalid-email') {
               callback('That email address is invalid!');
              }
          
              // console.error(error);
            });
       
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        callback('That email address is already in use!');
       }
   
       if (error.code === 'auth/invalid-email') {
        callback('That email address is invalid!');
       }
       if(error.code === 'auth/user-not-found'){
         callback("No user found")
       }
       if(error.code === 'auth/wrong-password'){
         callback('Password not correct please try again')
       }
       
   
      //  console.error(error);
     
      // callback(error.code);
    });
}

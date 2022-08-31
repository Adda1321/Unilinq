import { initializeApp } from 'firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyDMauKV3e_YjWukiH1ElhpQkfIPR9dhhy8",
  authDomain: "unilinq-4a786.firebaseapp.com",
  projectId: "unilinq-4a786",
  storageBucket: "unilinq-4a786.appspot.com",
  messagingSenderId: "1072608441825",
  appId: "1:1072608441825:web:5b9ca6e00dfa3731ea0ea0"
  };
  
  const firebase = initializeApp(firebaseConfig)
  
  export { firebase,firestore,auth };
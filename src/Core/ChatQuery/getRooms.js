import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { GetRooms } from '../../components/actions';
import { auth,firestore } from '../config/config';
// import { firestore } from '../config/config';

export const getRooms = (dispatch) => {
  // console.log("GET ROOOOOOOOOOOOOOOOOOOOOOOOOM---------------------------------------------------------------")
   firestore()
    .collection('Chatroom')
    .where('members', 'array-contains',auth()?.currentUser.uid)
    .onSnapshot({includeMetadataChanges: true}, querySnapshot => {
  
      const posts = [];
        querySnapshot.forEach(doc => {
          const post = doc.data();
        
          post.id = doc.id;
          posts.push(post);
        });
        // console.log("Post -----------------------///>>>>>>>>>",posts)
        dispatch(GetRooms(posts))
     
    });
};

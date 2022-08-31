import React,{useState} from 'react'
import {firestore,auth} from '../config/config'
import {AllJoinedGetCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('JoinEvent');
const joinedCommunities= firestore().collection('Users');
const tagsCollection = firestore().collection('Tags');
export const getAllJoinedEventMembers = async(uid,callback) => {

communityCollection.where("event_id",'==',uid).where("status",'==','Joined').onSnapshot(
    { includeMetadataChanges: true },
    (querySnapshot) => {
      const posts = [];

      if(querySnapshot.docs.length > 0) {
          var count = 1
      querySnapshot.forEach(async(doc,i) => {
         
        const post = doc.data();
      await  joinedCommunities.doc(post.user_id).get().then(function (firestoreDocument) {
         
          const post = firestoreDocument.data();
        post.id = firestoreDocument?.id;
        posts.push(post);
      });

      console.log("Posts======================?",querySnapshot._docs.length )
      if(querySnapshot._docs.length == count){
        return callback(posts);
       
      }
    count = count +1
   
    },
    (error) => {
      console.log(error);
      callback([]);
    },
  );
 
      }
      else {
        callback([])
      }


})
}
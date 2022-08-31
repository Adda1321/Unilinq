import React,{useState} from 'react'
import {firestore,auth} from '../config/config'
import {AllJoinedGetCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('JoinCommunity');
const joinedCommunities= firestore().collection('Users');
const tagsCollection = firestore().collection('Tags');
export const getAllJoinedMembers = async(uid,callback) => {

communityCollection.where("community_id",'==',uid).where("status",'==','Joined').onSnapshot(
    { includeMetadataChanges: true },
    (querySnapshot) => {
      const posts = [];

      if(querySnapshot.docs.length > 0) {
      querySnapshot.forEach(async(doc,i) => {
         
        const post = doc.data();
      await  joinedCommunities.doc(post.user_id).get().then(function (firestoreDocument) {
         
          const post = firestoreDocument.data();
        post.id = firestoreDocument?.id;
        posts.push(post);
      });

     
      if(querySnapshot._docs.length == i+1){
        return callback(posts);
      }
      
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
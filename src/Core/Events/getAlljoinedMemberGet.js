import React,{useState} from 'react'
import {firestore,auth} from '../config/config'
import {AllJoinedGetCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('JoinEvent');
const joinedCommunities= firestore().collection('Users');
const tagsCollection = firestore().collection('Tags');
export const getAllJoinedEventMembersGet = async(uid,callback) => {
   
    const posts = []
   
communityCollection.where("event_id",'==',uid).where("status",'==','Joined')
    .get().then(function (firestoreDocument) {
        const posts = [];

        if(firestoreDocument.docs.length > 0) {
            var count = 1
            firestoreDocument.forEach(async(doc,i) => {
           
          const post = doc.data();
        await  joinedCommunities.doc(post.user_id).get().then(function (firestoreDocument) {
           
            const post = firestoreDocument.data();
          post.id = firestoreDocument?.id;
          posts.push(post);
        });
  
        console.log("Posts======================?",firestoreDocument._docs.length )
        if(firestoreDocument._docs.length == count){
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
     

     
      
  
   
 
    

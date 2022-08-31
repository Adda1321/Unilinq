import React,{useState} from 'react'
import {firestore,auth} from '../config/config'
import {AllJoinedGetCommunity,AllJoinedMembers} from '../../components/actions/index';
const communityCollection = firestore().collection('JoinCommunity');
const joinedCommunities= firestore().collection('Users');
const tagsCollection = firestore().collection('Tags');
const posts = []
export const getAllMembers = async(res,callback) => {
      
         res.map(async (item,index)=>{
       await joinedCommunities.doc(item.user_id).get().then(function (firestoreDocument) {
         
        const post = firestoreDocument.data();
     
        post.id = firestoreDocument.id;
        posts.push(post);
         })
        
        if(res.length == index+1){
            
            callback(posts);
        }
      });

     
    //   dispatch(AllJoinedMembers(posts))
   
      
           
    

}




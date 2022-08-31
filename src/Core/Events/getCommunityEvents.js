import React,{useState} from 'react'
import {firestore,auth} from '../config/config'
import {AllJoinedGetCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('Event');
const joinedCommunities= firestore().collection('Event');
const tagsCollection = firestore().collection('Tags');
export const getCommunityEvents = async(uid,callback) => {
   

    communityCollection.where("community_id",'==',uid).onSnapshot(
        //         .doc(id)
        //         .get()
        //         .then(function (firestoreDocument) {
        //           if (!firestoreDocument.exists) {
        //             // resolve({ errorCode: ErrorCode.noUser });
        //             return;
        //           }
        //           const user = firestoreDocument.data();
        //           const newUserData = {
        //             ...user,
        //           };
        //         callback(newUserData)
        //           console.log("Userdata====>",newUserData)
        //         })
        // .catch(error => {
        //       console.log("Error====>",error)
      
        // //   callback(error);
        // });
        { includeMetadataChanges: true },
          (querySnapshot) => {
            const tags = [];
            querySnapshot.forEach((doc) => {
              const tag = doc.data();
              tag.id = doc.id;
              tags.push(tag);
            });
    
           
            // dispatch(GetCommunity(posts))
            return callback(tags);
          },
          (error) => {
            console.log(error);
            // callback([]);
          },
        )
}
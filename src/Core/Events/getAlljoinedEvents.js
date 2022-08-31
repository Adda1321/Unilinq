import {firestore,auth} from '../config/config'
import {AllJoinedGetCommunity} from '../../components/actions/index';
import { firebase } from '@react-native-firebase/firestore';
import { call } from 'react-native-reanimated';
import { useCallback } from 'react';
import {getAllJoinedEventMembers} from '../Events/getAllJoinedEventMembers'
const communityCollection = firestore().collection('JoinEvent');
const joinedCommunities= firestore().collection('Event');
const tagsCollection = firestore().collection('Tags');
export const getAllJoinedEvents = (uid,callback) => {
     console.log("UID----------------->",uid)
     if(uid != undefined){
communityCollection.where("user_id",'==',uid).where("status",'==','Joined').onSnapshot(
      { includeMetadataChanges: true },
      
      (querySnapshot) => {
        // if(querySnapshot.docs.length > 0) {
         
          if(querySnapshot.docs.length > 0) {
        const posts = [];
      
       
        querySnapshot.forEach((doc) => {
          const post = doc.data();
         
          joinedCommunities.doc(post?.event_id).get().then(function (firestoreDocument) {
         
            const post = firestoreDocument.data();
          post.id = firestoreDocument?.id;
           getAllJoinedEventMembers(post.id,async(res)=>{
           
         
            post.number = res.length
            console.log("Res======?",post.number)
            posts.push(post);
           
            callback(posts)
           
           
          })
          // posts.push(post);
        //   dispatch(AllJoinedGetCommunity(posts))
          
         
        });

       
      
        
        
        // return callback(posts);
      },
      (error) => {
        // console.log(error);
        // callback([]);
      },
    );
          }
          else {
            callback([])
          }
        // }
        // else{
        //   dispatch(AllJoinedGetCommunity(undefined))
        // }

})
     }
    
}
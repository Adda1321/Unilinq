import {firestore,auth} from '../config/config'
import {AllJoinedGetCommunity} from '../../components/actions/index';
import { firebase } from '@react-native-firebase/firestore';
const communityCollection = firestore().collection('JoinCommunity');
const joinedCommunities= firestore().collection('Community');
const tagsCollection = firestore().collection('Tags');
export const getAllJoinedCommunity = (uid,dispatch) => {
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
         
          joinedCommunities.doc(post?.community_id).get().then(function (firestoreDocument) {
         
            const post = firestoreDocument.data();
          post.id = firestoreDocument?.id;
          if(post.status == "Approved"){
            posts.push(post);
            dispatch(AllJoinedGetCommunity(posts))
          }
         
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
            dispatch(AllJoinedGetCommunity([]))
          }
        // }
        // else{
        //   dispatch(AllJoinedGetCommunity(undefined))
        // }

})
     }
    
}
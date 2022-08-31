import {firestore} from '../config/config'
import {GetCommunity} from '../../components/actions/index';
import {getAllJoinedMembers} from './getAllJoinedMembers'
import {getAllJoinedCommunity} from './getAllJoinedCommunities'
import { auth } from '../config/config';
const communityCollection = firestore().collection('Community');
const tagsCollection = firestore().collection('Tags');

export const getCommunity = (dispatch) => {
   
    communityCollection.onSnapshot(
      { includeMetadataChanges: true },
      (querySnapshot) => {
        if(querySnapshot.docs.length > 0) {
        const posts = [];
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          post.id = doc.id;
          posts.push(post);
        });
         
         
            getAllJoinedCommunity(auth()?.currentUser?.uid,dispatch)
            dispatch(GetCommunity(posts))
        
        
     
       
       
        // return callback(posts);
        }
    
      else {
        dispatch(GetCommunity([]))
      }
    }
    );

}
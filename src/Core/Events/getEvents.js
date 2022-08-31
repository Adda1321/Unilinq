import {firestore} from '../config/config'
import {GetEvents} from '../../components/actions/index';
import {getAllJoinedEventMembersGet} from '../Events/getAlljoinedMemberGet'
// import {getAllJoinedMembers} from './getAllJoinedMembers'
// import {getAllJoinedCommunity} from './getAllJoinedCommunities'
import { auth } from '../config/config';
const communityCollection = firestore().collection('Event');
const tagsCollection = firestore().collection('Tags');

export const getEvents = async(dispatch) => {
   
    communityCollection.onSnapshot(
      { includeMetadataChanges: true },
      (querySnapshot) => {
        if(querySnapshot.docs.length > 0) {
        const posts = [];
        querySnapshot.forEach(async(doc) => {
          const post = doc.data();
          post.id = doc.id;
          await getAllJoinedEventMembersGet(doc.id,async(res)=>{
           
          console.log("Data==============>",res.length)
          post.number = res.length
          
          posts.push(post);
         
          dispatch(GetEvents(posts))
          
         
        })
        
        });
         
         
            // getAllJoinedCommunity(auth()?.currentUser?.uid,dispatch)
            
        
        
     
       
       
        // return callback(posts);
        }
    
      else {
        dispatch(GetEvents([]))
      }
    }
    );

}
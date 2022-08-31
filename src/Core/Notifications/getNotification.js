
import {firestore} from '../config/config'
import { GETNOTIFICATIONS } from '../../components/actions/index';

const communityCollection = firestore().collection('Notifications');


export const getNotifications = async(dispatch) => {
   
    communityCollection.onSnapshot(
      { includeMetadataChanges: true },
      (querySnapshot) => {
        if(querySnapshot.docs.length > 0) {
        const posts = [];
        
        querySnapshot.forEach(async(doc) => {
          const post = doc.data();
          post.id = doc.id;
       
           
          posts.push(post);
       
          dispatch(GETNOTIFICATIONS(posts))
          
         
        // })
        
        });
         
         
            // getAllJoinedCommunity(auth()?.currentUser?.uid,dispatch)
            
        
        
     
       
       
        // return callback(posts);
        }
    
      else {
        dispatch(GETNOTIFICATIONS([]))
      }
    }
    );

}
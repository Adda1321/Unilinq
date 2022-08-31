import {firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('JoinEvent');
const tagsCollection = firestore().collection('Tags');
  export const joinEvent = (user_id,communityId,status,callback) => {
   
    const userData = {
      user_id,event_id:communityId,status
    };
    communityCollection
      .add(userData)
      .then((response) => {
        callback("Joined")
        // tagsCollection.doc().add(tags)
        
      })
      .catch((error) => {
        console.log("DataError=====>",error)
      });
  };
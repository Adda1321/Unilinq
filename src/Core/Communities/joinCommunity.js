import {firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('JoinCommunity');
const tagsCollection = firestore().collection('Tags');
  export const joinCommunity = (user_id,communityId,status,callback) => {
   
    const userData = {
      user_id,community_id:communityId,status
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
import {firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('JoinCommunity');
const tagsCollection = firestore().collection('Tags');
  export const acceptCommunity = (id,community_id,callback) => {
    communityCollection.where("user_id",'==',id).where("community_id",'==',community_id).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(document) {
         document.ref.update({ status:'Joined' }); 
         callback('Updated')
        });
      });
      
      
    

  }
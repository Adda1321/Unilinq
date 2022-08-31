import {firebase,firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('Community');
const tagsCollection = firestore().collection('Tags');
  export const deleteTags = (community_id,user_id,communityName,communityType,communityStatus,category_id,communityDescription,status,tags,arr,dispatch,callback) => {
    
    const userData = {
        user_id,community_name:communityName,community_type:communityType,community_status:communityStatus,category_id,community_description:communityDescription,status
    };
    tagsCollection.where("community_id",'==',community_id).get()
  .then(function(querySnapshot) {
        // Once we get the results, begin a batch
        var batch = firestore().batch();

        querySnapshot.forEach(function(doc) {
            // For each doc, add a delete operation to the batch
            batch.delete(doc.ref);
        });

        // Commit the batch
        return batch.commit();
  }).then(function() {
    callback("Updated")
  }); 
   
      
         
         
          
        // tagsCollection.doc().add(tags)
      
   
   
  };
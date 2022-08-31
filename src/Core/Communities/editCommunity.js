import {firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('Community');
const tagsCollection = firestore().collection('Tags');
  export const editCommunity = (community_id,user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status,tags,arr,dispatch,callback) => {
  
    const userData = {
        user_id,community_name:communityName,community_type:communityType,community_status:communityStatus,category_id,community_description:communityDescription,community_image:communityImage,status
    };
    
      communityCollection.doc(community_id)
      .update(userData)
      .then((response) => {
       
        if(tags.tagsArray?.length == 0){
          dispatch(AddCommunity(user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status));
          callback("Updated")
        }
        else {
          for(let i=0 ; i<tags.tagsArray?.length ; i++){
           
            tagsCollection
            .add({
              user_id:user_id,
              community_id:community_id,
              keywords: tags.tagsArray[i]
           })
           if(i+1==tags.tagsArray?.length){
            dispatch(AddCommunity(user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status));
            callback("Updated")
           }
          }
        }
        
           
          
       
        
      })
      .catch((error) => {
        // console.log("DataError=====>",error)
      });
   
    
   
  };
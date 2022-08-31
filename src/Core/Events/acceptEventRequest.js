import {firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('Event');
const tagsCollection = firestore().collection('Tags');
  export const acceptEvent = (eventid,callback) => {
  
    const userData = {
       status:'Approved'
    };
    
      communityCollection.doc(eventid)
      .update(userData)
      .then((response) => {
       console.log("Ddsdsdsdsaqqqqq=========>",response)
        // if(tags.tagsArray?.length == 0){
        //   dispatch(AddCommunity(user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status));
          callback("Updated")
        // }
        // else {
        //   for(let i=0 ; i<tags.tagsArray?.length ; i++){
           
        //     tagsCollection
        //     .add({
        //       user_id:user_id,
        //       community_id:community_id,
        //       keywords: tags.tagsArray[i]
        //    })
        //    if(i+1==tags.tagsArray?.length){
        //     dispatch(AddCommunity(user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status));
        //     callback("Updated")
        //    }
        //   }
        // }
        
           
          
       
        
      })
      .catch((error) => {
        console.log("Ddsdsdsdsaqqqqq=========>",error)
        // console.log("DataError=====>",error)
      });
   
    
   
  };
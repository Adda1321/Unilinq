import {firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
const communityCollection = firestore().collection('Event');
const tagsCollection = firestore().collection('Tags');
  export const editEvent = (user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status,event_start_time,
    event_end_time,
    event_start_date,
    event_end_date,
    participant_number,
    unlimited_participant,event_repeat_status,community_id,eventid, event_location,
    event_link,dispatch,callback) => {
  
    const userData = {
        user_id,event_name:communityName,event_type:communityType,event_status:'Public',event_category:category_id,event_description:communityDescription,event_image:communityImage,status,event_start_time,
      event_end_time,
      event_start_date,
      event_end_date,
      participant_number,
      unlimited_participant,
      event_repeat_status,
      community_id,
      event_location,
      event_link,
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
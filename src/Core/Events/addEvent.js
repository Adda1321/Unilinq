import {firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
import { joinEvent } from './joinEvent';
import { addNotification } from '../Notifications/addNotification';

const communityCollection = firestore().collection('Event');
const CommunityCollection = firestore().collection('Notifications');
const tagsCollection = firestore().collection('Tags');
  export const addEvent = async (user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status,event_start_time,
    event_end_time,
    event_start_date,
    event_end_date,
    participant_number,
    unlimited_participant,event_repeat_status,community_id, event_location,
    event_link,dispatch) => {
    // console.log("Add====>",user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status,)
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
    
    
    let docRef =communityCollection
      .add(userData);
      try {
        const docAdded = await docRef;
        console.log("Dsdsdsdsdsd=========",docAdded.id);
        CommunityCollection
      .add({
        user_id:user_id,eventid:docAdded.id,community_id:false,notificationString:`A new event ${communityName} has been created`
      })
        
       
        console.log("EEEEEEEEEEEEE+====================>")
        joinEvent(user_id,docAdded.id,'Joined',(res)=>{
         
        })
       
        
      }
      catch (err) {
       
      }
      // .then(async(response) => {
      //   console.log("Addfffff====>",user_id,response._documentPath._parts[1],null,`A new event ${event_name} has been created`)
      
       
        
      //   // for(let i=0 ; i<tags.tagsArray?.length ; i++){
      //   //   tagsCollection
      //   //   .add({
      //   //     user_id:user_id,
      //   //     community_id:response._documentPath._parts[1],
      //   //     keywords: tags.tagsArray[i]
      //   //  })
         
      //   // }
        
      //  await joinEvent(user_id,response._documentPath._parts[1],'Joined')
      //  await addNotification(user_id,response._documentPath._parts[1],null,`A new event ${event_name} has been created`)
      //   // dispatch(AddCommunity(user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status));
          
      //   // tagsCollection.doc().add(tags)
        
      // })
      // .catch((error) => {
      //   // console.log("DataError=====>",error)
      // });
  };
import {firestore,auth} from '../config/config'


const CommunityCollection = firestore().collection('Notifications');

  export const addNotification = (user_id,event_id,community_id,notificationstring) => {
  console.log("Ewwwwwwwqqqqqq========>",user_id,event_id,community_id,notificationstring)
    const userData = {
       user_id, event_id:event_id,community_id:community_id,notificationstring
    };
    
    
    CommunityCollection
      .add(userData)
     
  };
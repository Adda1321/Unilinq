import {firestore,auth} from '../config/config'
import {AddCommunity} from '../../components/actions/index';
import { joinCommunity } from './joinCommunity';
const communityCollection = firestore().collection('Community');
const tagsCollection = firestore().collection('Tags');
const CommunityNotification = firestore().collection('Notifications');
  export const addCommunity = (user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status,tags,dispatch) => {
    // console.log("Add====>",user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status,)
    const userData = {
      user_id,community_name:communityName,community_type:communityType,community_status:communityStatus,category_id,community_description:communityDescription,community_image:communityImage,status
    };
//    console.log("UserData=----------------------------------------------------?",userData)

    communityCollection
      .add(userData)
      .then((response) => {
        // console.log("POST ADDED ------------------------->>>>>",response)
        for(let i=0 ; i<tags.tagsArray?.length ; i++){
          tagsCollection
          .add({
            user_id:user_id,
            community_id:response._documentPath._parts[1],
            keywords: tags.tagsArray[i]
         })
         
        }
        CommunityNotification
        .add({
          user_id:user_id,eventid:false,community_id:response._documentPath._parts[1],notificationString:`A new community ${communityName} has been created`
        })
         joinCommunity(user_id,response._documentPath._parts[1],'Joined')
        dispatch(AddCommunity(user_id,communityName,communityType,communityStatus,category_id,communityDescription,communityImage,status));
          
        // tagsCollection.doc().add(tags)
        
      })
      .catch((error) => {
        // console.log("DataError====----------------------------------------------=>",error)
      });
  };
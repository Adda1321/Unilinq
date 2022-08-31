import {firestore,auth} from '../config/config'
import { useSelector, useDispatch } from 'react-redux';
// import {GetProfile} from '../../components/actions/index';
const usersCollection = firestore().collection('Users');
const communityCollection = firestore().collection('Event');
export const deleteEventRequest = (uid,cid,callback) => {
    communityCollection.where("user_id",'==',uid).where("community_id",'==',cid).get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.ref.delete();
        });
      callback('delete')
      
    })
}
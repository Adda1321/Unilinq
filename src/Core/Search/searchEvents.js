
import {firestore,auth} from '../config/config'

const communityCollection = firestore().collection('Community');
const tagsCollection = firestore().collection('Event');
export const searchEvents = (searchString,callback) => {
  
  setTimeout(()=>{
   
    tagsCollection
    .orderBy('event_name')
    .where("event_name", ">=", searchString)
    .where("event_name", "<=", searchString + "\uf8ff")
    .get()
    .then(function (firestoreDocument) {
      const postss = [];
      // const post = firestoreDocument.data();
      postss.push(firestoreDocument?._docs[0]?._data);
       callback(postss)
      
    })
  },1000)
      

}
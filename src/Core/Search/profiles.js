
import {firestore,auth} from '../config/config'

const communityCollection = firestore().collection('Community');
const tagsCollection = firestore().collection('Users');
export const searchProfiles = (searchString,callback) => {
  
  setTimeout(()=>{
   
    tagsCollection
    .orderBy('first_name')
    .where("first_name", ">=", searchString)
    .where("first_name", "<=", searchString + "\uf8ff")
    .get()
    .then(function (firestoreDocument) {
      const postss = [];
      // const post = firestoreDocument.data();
      postss.push(firestoreDocument?._docs[0]?._data);
       callback(postss)
      
    })
  },1000)
      

}
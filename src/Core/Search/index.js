
import {firestore,auth} from '../config/config'

const communityCollection = firestore().collection('Community');
const tagsCollection = firestore().collection('Tags');
export const search = (searchString,callback) => {
  
  setTimeout(()=>{
    communityCollection
    .orderBy('community_name')
    .where("community_name", ">=", searchString)
    .where("community_name", "<=", searchString + "\uf8ff")
    .get()
    .then(function (firestoreDocument) {
      // tagsCollection.orderBy('keywords').where("community_name", ">=", searchString)
      // .where("community_name", "<=", searchString + "\uf8ff")
      // .get().then(function(firestoreDocument){

      // })
      const posts = [];
      // const post = firestoreDocument.data();
      posts.push(firestoreDocument?._docs[0]?._data);
      callback(posts)
      
    })
   
    
  },1000)
      

}
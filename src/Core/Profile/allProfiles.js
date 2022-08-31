import {firestore,auth} from '../config/config'
import {GetCommunity} from '../../components/actions/index';
import {getAllJoinedMembers} from './getAllJoinedMembers'
const communityCollection = firestore().collection('Users');
const tagsCollection = firestore().collection('Tags');
export const getAllUsers = (callback) => {
    communityCollection.onSnapshot(
      { includeMetadataChanges: true },
      (querySnapshot) => {
        const posts = [];
        querySnapshot.forEach((doc) => {
          const post = doc.data();
          post.id = doc.id;
          posts.push(post);
        });
        console.log("AllProfiles=========================================================>")
       
        callback(posts)
        // return callback(posts);
      },
      (error) => {
        console.log(error);
        // callback([]);
      },
    );

}
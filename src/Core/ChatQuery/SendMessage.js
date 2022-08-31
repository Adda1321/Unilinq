// import {firestore, auth} from '../config/config';

// // const PersonChat = firestore().collection('PersonTOPerson');

// // const messages = firestore().collection('messages');

// export const sendMessage = ({sender_id, receiver_id , text}) => {
//     roomId = newId()
//   db.collection('rooms').doc(roomId).collection('messages').add({
//     sender: sender_id,
//     receiver: receiver_id,
    
//     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//     message: text,
    
    
//   });
// };
// //   export const acceptCommunity = (id,community_id,callback) => {
// //     communityCollection.where("user_id",'==',id).where("community_id",'==',community_id).get().then(function(querySnapshot) {

// //         querySnapshot.forEach(function(document) {
// //          document.ref.update({ status:'Joined' });
// //          callback('Updated')
// //         });
// //       });

// //     }

// // const sendMessage = () => {
// //     if(input.trim() !=""){
// //       Keyboard.dismiss();
// //       console.log("Dssaqqqqqqq======>",props.users?.first_name)
// //       firestore().collection("Chats").doc(props.route.params.id).collection("messages").add({
// //         timestamp: new Date(),
// //         timeOnly:new Date().getTime,
// //         message: input,
// //         displayName: props.users?.first_name,
// //         email: auth()?.currentUser.email,
// //         photoURL: props.users?.profile_image,
// //         // date:
// //       });

// //       setInput("");
// //     }

// //   };

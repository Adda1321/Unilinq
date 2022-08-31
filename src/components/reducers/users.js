export default function(state={},action){
    switch(action.type){
          case 'SignUp':
                 return {...state,data:action.id,email:action.email,first_name:action.first_name,last_name:action.last_name,profile_image:action.profile_image,bio:action.bio,loading:true};
          case 'SignIn':
                     return {...state,id:action.id,email:action.email,first_name:action.first_name,last_name:action.last_name,profile_image:action.profile_image,bio:action.bio,notification:action.notification,timestamp:action.timestamp,loading:true};
          case 'EditProfile':
                     return {...state,id:action.id,email:action.email,first_name:action.first_name,last_name:action.last_name,profile_image:action.profile_image,bio:action.bio};
          default:
                  return state;
 
 }

 }
export default function(state={},action){
    switch(action.type){
          case 'loginUser':
                 return {...state,id:action.id,first_name:action.first_name,last_name:action.last_name,email:action.email,bio:action.bio,role_id:action.role_id};
          default:
                  return state;
 
 }

 }
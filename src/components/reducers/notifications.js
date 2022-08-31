export default function(state={},action){
    switch(action.type){
          case 'GET_NOTIFICATIONS':
                 return {...state,data:action.data};
          default:
                  return state;
 
 }

 }
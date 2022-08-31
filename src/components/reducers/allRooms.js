export default function(state={},action){
    switch(action.type){
          case 'GET_ROOMS':
                 return {...state,data:action.data};
          default:
                  return state;
 
 }

 }
export default function(state={},action){
    switch(action.type){
          case 'Get_Events':
                 return {...state,data:action.data};
          default:
                  return state;
 
 }

 }
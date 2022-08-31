export default function(state={},action){
    switch(action.type){
          case 'Get_Community':
                 return {...state,data:action.data};
          default:
                  return state;
 
 }

 }